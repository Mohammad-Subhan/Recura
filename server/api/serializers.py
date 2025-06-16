from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Recording, Transcription, Preference, SharedLink
import secrets

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

        preference = Preference.objects.create(user=user)

        return user


class RecordingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recording
        fields = [
            "id",
            "user",
            "title",
            "description",
            "videoUrl",
            "thumbnailUrl",
            "isPublic",
            "createdAt",
            "updatedAt",
            "duration",
        ]
        read_only_fields = ["id", "createdAt", "updatedAt"]

    def validate_videoUrl(self, value):
        if not value.startswith("http://") and not value.startswith("https://"):
            raise serializers.ValidationError(
                "Video URL must start with http:// or https://"
            )
        return value

    def validate_thumbnailUrl(self, value):
        if not value.startswith("http://") and not value.startswith("https://"):
            raise serializers.ValidationError(
                "Thumbnail URL must start with http:// or https://"
            )
        return value

    def validate(self, attrs):
        if not attrs.get("title"):
            raise serializers.ValidationError("Title is required.")
        if not attrs.get("videoUrl"):
            raise serializers.ValidationError("Video URL is required.")

        recording = Recording.objects.create(**attrs)

        sharedLink = SharedLink.objects.create(recording=recording)

        return recording


class TranscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transcription
        fields = [
            "id",
            "recording",
            "language",
            "text",
            "createdAt",
        ]
        read_only_fields = ["id", "createdAt"]

    def validate_text(self, value):
        value = "This is dummy transcription"
        return value

    def validate(self, attrs):
        if not attrs.get("text"):
            raise serializers.ValidationError("Text must not be empty")


class PreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preference
        fields = ["id", "user", "theme"]
        read_only_fields = ["id"]

    def validate_theme(self, value):
        valid_themes = ["light", "dark"]
        if value not in valid_themes:
            raise serializers.ValidationError(
                f"Theme must be one of {', '.join(valid_themes)}."
            )
        return value


class SharedLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SharedLink
        fields = ["id", "recording", "token", "createdAt"]
        read_only_fields = ["id", "createdAt"]

    def validate(self, attrs):
        if not attrs.get("recording"):
            raise serializers.ValidationError("Recording is required.")
        return attrs

    def create(self, validated_data):
        # Generate a unique token for the shared link
        token = secrets.token_hex(3)
        validated_data["token"] = token
        return super().create(validated_data)
