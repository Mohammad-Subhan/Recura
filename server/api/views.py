from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.views import TokenObtainPairView
from .authentication import EmailAuthTokenSerializer


####################################################
#                 User Registration                #
####################################################
@api_view(["POST"])
def register(request):
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
            "message": "User created successfully",
        },
        status=status.HTTP_201_CREATED,
    )


####################################################
#                   Token Obtain                   #
####################################################
class ObtainJWTWithEmail(TokenObtainPairView):
    serializer_class = EmailAuthTokenSerializer
