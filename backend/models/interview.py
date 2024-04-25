from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

class Interview(models.Model):
    """Represents a user's interview experience."""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='interviews')
    date = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} on {self.date.strftime('%Y-%m-%d')}"
