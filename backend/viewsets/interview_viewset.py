from rest_framework import viewsets
from backend.models import Interview
from backend.serializers import InterviewSerializer

class InterviewViewSet(viewsets.ModelViewSet):
    queryset = Interview.objects.all()
    serializer_class = InterviewSerializer