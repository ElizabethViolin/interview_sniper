from rest_framework import viewsets, permissions
from backend.models import Bookmark
from backend.serializers import BookmarkSerializer

class BookmarkViewSet(viewsets.ModelViewSet):
    serializer_class = BookmarkSerializer
    permission_classes = [permissions.IsAuthenticated] 

    def get_queryset(self):
        return Bookmark.objects.filter(user=self.request.user)
