from django.core.exceptions import ValidationError
from django.db import models

class Question(models.Model):
    """Defines a question for use in interviews or surveys, associated with either a Post or an Interview."""
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='questions', null=True, blank=True)
    interview = models.ForeignKey('Interview', on_delete=models.CASCADE, related_name='questions', null=True, blank=True)
    text = models.CharField(max_length=1024)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.text

    def clean(self):
        # Ensure only one of post or interview is set
        if (self.post and self.interview) or (not self.post and not self.interview):
            raise ValidationError('A Question must be associated with either a Post or an Interview, but not both or none.')

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)
