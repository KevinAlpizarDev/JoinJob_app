from django.contrib.auth import authenticate
from rest_framework import serializers

from .models import Campus, Course, CustomUser, Enrollment, Institution


# class CustomUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         fields = (
#             "id",
#             "username",
#             "email",
#             "is_active",
#         )
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = (
            "id",
            "username",
            "name",  # Añadir el campo name
            "email",
            "is_active",
            "is_staff",
        )


# class UserRegistrationSerializer(serializers.ModelSerializer):
#     password1 = serializers.CharField(write_only=True)
#     password2 = serializers.CharField(write_only=True)

#     class Meta:
#         model = CustomUser
#         fields = ("id", "username", "email", "password1", "password2")
#         extra_kwargs = {"password": {"write_only": True}}

#     def validate(self, attrs):
#         if attrs["password1"] != attrs["password2"]:
#             raise serializers.ValidationError("Passwords do not match!")

#         password = attrs.get("password1", "")
#         if len(password) < 8:
#             raise serializers.ValidationError(
#                 "Passwords must be at least 8 characters!"
#             )

#         return attrs

#     def create(self, validated_data):
#         password = validated_data.pop("password1")
#         validated_data.pop("password2")


#         return CustomUser.objects.create_user(password=password, **validated_data)
# class UserRegistrationSerializer(serializers.ModelSerializer):
#     password1 = serializers.CharField(write_only=True)
#     password2 = serializers.CharField(write_only=True)

#     class Meta:
#         model = CustomUser
#         fields = (
#             "id",
#             "username",
#             "name",
#             "email",
#             "password1",
#             "password2",
#         )
#         extra_kwargs = {"password": {"write_only": True}}

#     def validate(self, attrs):
#         if attrs["password1"] != attrs["password2"]:
#             raise serializers.ValidationError("Passwords do not match!")

#         password = attrs.get("password1", "")
#         if len(password) < 8:
#             raise serializers.ValidationError(
#                 "Passwords must be at least 8 characters!"
#             )

#         return attrs

#     def create(self, validated_data):
#         password = validated_data.pop("password1")
#         validated_data.pop("password2")


#         return CustomUser.objects.create_user(password=password, **validated_data)
class UserRegistrationSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = (
            "id",
            "username",
            "name",  # Asegúrate de que esto esté aquí
            "email",
            "password1",
            "password2",
        )
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, attrs):
        if attrs["password1"] != attrs["password2"]:
            raise serializers.ValidationError("Passwords do not match!")

        password = attrs.get("password1", "")
        if len(password) < 8:
            raise serializers.ValidationError(
                "Passwords must be at least 8 characters!"
            )

        return attrs

    def create(self, validated_data):
        password = validated_data.pop("password1")
        validated_data.pop("password2")

        return CustomUser.objects.create_user(password=password, **validated_data)


class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(email=data.get("email"), password=data.get("password"))
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials!")


class InstitutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institution
        fields = [
            "id",
            "name",
            "type",
            "phone_number",
            "is_active",
        ]


class CampusSerializer(serializers.ModelSerializer):
    institution = serializers.PrimaryKeyRelatedField(queryset=Institution.objects.all())

    class Meta:
        model = Campus
        fields = "__all__"  # Esto incluirá todos los campos del modelo Campus


class CourseSerializer(serializers.ModelSerializer):
    campus = serializers.PrimaryKeyRelatedField(
        queryset=Campus.objects.all()
    )  # Usar ID del campus

    class Meta:
        model = Course
        fields = "__all__"


# class EnrollmentSerializer(serializers.ModelSerializer):
#     user = serializers.StringRelatedField(read_only=True)
#     course = CourseSerializer(read_only=True)


#     class Meta:
#         model = Enrollment
#         fields = '__all__'
# class EnrollmentSerializer(serializers.ModelSerializer):
#     user = serializers.StringRelatedField(read_only=True)
#     course = CourseSerializer(read_only=True)

#     class Meta:
#         model = Enrollment
#         fields = "__all__"
#############################################################re


# class EnrollmentSerializer(serializers.ModelSerializer):
#     user = serializers.StringRelatedField(
#         read_only=True
#     )  # Mostrar el usuario como string, pero no modificarlo
#     course_id = serializers.PrimaryKeyRelatedField(
#         queryset=Course.objects.all(), source="course"
#     )  # Para aceptar el ID del curso

#     class Meta:
#         model = Enrollment
#         fields = [
#             "id",
#             "user",
#             "id_number",
#             "phone_number",
#             "age",
#             "gender",
#             "course_id",
#             "is_active",
#         ]

#     def create(self, validated_data):
#         user = self.context["request"].user  # Tomar el usuario autenticado
#         enrollment = Enrollment.objects.create(user=user, **validated_data)
#         return enrollment


# class EnrollmentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Enrollment
#         # fields = ["id_number", "phone_number", "age", "gender", "course"]
#         fields = ["id_number", "phone_number", "age", "gender", "course"]

#     def validate_age(self, value):
#         if value < 0:
#             raise serializers.ValidationError("La edad no puede ser negativa.")
#         return value


#     def validate_gender(self, value):
#         if value not in ["male", "female"]:
#             raise serializers.ValidationError("Género debe ser 'male' o 'female'.")
#         return value


# class EnrollmentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Enrollment
#         # fields = ["id_number", "phone_number", "age", "gender", "course"]
#         fields = ["id_number", "phone_number", "age", "gender", "course"]

#     def validate_age(self, value):
#         if value < 0:
#             raise serializers.ValidationError("La edad no puede ser negativa.")
#         return value


#     def validate_gender(self, value):
#         if value not in ["male", "female"]:
#             raise serializers.ValidationError("Género debe ser 'male' o 'female'.")
#         return value
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["name", "username"]


# class EnrollmentSerializer(serializers.ModelSerializer):
#     user = UserSerializer(read_only=True)

#     class Meta:
#         model = Enrollment
#         fields = [
#             "id_number",
#             "phone_number",
#             "age",
#             "gender",
#             "course",
#             "is_active",
#             "user",
#         ]

#     def validate_age(self, value):
#         if value < 0:
#             raise serializers.ValidationError("La edad no puede ser negativa.")
#         return value


#     def validate_gender(self, value):
#         if value not in ["male", "female"]:
#             raise serializers.ValidationError("Género debe ser 'male' o 'female'.")
#         return value
# class EnrollmentSerializer(serializers.ModelSerializer):
#     user = serializers.StringRelatedField()  # Muestra el nombre del usuario relacionado
#     course = serializers.StringRelatedField()  # Muestra el nombre del curso relacionado


#     class Meta:
#         model = Enrollment
#         fields = [
#             "id",
#             "user",
#             "id_number",
#             "phone_number",
#             "age",
#             "gender",
#             "course",
#             "is_active",
#         ]
class EnrollmentSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        read_only=True
    )  # Solo lectura, se asigna automáticamente en el servidor
    course = serializers.PrimaryKeyRelatedField(
        queryset=Course.objects.all()
    )  # Acepta un ID de curso

    class Meta:
        model = Enrollment
        fields = [
            "id",
            "user",
            "id_number",
            "phone_number",
            "age",
            "gender",
            "course",
            "is_active",
        ]
