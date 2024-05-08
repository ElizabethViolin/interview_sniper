from django.db import models

class Response(models.Model):
    """Captures user responses to interview questions."""
    interview = models.OneToOneField('backend.Interview', on_delete=models.CASCADE, related_name='response')
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Response: {self.text[:20]}..."