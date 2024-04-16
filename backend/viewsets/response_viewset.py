from rest_framework import viewsets
from backend.models import Response
from backend.serializers import ResponseSerializer

class ResponseViewSet(viewsets.ModelViewSet):
    queryset = Response.objects.all()
    serializer_class = ResponseSerializer