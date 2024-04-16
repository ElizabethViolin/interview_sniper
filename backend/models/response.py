from django.db import models

class Response(models.Model):
    """Captures user responses to interview questions."""
    interview = models.ForeignKey('Interview', on_delete=models.CASCADE, related_name='responses')
    question = models.ForeignKey('Question', on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Response to {self.question.text} for interview {self.interview.title}"
