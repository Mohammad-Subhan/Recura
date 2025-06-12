from rest_framework.views import APIView
from rest_framework.request import HttpRequest, Request
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from django.conf import settings
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .serializers import UserSerializer


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
        response = super().post(request, *args, **kwargs)

        if response.status_code == status.HTTP_200_OK:
            refresh = response.data.get("refresh")
            access = response.data.get("access")

            # Remove from response data
            response.data.pop("refresh", None)

            # Set the refresh token in a secure HTTP-only cookie
            response.set_cookie(
                key=settings.SIMPLE_JWT["AUTH_COOKIE"],
                value=refresh,
                httponly=settings.SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"],
                secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
                path=settings.SIMPLE_JWT["AUTH_COOKIE_PATH"],
                domain=settings.SIMPLE_JWT["AUTH_COOKIE_DOMAIN"],
                max_age=20,  # 20 seconds
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
