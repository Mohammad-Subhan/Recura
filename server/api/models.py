from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    username = None
    fullName = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
