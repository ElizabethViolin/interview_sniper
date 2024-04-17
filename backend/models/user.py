from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    """Extends AbstractUser with additional fields like email, headline, and phone number."""
    email = models.EmailField(unique=True)
    headline = models.CharField(max_length=255, blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    # Specify unique related names for the groups and user_permissions fields
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_name="user_set_%(app_label)s_%(class)s",
        related_query_name="user",
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name="user_set_%(app_label)s_%(class)s",
        related_query_name="user",
    )
