from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path("token", views.ObtainJWTWithEmail.as_view(), name="token_obtain_view"),
    path("token/refresh", TokenRefreshView.as_view(), name="token_refresh_view"),
    path("register", views.register, name="register"),
]
