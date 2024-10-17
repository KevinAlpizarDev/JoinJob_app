# Generated by Django 5.1.1 on 2024-10-17 01:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_enrollment_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='modality',
            field=models.CharField(choices=[('virtual', 'Virtual'), ('in-person', 'In-Person')], default='in-person', max_length=10),
        ),
    ]
