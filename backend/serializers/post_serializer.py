from rest_framework import serializers
from backend.models import Post, Question
from backend.serializers import QuestionSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class PostSerializer(serializers.ModelSerializer):
    created_by = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())
    is_bookmarked = serializers.BooleanField(read_only=True)
    user_reaction = serializers.CharField(read_only=True, allow_null=True)
    questions = QuestionSerializer(many=True)

    class Meta:
        model = Post
        fields = '__all__'
        read_only_fields = ('created_by', 'is_bookmarked', 'user_reaction')

    def create(self, validated_data):
        questions_data = validated_data.pop('questions', [])

        validated_data.pop('created_by', None)  
        post = Post.objects.create(**validated_data, created_by=self.context['request'].user)

        for question_data in questions_data:
            Question.objects.create(**question_data, post=post)

        return post


    def update(self, instance, validated_data):
        questions_data = validated_data.pop('questions', None)
        instance = super().update(instance, validated_data)

        if questions_data is not None:
            instance.questions.all().delete() 
            for question_data in questions_data:
                Question.objects.create(**question_data, post=instance)

        return instance