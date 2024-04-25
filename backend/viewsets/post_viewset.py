from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from backend.models import Post
from backend.serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        if 'mine' in self.request.query_params:
            # Return posts for the signed-in user
            return Post.objects.filter(created_by=self.request.user)
        # Return all posts
        return Post.objects.all()
