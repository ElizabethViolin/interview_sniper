from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import Bookmark, Interview, Post, Question, Reaction, Response
from django.contrib.auth import get_user_model

User = get_user_model()

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    model = User
    fieldsets = BaseUserAdmin.fieldsets + (
        (None, {'fields': ('headline', 'phone_number', 'profession')}),
    )
    add_fieldsets = BaseUserAdmin.add_fieldsets + (
        (None, {'fields': ('headline', 'phone_number', 'profession')}),
    )
    list_display = ('username', 'first_name', 'last_name', 'is_staff')
    search_fields = ('username', 'first_name', 'last_name', 'email')
    list_filter = ('is_staff', 'is_superuser', 'is_active')
    
@admin.register(Bookmark)
class BookmarkAdmin(admin.ModelAdmin):
    list_display = ['user', 'post', 'created_at', 'updated_at']
    list_filter = ['created_at', 'updated_at']
    search_fields = ['user__username', 'post__id']

@admin.register(Interview)
class InterviewAdmin(admin.ModelAdmin):
    list_display = ['user', 'question_text', 'created_at', 'updated_at']
    list_filter = ['created_at', 'updated_at']
    search_fields = ['user__username', 'question_text']

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['created_by', 'company_name', 'created_at', 'updated_at']
    list_filter = ['created_at', 'updated_at', 'company_name']
    search_fields = ['company_name', 'created_by__username']

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('text', 'related_to')
    fields = ('text', 'post', 'created_at', 'updated_at')
    readonly_fields = ('created_at', 'updated_at')

    def related_to(self, obj):
        if obj.post:
            return f"Post: {obj.post.company_name}"
        return "None"

@admin.register(Reaction)
class ReactionAdmin(admin.ModelAdmin):
    list_display = ['user', 'post', 'reaction_type', 'created_at', 'updated_at']
    list_filter = ['reaction_type', 'created_at', 'updated_at']
    search_fields = ['user__username', 'post__id']

@admin.register(Response)
class ResponseAdmin(admin.ModelAdmin):
    list_display = ['interview', 'text', 'created_at', 'updated_at']
    list_filter = ['created_at', 'updated_at']
    search_fields = ['interview__question_text', 'text']
