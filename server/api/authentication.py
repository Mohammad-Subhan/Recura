from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import get_user_model

User = get_user_model()


class EmailAuthTokenSerializer(TokenObtainPairSerializer):
    username_field = User.EMAIL_FIELD  # tells SimpleJWT to use email

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise AuthenticationFailed("Email not found")

        if not user.check_password(password):
            raise AuthenticationFailed("Invalid password")

        data = super().validate({
            self.username_field: email,
            "password": password,
        })

        return data
