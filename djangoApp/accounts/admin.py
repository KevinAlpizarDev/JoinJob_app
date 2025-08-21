from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import Campus, Course, CustomUser, Enrollment, Institution


@admin.register(CustomUser)
class CustomAdminUser(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm

    model = CustomUser


# Registra los modelos
admin.site.register(Institution)
admin.site.register(Campus)


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("name", "code", "modality", "is_active")
    list_filter = ("modality", "is_active", "campus")


#####################################################################
admin.site.register(Enrollment)
