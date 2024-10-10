

from django.urls import path

from .views import (
    CursosListCreate,
    CursosRetrieveUpdateDestroy,
    UserLogin,
    UserLogout,
    UserRegister,
    UserView,
)

urlpatterns = [
    # Rutas de autenticación de usuario
    path("register/", UserRegister.as_view(), name="register"),
    path("login/", UserLogin.as_view(), name="login"),
    path("logout/", UserLogout.as_view(), name="logout"),
    path("user/", UserView.as_view(), name="user"),
    # Rutas para Cursos
    path(
        "cursos/", CursosListCreate.as_view(), name="cursos-list"
    ),  # Para obtener la lista y crear un curso
    path(
        "cursos/<int:pk>/", CursosRetrieveUpdateDestroy.as_view(), name="cursos-detail"
    ),  # Para obtener, actualizar o eliminar un curso específico
]
