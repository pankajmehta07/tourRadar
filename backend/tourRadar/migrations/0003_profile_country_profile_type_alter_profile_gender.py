# Generated by Django 5.0.2 on 2024-06-05 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tourRadar', '0002_profile_coverpic_profile_profilepic'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='country',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='profile',
            name='type',
            field=models.CharField(default='tourist', max_length=10),
        ),
        migrations.AlterField(
            model_name='profile',
            name='gender',
            field=models.CharField(default='', max_length=10),
        ),
    ]