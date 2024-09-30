from django.contrib.auth import login, logout
from rest_framework import permissions, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import UserLoginSerializer, UserRegisterSerializer, UserSerializer
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


class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request):
        data = request.data

        # Validación de email y contraseña
        if not validate_email(data):
            return Response(
                {"error": "Email inválido"}, status=status.HTTP_400_BAD_REQUEST
            )
        if not validate_password(data):
            return Response(
                {"error": "Contraseña inválida"}, status=status.HTTP_400_BAD_REQUEST
            )

        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)
            login(request, user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


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
#         # Validar y limpiar los datos del request
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

#     def post(self, request):
#         data = request.data

#         # Validación de email y contraseña
#         if not validate_email(data.get("email", "")):
#             return Response(
#                 {"error": "Email inválido"}, status=status.HTTP_400_BAD_REQUEST
#             )
#         if not validate_password(data.get("password", "")):
#             return Response(
#                 {"error": "Contraseña inválida"}, status=status.HTTP_400_BAD_REQUEST
#             )

#         serializer = UserLoginSerializer(data=data)
#         if serializer.is_valid(raise_exception=True):
#             user = serializer.check_user(data)
#             login(request, user)
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response(status=status.HTTP_400_BAD_REQUEST)


# class UserLogout(APIView):
#     permission_classes = (permissions.AllowAny,)
#     authentication_classes = ()  # No se requiere autenticación para cerrar sesión

#     def post(self, request):
#         logout(request)
#         return Response(status=status.HTTP_200_OK)


# class UserView(APIView):
#     permission_classes = (permissions.IsAuthenticated,)
#     authentication_classes = (SessionAuthentication,)

#     def get(self, request):
#         serializer = UserSerializer(request.user)
#         return Response({"user": serializer.data}, status=status.HTTP_200_OK)
