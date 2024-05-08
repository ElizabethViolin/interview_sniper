from rest_framework import serializers
from backend.models import Question

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'text', 'post', 'interview']

    def create(self, validated_data):
        return Question.objects.create(**validated_data)
