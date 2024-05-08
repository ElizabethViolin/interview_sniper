from rest_framework import serializers
from .response_serializer import ResponseSerializer
from backend.models import Interview 

class InterviewSerializer(serializers.ModelSerializer):
    response_text = serializers.CharField(source='response.text')
        
    class Meta:
        model = Interview
        fields = ['id', 'user', 'question_text', 'response_text', 'created_at', 'updated_at']
