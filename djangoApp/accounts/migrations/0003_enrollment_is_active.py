# Generated by Django 5.1.1 on 2024-10-16 21:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_campus_institution_course_enrollment_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='enrollment',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
