# from django.urls import include, path
# from rest_framework.routers import DefaultRouter
# from rest_framework_simplejwt.views import TokenRefreshView

# from .views import (
#     CampusViewSet,
#     CourseViewSet,
#     EnrollmentViewSet,
#     InstitutionViewSet,
#     UserInfoAPIView,
#     UserLoginAPIView,
#     UserLogoutAPIView,
#     UserRegistrationAPIView,
# )

# router = DefaultRouter()
# router.register(r"institutions", InstitutionViewSet)
# router.register(r"campuses", CampusViewSet)
# router.register(r"courses", CourseViewSet)
# router.register(r"enrollments", EnrollmentViewSet)

# urlpatterns = [
#     path("register/", UserRegistrationAPIView.as_view(), name="register-user"),
#     path("login/", UserLoginAPIView.as_view(), name="login-user"),
#     path("logout/", UserLogoutAPIView.as_view(), name="logout-user"),
#     path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
#     path("user/", UserInfoAPIView.as_view(), name="user-info"),
#     path("", include(router.urls)),  # Incluir las rutas del router
# ]

# urls.py

from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView
from .consumers import CourseConsumer 

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

# Creamos el router para las vistas REST
router = DefaultRouter()
router.register(r"institutions", InstitutionViewSet)
router.register(r"campuses", CampusViewSet)
router.register(r"courses", CourseViewSet)
router.register(r"enrollments", EnrollmentViewSet)

# Definimos las URL de la API REST
urlpatterns = [
    path("register/", UserRegistrationAPIView.as_view(), name="register-user"),
    path("login/", UserLoginAPIView.as_view(), name="login-user"),
    path("logout/", UserLogoutAPIView.as_view(), name="logout-user"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("user/", UserInfoAPIView.as_view(), name="user-info"),
    path("", include(router.urls)),  # Incluir las rutas del router
]

# Rutas WebSocket
websocket_urlpatterns = [
    path("ws/some_path/", CourseConsumer .as_asgi()),  # Define la ruta WebSocket
]
