from rest_framework import serializers
from backend.models import Bookmark

class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = ['id', 'post', 'created_at', 'updated_at']

    def to_representation(self, instance):
        from backend.serializers.post_serializer import PostSerializer
        ret = super().to_representation(instance)
        ret['post'] = PostSerializer(instance.post).data
        return ret
