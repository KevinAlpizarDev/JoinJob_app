from rest_framework import status, viewsets, serializers 
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


class UserRegistrationAPIView(GenericAPIView):
    permission_classes = (
        AllowAny,
    )  # Permite el acceso sin autenticación para el registro de usuarios.
    serializer_class = (
        UserRegistrationSerializer  # Serializador para validar y crear un usuario.
    )

    def post(self, request, *args, **kwargs):
        # Validación de datos
        serializer = self.get_serializer(
            data=request.data
        )  # Obtiene el serializador con los datos del request.
        serializer.is_valid(
            raise_exception=True
        )  # Valida los datos; lanza excepción si son inválidos.

        # Guardar el usuario y generar tokens
        user = serializer.save()  # Guarda el nuevo usuario en la base de datos.

        # Generar tokens JWT
        refresh = RefreshToken.for_user(
            user
        )  # Crea un token de refresco para el usuario.
        access = (
            refresh.access_token
        )  # Obtiene el token de acceso a partir del token de refresco.

        # Preparar la respuesta con los tokens
        data = serializer.data  # Obtiene los datos serializados del usuario creado.
        data["tokens"] = {  # Añade los tokens generados a la respuesta.
            "refresh": str(refresh),  # Convierte el token de refresco a cadena.
            "access": str(access),  # Convierte el token de acceso a cadena.
        }

        # Retornar la respuesta con el código de estado 201
        return Response(
            data, status=status.HTTP_201_CREATED
        )  # Retorna la respuesta con código 201.


class UserLoginAPIView(GenericAPIView):
    permission_classes = (
        AllowAny,
    )  # Permite el acceso sin autenticación para el inicio de sesión.
    serializer_class = (
        UserLoginSerializer  # Serializador para validar las credenciales del usuario.
    )

    def post(self, request, *args, **kwargs):
        # Validación de los datos de inicio de sesión
        serializer = self.get_serializer(
            data=request.data
        )  # Carga el serializador con los datos del request.
        serializer.is_valid(
            raise_exception=True
        )  # Valida las credenciales; lanza excepción si son incorrectas.

        # Obtener el usuario validado
        user = serializer.validated_data  # Obtiene el usuario autenticado.

        # Serialización de los datos del usuario
        serializer = CustomUserSerializer(
            user
        )  # Prepara los datos del usuario para la respuesta.

        # Generar tokens JWT
        token = RefreshToken.for_user(
            user
        )  # Crea un token de refresco para el usuario.
        access_token = token.access_token  # Obtiene el token de acceso.

        # Preparar la respuesta con los tokens
        data = serializer.data  # Obtiene los datos serializados del usuario.
        data["tokens"] = {  # Añade los tokens a la respuesta.
            "refresh": str(token),  # Convierte el token de refresco a cadena.
            "access": str(access_token),  # Convierte el token de acceso a cadena.
        }

        # Retornar la respuesta con el código de estado 200
        return Response(
            data, status=status.HTTP_200_OK
        )  # Retorna la respuesta con código 200.


class UserLogoutAPIView(GenericAPIView):
    permission_classes = (
        IsAuthenticated,
    )  # Solo permite el acceso a usuarios autenticados.

    def post(self, request, *args, **kwargs):
        try:
            refresh_token = request.data[
                "refresh"
            ]  # Obtiene el token de refresco del cuerpo de la solicitud.
            token = RefreshToken(
                refresh_token
            )  # Crea una instancia del token de refresco.
            token.blacklist()  # Marca el token como "blacklisted".
            return Response(
                status=status.HTTP_205_RESET_CONTENT
            )  # Responde con el código 205 (logout exitoso).
        except Exception:
            return Response(
                status=status.HTTP_400_BAD_REQUEST
            )  # Responde con código 400 en caso de error.


class UserInfoAPIView(RetrieveAPIView):
    permission_classes = (
        IsAuthenticated,
    )  # Solo permite acceso a usuarios autenticados.
    serializer_class = CustomUserSerializer  # Serializador para los datos del usuario.

    def get_object(self):
        return self.request.user  # Devuelve el usuario autenticado.


# CRUD de Instituciones
class InstitutionViewSet(viewsets.ModelViewSet):
    queryset = Institution.objects.all()  # Obtiene todas las instituciones.
    serializer_class = InstitutionSerializer  # Serializador para instituciones.

    def destroy(self, request, *args, **kwargs):
        refresh_token = request.data.get("refresh")  # Obtiene el token de refresco.
        if refresh_token:  # Verifica si se ha proporcionado un token.
            try:
                token = RefreshToken(refresh_token)  # Crea un objeto RefreshToken.
                token.blacklist()  # Invalidar el token.
            except Exception:
                return Response(
                    {"detail": "Invalid token."}, status=status.HTTP_400_BAD_REQUEST
                )  # Error en la invalidación.
        return super().destroy(
            request, *args, **kwargs
        )  # Llama al método original para eliminar la institución.


class CampusViewSet(viewsets.ModelViewSet):
    queryset = Campus.objects.all()  # Obtiene todos los campus
    serializer_class = CampusSerializer  # Serializador para campus
    permission_classes = (
        IsAuthenticated,
    )  # Asegura que solo usuarios autenticados puedan acceder

    def destroy(self, request, *args, **kwargs):
        refresh_token = request.data.get("refresh")  # Obtiene el token de refresco
        if refresh_token:  # Verifica si se ha proporcionado un token de refresco
            try:
                token = RefreshToken(refresh_token)  # Crea un objeto RefreshToken
                token.blacklist()  # Invalidar el token
            except Exception:
                return Response(
                    {"detail": "Invalid token."}, status=status.HTTP_400_BAD_REQUEST
                )
        return super().destroy(
            request, *args, **kwargs
        )  # Llama al método original para eliminar el campus


# CRUD de Cursos
class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()  # Obtiene todos los cursos.
    serializer_class = CourseSerializer  # Serializador para cursos.
    permission_classes = (
        IsAuthenticated,
    )  # Asegura que solo usuarios autenticados puedan acceder.

    def destroy(self, request, *args, **kwargs):
        refresh_token = request.data.get("refresh")  # Obtiene el token de refresco.
        if refresh_token:  # Verifica si se ha proporcionado un token.
            try:
                token = RefreshToken(refresh_token)  # Crea un objeto RefreshToken.
                token.blacklist()  # Invalidar el token.
            except Exception:
                return Response(
                    {"detail": "Invalid token."}, status=status.HTTP_400_BAD_REQUEST
                )  # Error en la invalidación.
        return super().destroy(
            request, *args, **kwargs
        )  # Llama al método original para eliminar el curso.
################

# class EnrollmentViewSet(viewsets.ModelViewSet):
#     queryset = Enrollment.objects.all()  # Obtiene todas las inscripciones.
#     serializer_class = EnrollmentSerializer  # Serializador para inscripciones.
#     permission_classes = (
#         IsAuthenticated,
#     )  # Asegura que solo usuarios autenticados puedan acceder.

#     def perform_create(self, serializer):
#         serializer.save(
#             user=self.request.user
#         )  # Asocia la inscripción con el usuario autenticado.
# class EnrollmentViewSet(viewsets.ModelViewSet):
#     queryset = Enrollment.objects.all()  # Obtiene todas las inscripciones.
#     serializer_class = EnrollmentSerializer  # Serializador para inscripciones.
#     permission_classes = (IsAuthenticated,)  # Asegura que solo usuarios autenticados puedan acceder.

#     def perform_create(self, serializer):
#         course = serializer.validated_data['course']  # Obtiene el curso de la inscripción
#         if course.seats > 0:
#             # Reduce el cupo
#             course.seats -= 1
#             # Si los asientos llegan a 0, establece el curso como inactivo
#             if course.seats == 0:
#                 course.is_active = False
#             # Guarda los cambios en el curso
#             course.save()
#             # Guarda la inscripción asociando al usuario autenticado
#             serializer.save(user=self.request.user)
#         else:
#             # Puedes lanzar una excepción si no hay cupos disponibles
#             raise serializers.ValidationError("No hay cupos disponibles para este curso.")
################
class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        course = serializer.validated_data['course']
        if course.seats > 0:
            # Reduce el cupo
            course.seats -= 1
            if course.seats == 0:
                course.is_active = False  # Desactiva el curso globalmente si no hay cupos
            course.save()

            # Guarda la inscripción y desactiva el curso solo para el usuario
            enrollment = serializer.save(user=self.request.user)
            enrollment.is_course_active = False  # Desactiva el curso para este usuario
            enrollment.save()
        else:
            raise serializers.ValidationError("No hay cupos disponibles para este curso.")

# from django.contrib.auth import authenticate
# from rest_framework import serializers
