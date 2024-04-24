from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    headline = models.CharField(max_length=255, blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
