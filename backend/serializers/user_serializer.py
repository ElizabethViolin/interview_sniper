from rest_framework import serializers
from backend.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'headline', 'phone_number', 'first_name', 'last_name']
