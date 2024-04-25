from django.db import models
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from backend.models import Post, Bookmark, Reaction, Question
from backend.serializers import PostSerializer
from django.db.models import Exists, OuterRef, Subquery

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        user = self.request.user 

        # Subquery for fetching the latest reaction type by the user
        reaction_subquery = Reaction.objects.filter(
            user=user, post=OuterRef('pk')
        ).order_by('-created_at').values('reaction_type')[:1]

        # Build the main queryset, including bookmark and reaction annotations
        queryset = Post.objects.prefetch_related('questions').annotate(
            is_bookmarked=Exists(
                Bookmark.objects.filter(user=user, post=OuterRef('pk'))
            ),
            user_reaction=Subquery(reaction_subquery)
        )

        # Filter to show only user's posts if 'mine' query parameter is present
        if 'mine' in self.request.query_params:
            queryset = queryset.filter(created_by=user)
        return queryset