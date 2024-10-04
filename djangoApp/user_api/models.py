# from django.contrib.auth.base_user import BaseUserManager
# from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
# from django.db import models


# class AppUserManager(BaseUserManager):
#     def create_user(self, email, password=None):
#         if not email:
#             raise ValueError("An email is required.")
#         if not password:
#             raise ValueError("A password is required.")
#         email = self.normalize_email(email)
#         user = self.model(email=email)
#         user.set_password(password)
#         user.save()
#         return user

#     def create_superuser(self, email, password=None):
#         if not email:
#             raise ValueError("An email is required.")
#         if not password:
#             raise ValueError("A password is required.")
#         user = self.create_user(email, password)
#         user.is_superuser = True
#         user.save()
#         return user


# class AppUser(AbstractBaseUser, PermissionsMixin):
#     user_id = models.AutoField(primary_key=True)
#     email = models.EmailField(max_length=50, unique=True)
#     username = models.CharField(max_length=50)
#     USERNAME_FIELD = "email"
#     REQUIRED_FIELDS = ["username"]
#     objects = AppUserManager()

#     def __str__(self):
#         return self.username
###################################################################################sin mofificaciones
# from django.contrib.auth.base_user import BaseUserManager
# from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
# from django.db import models


# class AppUserManager(BaseUserManager):
#     def create_user(self, email, password=None):
#         if not email:
#             raise ValueError("An email is required.")
#         if not password:
#             raise ValueError("A password is required.")
#         email = self.normalize_email(email)
#         user = self.model(email=email)
#         user.set_password(password)
#         user.save()
#         return user

#     def create_superuser(self, email, password=None):
#         if not email:
#             raise ValueError("An email is required.")
#         if not password:
#             raise ValueError("A password is required.")
#         user = self.create_user(email, password)
#         user.is_superuser = True
#         user.is_staff = True  # Los superusuarios también deben ser staff
#         user.save()
#         return user


# class AppUser(AbstractBaseUser, PermissionsMixin):
#     user_id = models.AutoField(primary_key=True)
#     email = models.EmailField(max_length=50, unique=True)
#     username = models.CharField(max_length=50)
#     is_staff = models.BooleanField(
#         default=False
#     )  # Campo para determinar si el usuario puede acceder al admin
#     is_active = models.BooleanField(
#         default=True
#     )  # Campo para marcar si la cuenta está activa
#     date_joined = models.DateTimeField(
#         auto_now_add=True
#     )  # Fecha de creación de la cuenta

#     USERNAME_FIELD = "email"
#     REQUIRED_FIELDS = ["username"]
#     objects = AppUserManager()

#     def __str__(self):
#         return self.username

#######CON_USERNAME#################################################################
# from django.contrib.auth.base_user import BaseUserManager
# from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
# from django.db import models


# class AppUserManager(BaseUserManager):
#     def create_user(self, email, password=None, username=None):
#         if not email:
#             raise ValueError("An email is required.")
#         if not password:
#             raise ValueError("A password is required.")
#         email = self.normalize_email(email)
#         user = self.model(
#             email=email, username=username
#         )  # Asegúrate de incluir username
#         user.set_password(password)
#         user.save()
#         return user

#     def create_superuser(self, email, password=None, username=None):
#         if not email:
#             raise ValueError("An email is required.")
#         if not password:
#             raise ValueError("A password is required.")
#         user = self.create_user(email, password, username)  # Pasar username aquí
#         user.is_superuser = True
#         user.is_staff = True  # Los superusuarios también deben ser staff
#         user.save()
#         return user


# class AppUser(AbstractBaseUser, PermissionsMixin):
#     user_id = models.AutoField(primary_key=True)
#     email = models.EmailField(max_length=50, unique=True)
#     username = models.CharField(max_length=50)
#     is_staff = models.BooleanField(
#         default=False
#     )  # Campo para determinar si el usuario puede acceder al admin
#     is_active = models.BooleanField(
#         default=True
#     )  # Campo para marcar si la cuenta está activa
#     date_joined = models.DateTimeField(
#         auto_now_add=True
#     )  # Fecha de creación de la cuenta

#     USERNAME_FIELD = "email"
#     REQUIRED_FIELDS = ["username"]
#     objects = AppUserManager()

#     def __str__(self):
#         return self.username
#############CON Base de datos completa ###########################################################################


# from django.db import models
from django.conf import settings
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models


class AppUserManager(BaseUserManager):
    def create_user(self, email, password=None, username=None):
        if not email:
            raise ValueError("An email is required.")
        if not password:
            raise ValueError("A password is required.")
        email = self.normalize_email(email)
        user = self.model(
            email=email, username=username
        )  # Asegúrate de incluir username
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, username=None):
        if not email:
            raise ValueError("An email is required.")
        if not password:
            raise ValueError("A password is required.")
        user = self.create_user(email, password, username)  # Pasar username aquí
        user.is_superuser = True
        user.is_staff = True  # Los superusuarios también deben ser staff
        user.save()
        return user


class AppUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=50)
    is_staff = models.BooleanField(
        default=False
    )  # Campo para determinar si el usuario puede acceder al admin
    is_active = models.BooleanField(
        default=True
    )  # Campo para marcar si la cuenta está activa
    date_joined = models.DateTimeField(
        auto_now_add=True
    )  # Fecha de creación de la cuenta

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    objects = AppUserManager()

    def __str__(self):
        return self.username

    #


class Institucion(models.Model):
    TIPO_CHOICES = [
        ("publico", "Público"),
        ("privada", "Privada"),
    ]

    id = models.BigAutoField(primary_key=True)
    nombre = models.TextField()
    tipo = models.CharField(max_length=10, choices=TIPO_CHOICES)
    numero = models.IntegerField()
    activa = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre


class Sede(models.Model):
    id = models.BigAutoField(primary_key=True)
    nombre = models.TextField()
    provincia = models.TextField()
    canton = models.TextField()
    distrito = models.TextField()
    numero = models.IntegerField()
    director = models.TextField(null=True, blank=True)
    institucion = models.ForeignKey(Institucion, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre


# class Cursos(models.Model):
#     nombre = models.CharField(max_length=255)
#     descripcion = models.TextField(null=True, blank=True)
#     # codigo = models.CharField(max_length=100)  # Permite hasta 100 caracteres
#     codigo = models.CharField(  unique=True, max_length=1024)  # Permite hasta 100 caracteres

#     fecha_inicio = models.DateField()
#     fecha_fin = models.DateField()
#     anio = models.IntegerField()
#     cupo = models.IntegerField()
#     activa = models.BooleanField(default=True)
#     sede = models.ForeignKey("Sede", on_delete=models.CASCADE)

#     def __str__(self):
#         return self.nombre


class Cursos(models.Model):
    id = models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField(null=True, blank=True)
    codigo = models.CharField(unique=True, max_length=100) 

    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    anio = models.IntegerField()
    cupo = models.IntegerField()
    activa = models.BooleanField(default=True)
    sede = models.ForeignKey("Sede", on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre


class Inscripcion(models.Model):
    id = models.BigAutoField(primary_key=True)
    fecha_inscripcion = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    curso = models.ForeignKey(Cursos, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user} - {self.curso}"
