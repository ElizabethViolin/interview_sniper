from rest_framework import viewsets
from backend.models import Interview
from backend.serializers import InterviewSerializer

class InterviewViewSet(viewsets.ModelViewSet):
    queryset = Interview.objects.all().order_by('-created_at')
    serializer_class = InterviewSerializer