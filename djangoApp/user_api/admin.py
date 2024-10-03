# from django.contrib import admin

# Register your models here.
from django.contrib import admin

from .models import AppUser, Curso, Inscripcion, Institucion, Sede


# # Registro del modelo AppUser
# @admin.register(AppUser)
# class AppUserAdmin(admin.ModelAdmin):
#     list_display = ["email", "username", "is_superuser", "is_staff"]
#     search_fields = ["email", "username"]
#     list_filter = ["is_staff", "is_superuser"]
# Registro del modelo AppUser
@admin.register(AppUser)
class AppUserAdmin(admin.ModelAdmin):
    list_display = ['email', 'username', 'is_superuser', 'is_staff']
    search_fields = ['email', 'username']
    list_filter = ['is_staff', 'is_superuser']

# Registro del modelo Institucion
@admin.register(Institucion)
class InstitucionAdmin(admin.ModelAdmin):
    list_display = ["nombre", "tipo", "numero", "activa"]
    search_fields = ["nombre"]
    list_filter = ["tipo", "activa"]


# Registro del modelo Sede
@admin.register(Sede)
class SedeAdmin(admin.ModelAdmin):
    list_display = [
        "nombre",
        "provincia",
        "canton",
        "distrito",
        "director",
        "institucion",
    ]
    search_fields = ["nombre", "provincia", "canton"]
    list_filter = ["provincia"]


# Registro del modelo Curso
@admin.register(Curso)
class CursoAdmin(admin.ModelAdmin):
    list_display = [
        "nombre",
        "codigo",
        "fecha_inicio",
        "fecha_fin",
        "cupo",
        "activa",
        "sede",
    ]
    search_fields = ["nombre", "codigo"]
    list_filter = ["anio", "activa"]


# Registro del modelo Inscripcion
@admin.register(Inscripcion)
class InscripcionAdmin(admin.ModelAdmin):
    list_display = ["user", "curso", "fecha_inscripcion"]
    search_fields = ["user__email", "curso__nombre"]
    list_filter = ["fecha_inscripcion"]
