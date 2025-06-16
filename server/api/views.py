from rest_framework.views import APIView
from rest_framework.request import HttpRequest, Request
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from django.conf import settings
from django.utils.decorators import method_decorator
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt
from .serializers import (
    UserSerializer,
    RecordingSerializer,
    TranscriptionSerializer,
    SharedLinkSerializer,
    PreferenceSerializer,
)
from .models import Recording, Transcription, SharedLink, Preference


@method_decorator(csrf_exempt, name="dispatch")
class RegisterView(APIView):
    def post(self, request: HttpRequest):
        serializer = UserSerializer(data=request.data)
        if not serializer.is_valid():
            error = list(serializer.errors.values())[0][0]
            return Response(
                {
                    "error": True,
                    "message": error,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer.save()

        return Response(
            {
                "error": False,
                "message": "User registered successfully.",
            },
            status=status.HTTP_201_CREATED,
        )


@method_decorator(csrf_exempt, name="dispatch")
class CookieTokenObtainPairView(TokenObtainPairView):
    def post(self, request: HttpRequest, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Get tokens
        tokens = serializer.validated_data

        # Get user
        user = serializer.user

        # Prepare response
        response = Response(
            {"access": tokens.get("access"), "user": UserSerializer(user).data},
            status=status.HTTP_200_OK,
        )

        # Set HTTP-only cookie for refresh
        response.set_cookie(
            key=settings.SIMPLE_JWT["AUTH_COOKIE"],
            value=tokens.get("refresh"),
            httponly=settings.SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"],
            secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
            samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
            path=settings.SIMPLE_JWT["AUTH_COOKIE_PATH"],
            domain=settings.SIMPLE_JWT["AUTH_COOKIE_DOMAIN"],
            max_age=20,
        )

        return response


@method_decorator(csrf_exempt, name="dispatch")
class CookieTokenRefreshView(TokenRefreshView):
    def post(self, request: HttpRequest, *args, **kwargs):
        # Get refresh token from cookie
        refresh_token = request.COOKIES.get(settings.SIMPLE_JWT["AUTH_COOKIE"])

        if refresh_token is None:
            return Response(
                {"error": True, "message": "User is not authenticated."},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        request.data["refresh"] = refresh_token

        return super().post(request, *args, **kwargs)


@method_decorator(csrf_exempt, name="dispatch")
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request: HttpRequest):
        try:
            refresh_token = request.COOKIES.get(settings.SIMPLE_JWT["AUTH_COOKIE"])
            token = RefreshToken(refresh_token)
            token.blacklist()
        except Exception as e:
            pass

        response = Response(
            {"error": False, "message": "User logged out successfully."},
            status=status.HTTP_200_OK,
        )
        response.delete_cookie(settings.SIMPLE_JWT["AUTH_COOKIE"])
        return response


class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request: HttpRequest):
        serializer = UserSerializer(request.user)
        return Response(
            {
                "error": False,
                "message": "User data retrieved successfully.",
                "data": serializer.data,
            },
            status=status.HTTP_200_OK,
        )


class RecordingView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request: HttpRequest):
        recordings = Recording.objects.filter(isPublic=True).order_by("-createdAt")
        recordings = RecordingSerializer(recordings, many=True)
        return Response(
            {
                "error": False,
                "message": "Recordings retrieved successfully.",
                "data": recordings.data,
            },
            status=status.HTTP_200_OK,
        )


class MyRecordingView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request: HttpRequest):
        recordings = Recording.objects.filter(user=request.user).order_by("-createdAt")
        recordings = RecordingSerializer(recordings, many=True)
        return Response(
            {
                "error": False,
                "message": "Your recordings retrieved successfully.",
                "data": recordings.data,
            },
            status=status.HTTP_200_OK,
        )

    def post(self, request: HttpRequest):
        serializer = RecordingSerializer(data=request.data)
        if not serializer.is_valid():
            error = list(serializer.errors.values())[0][0]
            return Response(
                {
                    "error": True,
                    "message": error,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer.save(user=request.user)
        return Response(
            {
                "error": False,
                "message": "Recording created successfully.",
                "data": serializer.data,
            },
            status=status.HTTP_201_CREATED,
        )

    def delete(self, request: HttpRequest):
        Recording.objects.filter(user=request.user).delete()
        return Response(
            {
                "error": False,
                "message": "All your recordings deleted successfully.",
            },
            status=status.HTTP_200_OK,
        )


class RecordingDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request: HttpRequest, pk: int):
        try:
            recording = Recording.objects.get(
                Q(pk=pk) & (Q(isPublic=True) | Q(user=request.user))
            )
        except Recording.DoesNotExist:
            return Response(
                {
                    "error": True,
                    "message": "Recording not found",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        data = RecordingSerializer(recording).data

        # Add transcription if available
        try:
            transcription = Transcription.objects.get(recording=recording)
            data["transcription"] = TranscriptionSerializer(transcription).data
        except Transcription.DoesNotExist:
            data["transcription"] = None

        # Add shared links if available
        try:
            sharedLink = SharedLink.objects.get(recording=recording)
            data["sharedLink"] = SharedLinkSerializer(sharedLink).data
        except SharedLink.DoesNotExist:
            data["sharedLink"] = None

        return Response(
            {
                "error": False,
                "message": "Recording retrieved successfully.",
                "data": data,
            },
            status=status.HTTP_200_OK,
        )

    def put(self, request: HttpRequest, pk: int):
        try:
            recording = Recording.objects.get(pk=pk, user=request.user)
        except Recording.DoesNotExist:
            return Response(
                {
                    "error": True,
                    "message": "Recording not found",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = RecordingSerializer(recording, data=request.data, partial=True)
        if not serializer.is_valid():
            error = list(serializer.errors.values())[0][0]
            return Response(
                {
                    "error": True,
                    "message": error,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer.save()
        return Response(
            {
                "error": False,
                "message": "Recording updated successfully.",
                "data": serializer.data,
            },
            status=status.HTTP_200_OK,
        )

    def delete(self, request: HttpRequest, pk: int):
        try:
            recording = Recording.objects.get(pk=pk, user=request.user)
        except Recording.DoesNotExist:
            return Response(
                {
                    "error": True,
                    "message": "Recording not found",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        recording.delete()
        return Response(
            {
                "error": False,
                "message": "Recording deleted successfully.",
            },
            status=status.HTTP_200_OK,
        )


class TranscriptionView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request: HttpRequest, pk: int):
        try:
            recording = Recording.objects.get(pk=pk, user=request.user)
        except Recording.DoesNotExist:
            return Response(
                {
                    "error": True,
                    "message": "Recording not found",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        # AI based transcription implementation

        serializer = TranscriptionSerializer(data=request.data)
        if not serializer.is_valid():
            error = list(serializer.errors.values())[0][0]
            return Response(
                {
                    "error": True,
                    "message": error,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer.save(recording=recording)
        return Response(
            {
                "error": False,
                "message": "Transcription created successfully.",
                "data": serializer.data,
            },
            status=status.HTTP_201_CREATED,
        )

    def delete(self, request: HttpRequest, pk: int):
        try:
            recording = Recording.objects.get(pk=pk, user=request.user)
        except Recording.DoesNotExist:
            return Response(
                {
                    "error": True,
                    "message": "Recording not found",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        try:
            transcription = Transcription.objects.get(recording=recording)
        except Transcription.DoesNotExist:
            return Response(
                {
                    "error": True,
                    "message": "Transcription not found",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        transcription.delete()

        return Response(
            {
                "error": False,
                "message": "Transcription deleted successfully",
            },
            status=status.HTTP_200_OK,
        )

    def put(self, request: HttpRequest, pk: int):
        try:
            recording = Recording.objects.get(pk=pk, user=request.user)
        except Recording.DoesNotExist:
            return Response(
                {
                    "error": True,
                    "message": "Recording not found",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        try:
            transcription = Transcription.objects.get(recording=recording)
        except Transcription.DoesNotExist:
            return Response(
                {
                    "error": True,
                    "message": "Transcription not found",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = TranscriptionSerializer(
            transcription, data=request.data, partial=True
        )
        if not serializer.is_valid():
            error = list(serializer.errors.values())[0][0]
            return Response(
                {
                    "error": True,
                    "message": error,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer.save()
        return Response(
            {
                "error": False,
                "message": "Transcription updated successfully.",
                "data": serializer.data,
            },
            status=status.HTTP_200_OK,
        )


class PreferenceView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request: HttpRequest):
        try:
            preference = Preference.objects.get(user=request.user)
        except Preference.DoesNotExist:
            return Response(
                {
                    "error": True,
                    "message": "Preference not found",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = PreferenceSerializer(preference, data=request.data, partial=True)
        if not serializer.is_valid():
            error = list(serializer.errors.values())[0][0]
            return Response(
                {
                    "error": True,
                    "message": error,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer.save()
        return Response(
            {
                "error": False,
                "message": "Preference updated successfully.",
                "data": serializer.data,
            },
            status=status.HTTP_200_OK,
        )
