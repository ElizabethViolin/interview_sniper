from django.db import models

class ReactionType(models.TextChoices):
    LIKE = 'like', 'Like'
    DISLIKE = 'dislike', 'Dislike'

class Reaction(models.Model):
    """Stores user reactions (like or dislike) to posts."""
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='reactions')
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='reactions')
    reaction_type = models.CharField(max_length=10, choices=ReactionType.choices)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} reacted {self.reaction_type} to post {self.post.id}"
