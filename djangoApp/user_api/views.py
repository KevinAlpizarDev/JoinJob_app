# Sin database completa

# from django.contrib.auth import login, logout
# from rest_framework import permissions, status
# from rest_framework.authentication import SessionAuthentication
# from rest_framework.response import Response
# from rest_framework.views import APIView

# from .serializers import UserLoginSerializer, UserRegisterSerializer, UserSerializer
# from .validations import custom_validation, validate_email, validate_password


# class UserRegister(APIView):
#     permission_classes = (permissions.AllowAny,)

#     def post(self, request):
#         clean_data = custom_validation(request.data)
#         serializer = UserRegisterSerializer(data=clean_data)
#         if serializer.is_valid(raise_exception=True):
#             user = serializer.create(clean_data)
#             if user:
#                 return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(status=status.HTTP_400_BAD_REQUEST)


# class UserLogin(APIView):
#     permission_classes = (permissions.AllowAny,)
#     authentication_classes = (SessionAuthentication,)

#     ##
#     def post(self, request):
#         data = request.data
#         assert validate_email(data)
#         assert validate_password(data)
#         serializer = UserLoginSerializer(data=data)
#         if serializer.is_valid(raise_exception=True):
#             user = serializer.check_user(data)
#             login(request, user)
#             return Response(serializer.data, status=status.HTTP_200_OK)


# class UserLogout(APIView):
#     permission_classes = (permissions.AllowAny,)
#     authentication_classes = ()

#     def post(self, request):
#         logout(request)
#         return Response(status=status.HTTP_200_OK)


# class UserView(APIView):
#     permission_classes = (permissions.IsAuthenticated,)
#     authentication_classes = (SessionAuthentication,)

#     ##
#     def get(self, request):
#         serializer = UserSerializer(request.user)
#         return Response({"user": serializer.data}, status=status.HTTP_200_OK)
# ////con database completa////////////////////////////////////////////

# from django.contrib.auth import login, logout
# from rest_framework import permissions, status
# from rest_framework.authentication import SessionAuthentication
# from rest_framework.response import Response
# from rest_framework.views import APIView
# #
# from rest_framework import generics
# from .models import Institucion, Sede, Cursos, Inscripcion
# from .serializers import InstitucionSerializer, SedeSerializer, CursosSerializer, InscripcionSerializer


# from .serializers import UserLoginSerializer, UserRegisterSerializer, UserSerializer
# from .validations import custom_validation, validate_email, validate_password


# class UserRegister(APIView):
#     permission_classes = (permissions.AllowAny,)

#     def post(self, request):
#         clean_data = custom_validation(request.data)
#         serializer = UserRegisterSerializer(data=clean_data)
#         if serializer.is_valid(raise_exception=True):
#             user = serializer.create(clean_data)
#             if user:
#                 return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(status=status.HTTP_400_BAD_REQUEST)


# class UserLogin(APIView):
#     permission_classes = (permissions.AllowAny,)
#     authentication_classes = (SessionAuthentication,)

#     ##
#     def post(self, request):
#         data = request.data
#         assert validate_email(data)
#         assert validate_password(data)
#         serializer = UserLoginSerializer(data=data)
#         if serializer.is_valid(raise_exception=True):
#             user = serializer.check_user(data)
#             login(request, user)
#             return Response(serializer.data, status=status.HTTP_200_OK)


# class UserLogout(APIView):
#     permission_classes = (permissions.AllowAny,)
#     authentication_classes = ()

#     def post(self, request):
#         logout(request)
#         return Response(status=status.HTTP_200_OK)


# class UserView(APIView):
#     permission_classes = (permissions.IsAuthenticated,)
#     authentication_classes = (SessionAuthentication,)


#     def get(self, request):
#         serializer = UserSerializer(request.user)
#         return Response({"user": serializer.data}, status=status.HTTP_200_OK)

#     #


# class InstitucionListCreate(generics.ListCreateAPIView):
#     queryset = Institucion.objects.all()
#     serializer_class = InstitucionSerializer


# class InstitucionRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Institucion.objects.all()
#     serializer_class = InstitucionSerializer


# class SedeListCreate(generics.ListCreateAPIView):
#     queryset = Sede.objects.all()
#     serializer_class = SedeSerializer


# class SedeRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Sede.objects.all()
#     serializer_class = SedeSerializer


# class CursosListCreate(generics.ListCreateAPIView):
#     queryset = Cursos.objects.all()
#     serializer_class = CursosSerializer


# class CursosRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Cursos.objects.all()
#     serializer_class = CursosSerializer


# class InscripcionListCreate(generics.ListCreateAPIView):
#     queryset = Inscripcion.objects.all()
#     serializer_class = InscripcionSerializer


# class InscripcionRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Inscripcion.objects.all()
#     serializer_class = InscripcionSerializer


############################IS STUFF

from django.contrib.auth import login, logout
from rest_framework import generics, permissions, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Cursos, Inscripcion, Institucion, Sede
from .serializers import (
    CursosSerializer,
    InscripcionSerializer,
    InstitucionSerializer,
    SedeSerializer,
    UserLoginSerializer,
    UserRegisterSerializer,
    UserSerializer,
)
from .validations import custom_validation, validate_email, validate_password


class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        clean_data = custom_validation(request.data)
        serializer = UserRegisterSerializer(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(clean_data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


# class UserLogin(APIView):
#     permission_classes = (permissions.AllowAny,)
#     authentication_classes = (SessionAuthentication,)


#     def post(self, request):
#         data = request.data
#         assert validate_email(data)
#         assert validate_password(data)
#         serializer = UserLoginSerializer(data=data)
#         if serializer.is_valid(raise_exception=True):
#             user = serializer.check_user(data)
#             login(request, user)
#             # Incluir el campo is_staff en la respuesta
#             user_data = UserSerializer(user).data
#             return Response(
#                 {"user": user_data, "is_staff": user.is_staff},
#                 status=status.HTTP_200_OK,
#             )
class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request):
        data = request.data
        assert validate_email(data)
        assert validate_password(data)
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)
            login(request, user)
            user_data = UserSerializer(user).data
            return Response(
                {"user": user_data, "is_staff": user.is_staff},
                status=status.HTTP_200_OK,
            )


class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)


class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({"user": serializer.data}, status=status.HTTP_200_OK)


# Inlove
# class CursosListCreate(generics.ListCreateAPIView):
#     queryset = Cursos.objects.all()
#     serializer_class = CursosSerializer


# Views para Instituciones, Sedes, Cursos e Inscripciones
class InstitucionListCreate(generics.ListCreateAPIView):
    queryset = Institucion.objects.all()
    serializer_class = InstitucionSerializer


class InstitucionRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Institucion.objects.all()
    serializer_class = InstitucionSerializer


class SedeListCreate(generics.ListCreateAPIView):
    queryset = Sede.objects.all()
    serializer_class = SedeSerializer


class SedeRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sede.objects.all()
    serializer_class = SedeSerializer


class CursosListCreate(generics.ListCreateAPIView):
    queryset = Cursos.objects.all()
    serializer_class = CursosSerializer


class CursosRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cursos.objects.all()
    serializer_class = CursosSerializer


class InscripcionListCreate(generics.ListCreateAPIView):
    queryset = Inscripcion.objects.all()
    serializer_class = InscripcionSerializer


class InscripcionRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Inscripcion.objects.all()
    serializer_class = InscripcionSerializer
