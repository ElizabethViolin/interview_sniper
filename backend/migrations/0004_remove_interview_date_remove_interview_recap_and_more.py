# Generated by Django 4.2 on 2024-05-08 11:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_interview_recap_user_profession'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='interview',
            name='date',
        ),
        migrations.RemoveField(
            model_name='interview',
            name='recap',
        ),
        migrations.RemoveField(
            model_name='interview',
            name='title',
        ),
    ]
