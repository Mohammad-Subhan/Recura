from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


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
