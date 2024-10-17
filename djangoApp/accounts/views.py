# from rest_framework import status, viewsets
# from rest_framework.generics import GenericAPIView, RetrieveAPIView
# from rest_framework.permissions import AllowAny, IsAuthenticated
# from rest_framework.response import Response
# from rest_framework_simplejwt.tokens import RefreshToken

# from .models import Campus, Course, Enrollment, Institution
# from .serializers import (
#     CampusSerializer,
#     CourseSerializer,
#     CustomUserSerializer,
#     EnrollmentSerializer,
#     InstitutionSerializer,
#     UserLoginSerializer,
#     UserRegistrationSerializer,
# )


# class UserRegistrationAPIView(GenericAPIView):
#     permission_classes = (AllowAny,)
#     serializer_class = UserRegistrationSerializer

#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.save()
#         token = RefreshToken.for_user(user)
#         data = serializer.data
#         data["tokens"] = {"refresh": str(token), "access": str(token.access_token)}
#         return Response(data, status=status.HTTP_201_CREATED)


# class UserLoginAPIView(GenericAPIView):
#     permission_classes = (AllowAny,)
#     serializer_class = UserLoginSerializer

#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data
#         serializer = CustomUserSerializer(user)
#         token = RefreshToken.for_user(user)
#         data = serializer.data
#         data["tokens"] = {"refresh": str(token), "access": str(token.access_token)}
#         return Response(data, status=status.HTTP_200_OK)


# class UserLogoutAPIView(GenericAPIView):
#     permission_classes = (IsAuthenticated,)

#     def post(self, request, *args, **kwargs):
#         try:
#             refresh_token = request.data["refresh"]
#             token = RefreshToken(refresh_token)
#             token.blacklist()
#             return Response(status=status.HTTP_205_RESET_CONTENT)
#         except Exception:
#             return Response(status=status.HTTP_400_BAD_REQUEST)


# class UserInfoAPIView(RetrieveAPIView):
#     permission_classes = (IsAuthenticated,)
#     serializer_class = CustomUserSerializer

#     def get_object(self):
#         return self.request.user


# class InstitutionViewSet(viewsets.ModelViewSet):
#     queryset = Institution.objects.all()
#     serializer_class = InstitutionSerializer


# class CampusViewSet(viewsets.ModelViewSet):
#     queryset = Campus.objects.all()
#     serializer_class = CampusSerializer


# class CourseViewSet(viewsets.ModelViewSet):
#     queryset = Course.objects.all()
#     serializer_class = CourseSerializer


# class EnrollmentViewSet(viewsets.ModelViewSet):
#     queryset = Enrollment.objects.all()
#     serializer_class = EnrollmentSerializer
#     permission_classes = [IsAuthenticated]

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)  # Asignar el usuario autenticado
from rest_framework import status, viewsets
from rest_framework.generics import GenericAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Campus, Course, Enrollment, Institution
from .serializers import (
    CampusSerializer,
    CourseSerializer,
    CustomUserSerializer,
    EnrollmentSerializer,
    InstitutionSerializer,
    UserLoginSerializer,
    UserRegistrationSerializer,
)


# Registro de usuario
class UserRegistrationAPIView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserRegistrationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = RefreshToken.for_user(user)
        data = serializer.data
        data["tokens"] = {"refresh": str(token), "access": str(token.access_token)}
        return Response(data, status=status.HTTP_201_CREATED)


# Login de usuario
class UserLoginAPIView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        serializer = CustomUserSerializer(user)
        token = RefreshToken.for_user(user)
        data = serializer.data
        data["tokens"] = {"refresh": str(token), "access": str(token.access_token)}
        return Response(data, status=status.HTTP_200_OK)


# Logout de usuario
class UserLogoutAPIView(GenericAPIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()  # Invalida el token de refresco
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)


# Información del usuario autenticado
class UserInfoAPIView(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CustomUserSerializer

    def get_object(self):
        return self.request.user


# CRUD de Instituciones
class InstitutionViewSet(viewsets.ModelViewSet):
    queryset = Institution.objects.all()
    serializer_class = InstitutionSerializer


# CRUD de Campus
class CampusViewSet(viewsets.ModelViewSet):
    queryset = Campus.objects.all()
    serializer_class = CampusSerializer


# CRUD de Cursos
class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


# CRUD de Matriculaciones (Enrollments)
# class EnrollmentViewSet(viewsets.ModelViewSet):
#     queryset = Enrollment.objects.all()
#     serializer_class = EnrollmentSerializer
#     permission_classes = [IsAuthenticated]

#     def perform_create(self, serializer):
#         # Asignar el usuario autenticado a la matrícula
#         serializer.save(user=self.request.user)
####################################################################re


class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # Asociar el usuario autenticado
