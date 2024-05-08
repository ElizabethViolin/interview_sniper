from django.core.exceptions import ValidationError
from django.db import models

class Question(models.Model):
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='questions', null=True)
    text = models.CharField(max_length=1024)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.text