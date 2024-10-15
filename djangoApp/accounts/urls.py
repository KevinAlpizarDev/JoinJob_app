# from django.urls import path
# from rest_framework_simplejwt.views import TokenRefreshView

# from .views import *

# urlpatterns = [
#     path("register/", UserRegistrationAPIView.as_view(), name="register-user"),
#     path("login/", UserLoginAPIView.as_view(), name="login-user"),
#     path("logout/", UserLogoutAPIView.as_view(), name="logout-user"),
#     path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
#     path("user/", UserInfoAPIView.as_view(), name="user-info"),
# ]
###############################################################################
# from django.urls import path, include
# from rest_framework_simplejwt.views import TokenRefreshView
# from rest_framework.routers import DefaultRouter

# from .views import (
#     UserRegistrationAPIView,
#     UserLoginAPIView,
#     UserLogoutAPIView,
#     UserInfoAPIView,
#     InstitutionViewSet,
#     CampusViewSet,
#     CourseViewSet,
#     EnrollmentViewSet
# )

# # Crear el router para las vistas de las APIs de Instituciones, Sedes, Cursos e Inscripciones
# router = DefaultRouter()
# router.register(r'institutions', InstitutionViewSet)
# router.register(r'campuses', CampusViewSet)
# router.register(r'courses', CourseViewSet)
# router.register(r'enrollments', EnrollmentViewSet)

# # Definir las rutas basadas en vistas y combinar con las del router
# urlpatterns = [
#     path("register/", UserRegistrationAPIView.as_view(), name="register-user"),
#     path("login/", UserLoginAPIView.as_view(), name="login-user"),
#     path("logout/", UserLogoutAPIView.as_view(), name="logout-user"),
#     path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
#     path("user/", UserInfoAPIView.as_view(), name="user-info"),
#     path("", include(router.urls)),  # Incluir las rutas del router
# ]
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

from .views import (
    CampusViewSet,
    CourseViewSet,
    EnrollmentViewSet,
    InstitutionViewSet,
    UserInfoAPIView,
    UserLoginAPIView,
    UserLogoutAPIView,
    UserRegistrationAPIView,
)

router = DefaultRouter()
router.register(r"institutions", InstitutionViewSet)
router.register(r"campuses", CampusViewSet)
router.register(r"courses", CourseViewSet)
router.register(r"enrollments", EnrollmentViewSet)

urlpatterns = [
    path("register/", UserRegistrationAPIView.as_view(), name="register-user"),
    path("login/", UserLoginAPIView.as_view(), name="login-user"),
    path("logout/", UserLogoutAPIView.as_view(), name="logout-user"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("user/", UserInfoAPIView.as_view(), name="user-info"),
    path("", include(router.urls)),  # Incluir las rutas del router
]
