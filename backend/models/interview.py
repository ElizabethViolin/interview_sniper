from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

class Interview(models.Model):
    """Represents a user's interview experience."""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='interviews')
    question_text = models.CharField(max_length=1024, null=True) 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Interview for {self.user.username} on {self.created_at.strftime('%Y-%m-%d')}"