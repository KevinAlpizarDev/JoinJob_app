on redux

{
"email": "kev3@gmail.com",
"username": "kev3",
"password": "12345678"
}
on newbranch
https://youtu.be/U1Tg2nVAyxw?si=qbBf9m486zXftAbi
https://youtu.be/0Tz2xLZHAEA?si=WmURDQ9qTob49xLa

on modeldb

prefiero seguir haciendolo en la misma aplicación 
django y react
django y react
quiero hacer un backend en donde al iniciar con un usuario que sea superusuario me dirija a /api/admin
tengo este modelo 


from django.conf import settings  # Para referenciar el modelo de usuario personalizado
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models


class AppUserManager(BaseUserManager):
    def create_user(self, email, password=None, username=None):
        if not email:
            raise ValueError("Se requiere un correo electrónico.")
        if not password:
            raise ValueError("Se requiere una contraseña.")
        email = self.normalize_email(email)
        user = self.model(email=email, username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, username=None):
        # Asegúrate de que username sea pasado correctamente
        user = self.create_user(email=email, password=password, username=username)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class AppUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=50)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    objects = AppUserManager()

    def __str__(self):
        return self.username

    #


class Institucion(models.Model):
    TIPO_CHOICES = [("publico", "Público"), ("privada", "Privada")]

    nombre = models.TextField(null=False)
    tipo = models.CharField(max_length=7, choices=TIPO_CHOICES)
    numero = models.IntegerField(null=True, blank=True)
    activa = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre


class Sede(models.Model):
    nombre = models.TextField(null=False)
    provincia = models.TextField(null=False)
    canton = models.TextField(null=False)
    distrito = models.TextField(null=False)
    numero = models.IntegerField(null=True, blank=True)
    director = models.TextField(null=True, blank=True)
    institucion = models.ForeignKey(Institucion, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} - {self.provincia}, {self.canton}, {self.distrito}"


class Curso(models.Model):
    nombre = models.TextField(null=False)
    descripcion = models.TextField(null=True, blank=True)
    codigo = models.CharField(max_length=255, unique=True, null=False)
    fecha_inicio = models.DateField(null=False)
    fecha_fin = models.DateField(null=False)
    anio = models.IntegerField(null=False)
    cupo = models.IntegerField(null=False)
    activa = models.BooleanField(default=True)
    sede = models.ForeignKey(Sede, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} - {self.codigo}"


class Inscripcion(models.Model):
    fecha_inscripcion = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)

    def __str__(self):
        return f"Inscripción: {self.user} en {self.curso}"
estas son mis rutas,  
from django.urls import path

from . import views

urlpatterns = [
    path("register", views.UserRegister.as_view(), name="register"),
    path("login", views.UserLogin.as_view(), name="login"),
    path("logout", views.UserLogout.as_view(), name="logout"),
    path("user", views.UserView.as_view(), name="user"),
]