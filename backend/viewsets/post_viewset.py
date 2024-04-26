from django.db import models
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from backend.models import Post, Bookmark, Reaction, Question
from backend.serializers import PostSerializer
from django.db.models import Exists, OuterRef, Subquery


class PostViewSet(viewsets.ModelViewSet):
    """
    A viewset for handling CRUD operations on posts.
    """

    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    SHOW_USER_POSTS = "mine"
    SHOW_COLLECTION_POSTS = "bookmarked"

    def get_queryset(self):
        """
        Get the queryset based on the request parameters.
        """
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
        if self.request.query_params.get(self.SHOW_USER_POSTS):
            queryset = self.filter_user_posts(queryset, user)
        # Filter to show only user's posts that user has bookmarked
        elif self.request.query_params.get(self.SHOW_COLLECTION_POSTS):
            queryset = self.filter_bookmarked_posts(queryset)
        return queryset

    def filter_user_posts(self, queryset, user):
        """
        Filter queryset to show only posts created by the user.
        """
        return queryset.filter(created_by=user)

    def filter_bookmarked_posts(self, queryset):
        """
        Filter queryset to show only posts bookmarked by the user.
        """
        return queryset.filter(is_bookmarked=True)
