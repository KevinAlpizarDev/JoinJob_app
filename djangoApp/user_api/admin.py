# from django.contrib import admin
from django.contrib import admin

from .models import AppUser, Cursos, Inscripcion, Institucion, Sede

admin.site.register(AppUser)
admin.site.register(Institucion)
admin.site.register(Sede)
admin.site.register(Cursos)
admin.site.register(Inscripcion)
