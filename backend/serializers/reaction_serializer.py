from rest_framework import serializers
from backend.models import Reaction 

class ReactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reaction
        fields = ['id', 'user', 'post', 'reaction_type', 'created_at', 'updated_at']