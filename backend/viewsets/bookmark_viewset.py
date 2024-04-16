from rest_framework import viewsets
from backend.models import Bookmark
from backend.serializers import BookmarkSerializer

class BookmarkViewSet(viewsets.ModelViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer