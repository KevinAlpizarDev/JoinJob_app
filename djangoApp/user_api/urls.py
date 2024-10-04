#########################Sin bigdatabase
# from django.urls import path

# from . import views

# urlpatterns = [
#     path("register", views.UserRegister.as_view(), name="register"),
#     path("login", views.UserLogin.as_view(), name="login"),
#     path("logout", views.UserLogout.as_view(), name="logout"),
#     path("user", views.UserView.as_view(), name="user"),
# ]


###################################con bigdatabase

from django.urls import path

from .views import (
    CursosListCreate,
    CursosRetrieveUpdateDestroy,
    InscripcionListCreate,
    InscripcionRetrieveUpdateDestroy,
    InstitucionListCreate,
    InstitucionRetrieveUpdateDestroy,
    SedeListCreate,
    SedeRetrieveUpdateDestroy,
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
    # Rutas de Institución
    path(
        "institucion/", InstitucionListCreate.as_view(), name="institucion-list-create"
    ),
    path(
        "institucion/<int:pk>/",
        InstitucionRetrieveUpdateDestroy.as_view(),
        name="institucion-detail",
    ),
    # Rutas de Sede
    path("sede/", SedeListCreate.as_view(), name="sede-list-create"),
    path("sede/<int:pk>/", SedeRetrieveUpdateDestroy.as_view(), name="sede-detail"),
    # Rutas de Cursos
    path("cursos/", CursosListCreate.as_view(), name="cursos-list-create"),
    path(
        "cursos/<int:pk>/", CursosRetrieveUpdateDestroy.as_view(), name="cursos-detail"
    ),
    # Rutas de Inscripción
    path(
        "inscripcion/", InscripcionListCreate.as_view(), name="inscripcion-list-create"
    ),
    path(
        "inscripcion/<int:pk>/",
        InscripcionRetrieveUpdateDestroy.as_view(),
        name="inscripcion-detail",
    ),
]
