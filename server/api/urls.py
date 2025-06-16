from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from . import views

urlpatterns = [
    path("token/", views.CookieTokenObtainPairView.as_view(), name="token_obtain_view"),
    path(
        "token/refresh/",
        views.CookieTokenRefreshView.as_view(),
        name="token_refresh_view",
    ),
    path("register/", views.RegisterView.as_view(), name="register"),
    path("logout/", views.LogoutView.as_view(), name="logout"),
    path("user/", views.UserView.as_view(), name="user"),
    path("recordings/", views.RecordingView.as_view(), name="recordings"),
    path("recordings/my/", views.MyRecordingView.as_view(), name="my_recordings"),
    path(
        "recordings/<int:pk>/",
        views.RecordingDetailView.as_view(),
        name="recording_detail",
    ),
    path(
        "recordings/<int:pk>/transcriptions/",
        views.TranscriptionView.as_view(),
        name="transcriptions",
    ),
    path("user/preference/", views.PreferenceView.as_view(), name="preferences"),
]
