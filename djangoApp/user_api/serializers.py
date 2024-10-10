
##########username error #####################################################


from django.contrib.auth import authenticate, get_user_model
from django.core.exceptions import ValidationError
from rest_framework import serializers

# from rest_framework import serializers
from .models import Cursos, Inscripcion, Institucion, Sede

UserModel = get_user_model()


# class UserRegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserModel
#         fields = "__all__"


#     def create(self, clean_data):
#         user_obj = UserModel.objects.create_user(
#             email=clean_data["email"], password=clean_data["password"]
#         )
#         user_obj.username = clean_data["username"]
#         user_obj.save()
#         return user_obj
class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ["email", "username", "password"]  # Incluir solo los campos requeridos

    def create(self, validated_data):
        password = validated_data.pop(
            "password"
        )  # Obtener la contraseña de validated_data
        user_obj = UserModel.objects.create_user(
            email=validated_data["email"],
            username=validated_data["username"],
            password=password,
        )
        user_obj.save()
        return user_obj


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    ##
    def check_user(self, clean_data):
        user = authenticate(
            username=clean_data["email"], password=clean_data["password"]
        )
        if not user:
            raise ValidationError("user not found")
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ("email", "username")

        #


class InstitucionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institucion
        fields = "__all__"


class SedeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sede
        fields = "__all__"


class CursosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cursos
        fields = "__all__"


class InscripcionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscripcion
        fields = "__all__"
