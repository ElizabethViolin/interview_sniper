from django.contrib import admin
from .models import User, Bookmark, Interview, Post, Question, Reaction, Response

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'name', 'headline', 'phone_number']
    search_fields = ['username', 'email', 'name']
    list_filter = ['is_staff', 'is_superuser', 'is_active']

@admin.register(Bookmark)
class BookmarkAdmin(admin.ModelAdmin):
    list_display = ['user', 'post', 'created_at', 'updated_at']
    list_filter = ['created_at', 'updated_at']
    search_fields = ['user__username', 'post__id']

@admin.register(Interview)
class InterviewAdmin(admin.ModelAdmin):
    list_display = ['user', 'title', 'date', 'created_at', 'updated_at']
    list_filter = ['date', 'created_at', 'updated_at']
    search_fields = ['title', 'user__username']

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['created_by', 'company_name', 'created_at', 'updated_at']
    list_filter = ['created_at', 'updated_at', 'company_name']
    search_fields = ['company_name', 'created_by__username']

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ['text', 'created_at', 'updated_at']
    list_filter = ['created_at', 'updated_at']

@admin.register(Reaction)
class ReactionAdmin(admin.ModelAdmin):
    list_display = ['user', 'post', 'reaction_type', 'created_at', 'updated_at']
    list_filter = ['reaction_type', 'created_at', 'updated_at']
    search_fields = ['user__username', 'post__id']

@admin.register(Response)
class ResponseAdmin(admin.ModelAdmin):
    list_display = ['interview', 'question', 'text', 'created_at', 'updated_at']
    list_filter = ['created_at', 'updated_at']
    search_fields = ['interview__title', 'question__text']
