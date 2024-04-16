from rest_framework import serializers
from backend.models import Reaction 

class ReactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reaction
        fields = '__all__'