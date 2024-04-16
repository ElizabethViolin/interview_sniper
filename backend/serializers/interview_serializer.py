from rest_framework import serializers
from backend.models import Interview

class InterviewSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        from backend.serializers import ResponseSerializer
        self.responses = ResponseSerializer(many=True)
        super().__init__(*args, **kwargs)

    class Meta:
        model = Interview
        fields = '__all__'
