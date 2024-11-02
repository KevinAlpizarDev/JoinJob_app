from django.contrib.auth import authenticate
from rest_framework import serializers

from .models import Campus, Course, CustomUser, Enrollment, Institution


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
    institution_name = (
        serializers.SerializerMethodField()
    )  # Campo adicional para el nombre de la institución

    class Meta:
        model = Campus
        fields = (
            "__all__"  # Incluir todos los campos del modelo Campus y el campo adicional
        )

    # class Meta:
    #     model = Campus
    #     fields = ['id', 'name', 'latitude', 'longitude']  # Añadir latitud y longitud aquí

    def get_institution_name(self, obj):
        return obj.institution.name  # Acceder al nombre de la institución


# class CourseSerializer(serializers.ModelSerializer):
#     campus_name = serializers.CharField(
#         source="campus.name", read_only=True
#     )  # Campo para mostrar el nombre del campus


#     class Meta:
#         model = Course
#         fields = [
#             "id",
#             "name",
#             "code",
#             "description",
#             "start_date",
#             "end_date",
#             "year",
#             "seats",
#             "modality",
#             "is_active",
#             "campus",
#             "campus_name",
#         ]


class CourseSerializer(serializers.ModelSerializer):
    campus_name = serializers.CharField(source="campus.name", read_only=True)
    campus_latitude = serializers.FloatField(
        source="campus.latitude", read_only=True
    )  # Añade latitud
    campus_longitude = serializers.FloatField(
        source="campus.longitude", read_only=True
    )  # Añade longitud

    class Meta:
        model = Course
        fields = [
            "id",
            "name",
            "code",
            "description",
            "start_date",
            "end_date",
            "year",
            "seats",
            "modality",
            "is_active",
            "campus",
            "campus_name",
            "campus_latitude",  # Incluye latitud en los campos del curso
            "campus_longitude",  # Incluye longitud en los campos del curso
        ]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["name", "username"]


# class EnrollmentSerializer(serializers.ModelSerializer):
#     user = serializers.PrimaryKeyRelatedField(
#         read_only=True
#     )  # Solo lectura, se asigna automáticamente en el servidor
#     course = serializers.PrimaryKeyRelatedField(
#         queryset=Course.objects.all()
#     )  # Acepta un ID de curso

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


# class EnrollmentSerializer(serializers.ModelSerializer):
#     user = UserSerializer(read_only=True)  # Anidar el serializador del usuario
#     course = serializers.CharField(
#         source="course.name", read_only=True
#     )  # Mostrar el nombre del curso

#     class Meta:
#         model = Enrollment
#         fields = [
#             "id",
#             "user",  # Aquí vendrá el nombre del usuario en lugar del ID
#             "id_number",
#             "phone_number",
#             "age",
#             "gender",
#             "course",  # Ya no solo será el ID del curso, sino su nombre
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
