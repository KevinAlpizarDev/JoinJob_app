from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)  # Obligatorio

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "name"]  # Ambos campos son obligatorios

    def __str__(self) -> str:
        return self.name


class Institution(models.Model):
    TYPE_CHOICES = [
        ("public", "Pública"),
        ("private", "Privada"),
    ]

    name = models.CharField(max_length=255)
    type = models.CharField(
        max_length=10, choices=TYPE_CHOICES, default="public"
    )  # Campo tipo con opciones
    phone_number = models.CharField(max_length=15)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Campus(models.Model):
    name = models.CharField(max_length=255)
    province = models.CharField(max_length=100)
    canton = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    director = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    institution = models.ForeignKey(
        Institution, on_delete=models.CASCADE, related_name="campuses"
    )
    latitude = models.DecimalField(
        max_digits=17,  # Cambiado a 17 para permitir 9 dígitos antes del punto
        decimal_places=8,  # Mantener en 8 para permitir hasta 8 decimales
        null=True,
        blank=True,
    )
    longitude = models.DecimalField(
        max_digits=17,  # Cambiado a 17 para permitir 9 dígitos antes del punto
        decimal_places=8,  # Mantener en 8 para permitir hasta 8 decimales
        null=True,
        blank=True,
    )

    def __str__(self):
        return f"{self.name} - {self.institution.name}"


class Course(models.Model):
    MODALITY_CHOICES = [
        ("virtual", "Virtual"),
        ("in-person", "In-Person"),
    ]

    name = models.CharField(max_length=255)
    code = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    year = models.IntegerField()
    seats = models.IntegerField()
    is_active = models.BooleanField(default=True)
    campus = models.ForeignKey(Campus, on_delete=models.CASCADE, related_name="courses")
    modality = models.CharField(
        max_length=10, choices=MODALITY_CHOICES, default="in-person"
    )

    def __str__(self):
        return f"{self.name} - {self.code}"


class Enrollment(models.Model):
    GENDER_CHOICES = [
        ("male", "Masculino"),
        ("female", "Femenino"),
        ("other", "Otro"),  # Nueva opción
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    id_number = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=15)
    age = models.IntegerField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    course = models.ForeignKey(
        Course, on_delete=models.CASCADE, related_name="enrollments"
    )
    enrollment_date = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_course_active = models.BooleanField(default=True)  # Nuevo campo

    class Meta:
        unique_together = ("user", "course")

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name} - {self.course.name}"
