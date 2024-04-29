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
        reaction_subquery = Reaction.objects.filter(
            user=user, post=OuterRef('pk')
        ).order_by('-created_at').values('reaction_type')[:1]

        queryset = Post.objects.prefetch_related('questions').annotate(
            is_bookmarked=Exists(
                Bookmark.objects.filter(user=user, post=OuterRef('pk'))
            ),
            user_reaction=Subquery(reaction_subquery)
        )

        if 'mine' in self.request.query_params:
            queryset = queryset.filter(created_by=user)
        if 'bookmarked' in self.request.query_params:
            queryset = queryset.filter(
                id__in=Bookmark.objects.filter(user=user).values('post_id')
            )

        return queryset.order_by('-created_at')

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
