from rest_framework import serializers, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from backend.serializers import UserSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    @action(detail=False, methods=['get'], url_path='me')
    def current_user(self, request):
        """
        Returns the details of the current user.
        """
        if request.user.is_authenticated:
            serializer = self.get_serializer(request.user)
            return Response(serializer.data)
        else:
            return Response({'error': 'User is not authenticated'}, status=401)
