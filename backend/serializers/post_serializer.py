from rest_framework import serializers
from backend.models import Post 
from backend.serializers import QuestionSerializer

class PostSerializer(serializers.ModelSerializer):
    is_bookmarked = serializers.BooleanField(read_only=True)
    user_reaction = serializers.CharField(read_only=True, allow_null=True) 
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = '__all__'