# Generated by Django 5.1.1 on 2024-10-19 20:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_alter_customuser_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='institution',
            name='type',
            field=models.CharField(choices=[('public', 'Pública'), ('private', 'Privada')], default='public', max_length=10),
        ),
    ]
