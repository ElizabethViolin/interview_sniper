from rest_framework import viewsets
from backend.models import Reaction
from backend.serializers import ReactionSerializer

class ReactionViewSet(viewsets.ModelViewSet):
    queryset = Reaction.objects.all()
    serializer_class = ReactionSerializer