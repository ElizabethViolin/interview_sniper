from rest_framework import serializers
from backend.models import Post 

class PostSerializer(serializers.ModelSerializer):
    is_bookmarked = serializers.BooleanField(read_only=True)
    user_reaction = serializers.CharField(read_only=True, allow_null=True)  # Allow null if no reaction is present

    class Meta:
        model = Post
        fields = '__all__'