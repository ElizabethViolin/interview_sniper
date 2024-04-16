from django.db import models

class Post(models.Model):
    """Represents a post created by a user about a company, including a description."""
    created_by = models.ForeignKey('User', on_delete=models.CASCADE, related_name='posts')
    company_name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Post by {self.created_by.username} about {self.company_name}"
