from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Institution, Campus, Course, Enrollment


from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import CustomUser


@admin.register(CustomUser)
class CustomAdminUser(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm

    model = CustomUser
# Registra los modelos
admin.site.register(Institution)
admin.site.register(Campus)
admin.site.register(Course)
admin.site.register(Enrollment)