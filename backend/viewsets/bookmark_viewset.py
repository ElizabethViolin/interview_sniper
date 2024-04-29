from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from backend.models import Bookmark, Post
from backend.serializers import BookmarkSerializer

class BookmarkViewSet(viewsets.ModelViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=True, methods=['post'])
    def toggle(self, request, pk=None):
        post = Post.objects.get(pk=pk)
        try:
            bookmark = Bookmark.objects.get(user=request.user, post=post)
            bookmark.delete()
            return Response({'status': 'bookmark removed'}, status=status.HTTP_204_NO_CONTENT)
        except Bookmark.DoesNotExist:
            bookmark = Bookmark.objects.create(user=request.user, post=post)
            return Response(self.get_serializer(bookmark).data, status=status.HTTP_201_CREATED)