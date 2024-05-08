from rest_framework import serializers
from backend.models import Response

class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response
        fields = ['id', 'text']