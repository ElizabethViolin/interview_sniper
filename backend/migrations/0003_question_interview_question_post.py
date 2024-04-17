# Generated by Django 5.0.4 on 2024-04-17 06:42

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_remove_user_name_alter_post_description_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='interview',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='questions', to='backend.interview'),
        ),
        migrations.AddField(
            model_name='question',
            name='post',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='questions', to='backend.post'),
        ),
    ]
