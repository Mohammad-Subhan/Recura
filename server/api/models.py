from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from datetime import timedelta


class UserManager(BaseUserManager):
    def create_user(self, fullName, email, password=None):
        if not email:
            raise ValueError("Users must have an email address")
        if not fullName:
            raise ValueError("Users must have a full name")

        email = self.normalize_email(email)
        user = self.model(fullName=fullName, email=email)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, fullName, email, password=None):
        user = self.create_user(fullName, email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save()
        return user


class User(AbstractBaseUser):
    username = None
    fullName = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    isStaff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["fullName"]

    def __str__(self):
        return self.email


class Recording(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="recordings")
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    videoUrl = models.URLField()
    thumbnailUrl = models.URLField()
    isPublic = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    duration = models.DurationField(default=timedelta(seconds=10))

    def __str__(self):
        return f"{self.title} by {self.user.fullName} ({self.createdAt})"


class Transcription(models.Model):
    id = models.AutoField(primary_key=True)
    recording = models.ForeignKey(
        Recording, on_delete=models.CASCADE, related_name="transcriptions"
    )
    text = models.TextField()
    language = models.CharField(max_length=10, default="en")
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Transcription for {self.recording.title} ({self.language})"


class SharedLink(models.Model):
    id = models.AutoField(primary_key=True)
    recording = models.ForeignKey(
        Recording, on_delete=models.CASCADE, related_name="shared_links"
    )
    token = models.CharField(max_length=64, unique=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Token {self.token} for {self.recording.title}"


class Preference(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="preferences")
    theme = models.CharField(max_length=50, default="light")

    def __str__(self):
        return f"Preferences for {self.user.fullName}"
