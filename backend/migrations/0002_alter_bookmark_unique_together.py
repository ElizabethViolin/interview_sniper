# Generated by Django 4.2 on 2024-04-26 15:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='bookmark',
            unique_together={('user', 'post')},
        ),
    ]