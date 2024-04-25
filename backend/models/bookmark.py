from django.db import models
from django.contrib.auth import get_user_model
from django.conf import settings

User = get_user_model()

class Bookmark(models.Model):
    """Stores user bookmarks for posts."""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='bookmarks')
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='bookmarked_by')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Bookmark by {self.user.username} on post {self.post.id}"
