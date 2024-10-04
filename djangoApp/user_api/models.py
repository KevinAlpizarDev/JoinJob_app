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
