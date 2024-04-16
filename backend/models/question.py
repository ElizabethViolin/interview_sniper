from django.db import models

class Question(models.Model):
    """Defines a question for use in interviews or surveys."""
    text = models.CharField(max_length=1024)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.text
