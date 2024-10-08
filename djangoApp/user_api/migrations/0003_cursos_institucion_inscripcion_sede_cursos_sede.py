# Generated by Django 5.1.1 on 2024-10-04 16:02

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user_api", "0002_appuser_date_joined_appuser_is_active_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Cursos",
            fields=[
                ("id", models.BigAutoField(primary_key=True, serialize=False)),
                ("nombre", models.TextField()),
                ("descripcion", models.TextField(blank=True, null=True)),
                ("codigo", models.CharField(unique=True, max_length=100)),
                ("fecha_inicio", models.DateField()),
                ("fecha_fin", models.DateField()),
                ("anio", models.IntegerField()),
                ("cupo", models.IntegerField()),
                ("activa", models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name="Institucion",
            fields=[
                ("id", models.BigAutoField(primary_key=True, serialize=False)),
                ("nombre", models.TextField()),
                (
                    "tipo",
                    models.CharField(
                        choices=[("publico", "Público"), ("privada", "Privada")],
                        max_length=10,
                    ),
                ),
                ("numero", models.IntegerField()),
                ("activa", models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name="Inscripcion",
            fields=[
                ("id", models.BigAutoField(primary_key=True, serialize=False)),
                ("fecha_inscripcion", models.DateTimeField(auto_now_add=True)),
                (
                    "curso",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="user_api.cursos",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Sede",
            fields=[
                ("id", models.BigAutoField(primary_key=True, serialize=False)),
                ("nombre", models.TextField()),
                ("provincia", models.TextField()),
                ("canton", models.TextField()),
                ("distrito", models.TextField()),
                ("numero", models.IntegerField()),
                ("director", models.TextField(blank=True, null=True)),
                (
                    "institucion",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="user_api.institucion",
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="cursos",
            name="sede",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="user_api.sede"
            ),
        ),
    ]
