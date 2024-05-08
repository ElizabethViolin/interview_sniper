# Generated by Django 4.2 on 2024-05-08 14:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_remove_question_interview_remove_response_question_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='interview',
            name='question',
        ),
        migrations.AddField(
            model_name='interview',
            name='question_text',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='question',
            name='post',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='questions', to='backend.post'),
        ),
    ]