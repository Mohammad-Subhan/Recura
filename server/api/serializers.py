from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "fullName", "email", "createdAt", "isStaff", "password"]
        read_only_fields = ["id", "createdAt", "isStaff"]
        extra_kwargs = {"password": {"write_only": True}}

    def validate_password(self, password):
        if len(password) < 8:
            raise serializers.ValidationError(
                "Password must be at least 8 characters long."
            )
        return password

    def create(self, validated_data):
        user = User.objects.create_user(
            fullName=validated_data["fullName"],
            email=validated_data["email"],
        )

        user.set_password(validated_data["password"])
        user.save()
        return user
