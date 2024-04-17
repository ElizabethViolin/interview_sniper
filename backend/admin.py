from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Bookmark, Interview, Post, Question, Reaction, Response

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Permissions', {'fields': ('is_superuser', 'is_staff', 'is_active')}),
        ('Personal Information', {'fields': ('first_name', 'last_name', 'email', 'phone_number', 'headline')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Permissions', {'fields': ('is_superuser', 'is_staff', 'is_active')}),
        ('Personal Information', {'fields': ('first_name', 'last_name', 'email', 'phone_number', 'headline')}),
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
    list_display = ('text', 'related_to')
    fields = ('text', 'post', 'interview', 'created_at', 'updated_at')
    readonly_fields = ('created_at', 'updated_at')

    def related_to(self, obj):
        """Display related Post or Interview in the admin list view."""
        if obj.post:
            return f"Post: {obj.post.company_name}"
        elif obj.interview:
            return f"Interview: {obj.interview.title}"
        return "None"

    def get_form(self, request, obj=None, **kwargs):
        """Dynamically modify the form based on the instance data."""
        form = super(QuestionAdmin, self).get_form(request, obj, **kwargs)
        if obj:
            # Disable post or interview field if one is already set
            if obj.post:
                form.base_fields['interview'].disabled = True
            elif obj.interview:
                form.base_fields['post'].disabled = True
        return form

    def save_model(self, request, obj, form, change):
        """Custom save to enforce only one of post or interview is set."""
        if obj.post and obj.interview:
            raise ValueError("A Question cannot be linked to both a Post and an Interview.")
        super().save_model(request, obj, form, change)

    def save_related(self, request, form, formsets, change):
        """Additional checks after saving related objects."""
        super().save_related(request, form, formsets, change)
        obj = form.instance
        if obj.post and obj.interview:
            raise ValueError("A Question cannot be linked to both a Post and an Interview.")

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
