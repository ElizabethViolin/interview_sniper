from django.db import models
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from backend.models import Post, Bookmark, Reaction
from backend.serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        # Annotate each post with whether it is bookmarked by the current user
        queryset = Post.objects.annotate(
            is_bookmarked=models.Exists(
                Bookmark.objects.filter(user=user, post=models.OuterRef('pk'))
            ),
            user_reaction=models.Subquery(
                Reaction.objects.filter(
                    user=user,
                    post=models.OuterRef('pk')
                ).values('reaction_type')[:1]
            )
        )
        if 'mine' in self.request.query_params:
            # Return posts created by the signed-in user
            return queryset.filter(created_by=user)
        # Return all posts
        return queryset
