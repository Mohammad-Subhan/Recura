from django.contrib import admin
from .models import User, Recording, Transcription, Preference, SharedLink


class UserAdmin(admin.ModelAdmin):
    list_display = ["id", "fullName", "email", "createdAt"]


class RecordingAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "user", "isPublic", "createdAt"]


class TranscriptionAdmin(admin.ModelAdmin):
    list_display = ["id", "recording", "language", "createdAt"]


class PreferenceAdmin(admin.ModelAdmin):
    list_display = ["id", "user", "theme"]


class SharedLinkAdmin(admin.ModelAdmin):
    list_display = ["id", "recording", "token", "createdAt"]


admin.site.register(User, UserAdmin)
admin.site.register(Recording, RecordingAdmin)
admin.site.register(Transcription, TranscriptionAdmin)
admin.site.register(Preference, PreferenceAdmin)
admin.site.register(SharedLink, SharedLinkAdmin)
