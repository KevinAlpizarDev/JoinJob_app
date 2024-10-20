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
class UserRegistrationAPIView(GenericAPIView):
    permission_classes = (
        AllowAny,
    )  # La clave: se permite el acceso sin autenticación a esta vista, útil para registro de usuarios.
    serializer_class = UserRegistrationSerializer  # El serializador encargado de validar y crear el usuario a partir de los datos recibidos.

    def post(self, request, *args, **kwargs):
        # Validación de datos
        serializer = self.get_serializer(
            data=request.data
        )  # Obtiene una instancia del serializador con los datos enviados en la solicitud (request).
        serializer.is_valid(
            raise_exception=True
        )  # Verifica si los datos enviados son válidos según las reglas del serializador. Si no lo son, lanza una excepción automáticamente.

        # Guardar el usuario y generar tokens
        user = (
            serializer.save()
        )  # Si los datos son válidos, se guarda el nuevo usuario en la base de datos.

        # Genera los tokens de refresh y access para el usuario recién registrado.
        refresh = RefreshToken.for_user(
            user
        )  # Crea un token de refresco (refresh token) asociado al nuevo usuario.
        access = (
            refresh.access_token
        )  # Obtiene el token de acceso (access token) a partir del token de refresco.

        # Preparar la respuesta con los tokens
        data = serializer.data  # Toma los datos serializados del usuario creado (los datos que define el serializer).
        data[
            "tokens"
        ] = {  # Añade los tokens generados (refresh y access) a la respuesta de los datos del usuario.
            "refresh": str(
                refresh
            ),  # Convierte el token de refresco en cadena de texto y lo agrega a la respuesta.
            "access": str(
                access
            ),  # Convierte el token de acceso en cadena de texto y lo agrega a la respuesta.
        }

        # Retornar la respuesta con el código de estado 201
        return Response(
            data, status=status.HTTP_201_CREATED
        )  # Retorna los datos serializados y los tokens en una respuesta HTTP con el código 201 (creado).


#    Explicación por partes:
# permission_classes = (IsAuthenticated,):

# Esta clase de permisos asegura que solo los usuarios autenticados pueden acceder a esta vista.
# Como el logout implica invalidar el token de refresco del usuario autenticado, la autenticación es necesaria.
# Método post:

# Este método maneja las solicitudes POST para cerrar sesión.
# refresh_token = request.data["refresh"]:

# El cliente (generalmente el frontend) envía el token de refresco en el cuerpo de la solicitud.
# Se extrae este token de los datos de la solicitud (request.data).
# token = RefreshToken(refresh_token):

# Se crea una instancia de la clase RefreshToken a partir del token de refresco que se ha recibido. Esto permite manipular el token de refresco, por ejemplo, para invalidarlo.
# token.blacklist():

# Esta es la clave del proceso de logout. Se utiliza el método blacklist() para agregar el token de refresco a una lista negra (blacklist).
# Un token en la lista negra ya no es válido, lo que significa que no se puede usar para obtener nuevos tokens de acceso. Esto evita que el usuario pueda volver a autenticarse sin volver a iniciar sesión.
# return Response(status=status.HTTP_205_RESET_CONTENT):

# El código de estado HTTP 205 (RESET CONTENT) indica que la solicitud se procesó correctamente y que el estado del cliente se ha reiniciado (es decir, el usuario ha cerrado sesión).
# No se envía ningún contenido en la respuesta, solo el código de estado que informa al cliente de que el logout fue exitoso.
# Manejo de excepciones:

# except Exception: Si ocurre un error (por ejemplo, si el token de refresco proporcionado es inválido o no existe), se captura la excepción.
# return Response(status=status.HTTP_400_BAD_REQUEST): En caso de error, se devuelve un código HTTP 400 (BAD REQUEST), indicando que la solicitud era incorrecta o inválida.
# Flujo del Logout:
# Autenticación requerida: Solo los usuarios autenticados pueden hacer logout.
# Envío del refresh token: El cliente envía el token de refresco en la solicitud.
# Blacklisting del token: El token de refresco se invalida, impidiendo su reutilización para obtener nuevos tokens de acceso.
# Logout exitoso: Si todo funciona correctamente, el servidor responde con un código 205.
# ¿Por qué necesita autenticación?
# El logout implica la invalidación del token de refresco del usuario autenticado.
# Solo un usuario que ha iniciado sesión debe poder solicitar la invalidación de su propio token.
# Si no se requiriera autenticación, cualquier usuario podría enviar solicitudes de logout, lo cual sería inseguro.
# Este flujo es esencial para manejar la invalidación de tokens de manera segura, garantizando que los usuarios no puedan usar tokens antiguos después de haber cerrado sesión.


# Claves de la optimización:
# Separación clara de refresh y access tokens: En lugar de hacer que el token de refresco genere el de acceso en línea, ambos se manejan explícitamente.

# Manejo claro del serializer: Se asegura de que los datos validados se guarden y luego se genere el token, manteniendo una estructura limpia.

# Esto garantiza que la vista de registro maneje correctamente la autenticación con JWT, proporcionando tanto el token de acceso como el de refresco al usuario recién registrado.

##
# Explicación por partes:
# Autenticación y permisos (AllowAny): La clase de permisos AllowAny indica que esta vista es pública, lo que significa que cualquier usuario puede acceder a ella sin necesidad de autenticarse. Esto es adecuado para la ruta de registro de usuarios.

# Serialización y validación: El serializador (UserRegistrationSerializer) se utiliza para manejar la validación de datos y la creación del usuario. Cuando los datos del registro se envían a la vista mediante una solicitud POST, el serializador los procesa y valida.

# Generación de tokens JWT: Una vez que el usuario se registra, se crean dos tokens (refresh y access) utilizando la librería RefreshToken de rest_framework_simplejwt. Estos tokens se utilizan para que el usuario pueda autenticarse en futuras solicitudes.

# Preparación de la respuesta: La respuesta incluye tanto los datos del usuario recién registrado (devueltos por el serializador) como los tokens JWT generados. Esto le permite al cliente tener un token de acceso listo para hacer otras solicitudes autenticadas.

# Código de estado HTTP 201: El código de respuesta 201 Created indica que la operación fue exitosa y que un nuevo recurso (en este caso, un usuario) ha sido creado.

# Esta estructura es común en vistas de API que manejan registro de usuarios junto con JWT para la autenticación.


##########################################################################################################################################################

# Login de usuario
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


# Login de usuario
class UserLoginAPIView(GenericAPIView):
    permission_classes = (
        AllowAny,
    )  # Permite el acceso sin autenticación previa, necesario para el login
    serializer_class = (
        UserLoginSerializer  # Serializador que valida las credenciales del usuario
    )

    def post(self, request, *args, **kwargs):
        # Validación de los datos de inicio de sesión
        serializer = self.get_serializer(
            data=request.data
        )  # Carga el serializador con los datos del request (email/username, password).
        serializer.is_valid(
            raise_exception=True
        )  # Valida las credenciales. Si son incorrectas, lanza una excepción.

        # Si las credenciales son correctas, se obtienen los datos del usuario validado
        user = serializer.validated_data  # `validated_data` devuelve el usuario autenticado a partir de las credenciales correctas.

        # Serialización de los datos del usuario para la respuesta
        serializer = CustomUserSerializer(
            user
        )  # Usamos un serializador personalizado (CustomUserSerializer) para preparar los datos del usuario en la respuesta.

        # Generar tokens JWT para el usuario
        token = RefreshToken.for_user(
            user
        )  # Crea un refresh token para el usuario autenticado.
        access_token = (
            token.access_token
        )  # Genera un token de acceso a partir del refresh token.

        # Preparar la respuesta con los tokens
        data = (
            serializer.data
        )  # Obtiene los datos serializados del usuario (ej. nombre, email).
        data[
            "tokens"
        ] = {  # Añadimos los tokens de acceso y refresh a los datos del usuario.
            "refresh": str(
                token
            ),  # Convierte el refresh token en una cadena y lo incluye en la respuesta.
            "access": str(
                access_token
            ),  # Convierte el access token en una cadena y lo incluye en la respuesta.
        }

        # Retornar la respuesta con los tokens y los datos del usuario, con el código de estado 200 (OK)
        return Response(data, status=status.HTTP_200_OK)


#     Explicación por partes:
# permission_classes = (AllowAny,): No se requiere autenticación previa, ya que esta es la ruta donde el usuario envía sus credenciales para iniciar sesión.

# Validación de datos:

# serializer = self.get_serializer(data=request.data): Carga los datos (como email y contraseña) en el serializador de login.
# serializer.is_valid(raise_exception=True): Verifica que las credenciales sean válidas y lanza una excepción si no lo son.
# Usuario validado:

# user = serializer.validated_data: Si las credenciales son válidas, este método devuelve el usuario autenticado.
# El serializador de login maneja la validación de credenciales y, si son correctas, devuelve el usuario.
# Serialización de los datos del usuario:

# serializer = CustomUserSerializer(user): Utiliza un serializador para preparar los datos del usuario (ej., nombre, email) que se incluirán en la respuesta.
# Generación de tokens JWT:

# token = RefreshToken.for_user(user): Crea un refresh token para el usuario, lo que permite al usuario obtener nuevos tokens de acceso sin volver a autenticarse.
# access_token = token.access_token: Genera un access token a partir del token de refresco, que se utilizará para futuras solicitudes autenticadas.
# Preparar la respuesta:

# data = serializer.data: Obtiene los datos del usuario en formato serializado (ej., nombre, email).
# data["tokens"]: Se añaden los tokens (refresh y access) a los datos que se devolverán en la respuesta.
# Respuesta HTTP:

# return Response(data, status=status.HTTP_200_OK): Devuelve la respuesta con los datos del usuario y los tokens, indicando que la solicitud fue exitosa (código 200).
# Resumen:
# Este flujo sigue una lógica muy similar al del registro, pero en este caso las credenciales son validadas para obtener los tokens JWT sin crear un nuevo usuario.
# Tanto el refresh como el access token se devuelven al cliente, lo cual permite que el usuario se autentique en futuras solicitudes con el token de acceso.
# Este login funcionaría de manera fluida para autenticar usuarios y generar los tokens necesarios para la autenticación en futuras solicitudes.


# Logout de usuario
# class UserLogoutAPIView(GenericAPIView):
#     permission_classes = (IsAuthenticated,)


#     def post(self, request, *args, **kwargs):
#         try:
#             refresh_token = request.data["refresh"]
#             token = RefreshToken(refresh_token)
#             token.blacklist()  # Invalida el token de refresco
#             return Response(status=status.HTTP_205_RESET_CONTENT)
#         except Exception:
#             return Response(status=status.HTTP_400_BAD_REQUEST)
class UserLogoutAPIView(GenericAPIView):
    permission_classes = (
        IsAuthenticated,
    )  # Solo permite el acceso a usuarios autenticados

    def post(self, request, *args, **kwargs):
        try:
            refresh_token = request.data[
                "refresh"
            ]  # Obtiene el token de refresco enviado en el cuerpo de la solicitud.
            token = RefreshToken(
                refresh_token
            )  # Crea una instancia del token de refresco.
            token.blacklist()  # Marca el token de refresco como "blacklisted" (invalida el token).
            return Response(
                status=status.HTTP_205_RESET_CONTENT
            )  # Responde con el código 205 que indica que el contenido se ha reiniciado (logout exitoso).
        except Exception:
            return Response(
                status=status.HTTP_400_BAD_REQUEST
            )  # Si ocurre algún error (ej., token inválido), se responde con un código 400 (solicitud incorrecta).


# Explicación por partes:
# permission_classes = (IsAuthenticated,):

# Esta clase de permisos asegura que solo los usuarios autenticados pueden acceder a esta vista.
# Como el logout implica invalidar el token de refresco del usuario autenticado, la autenticación es necesaria.
# Método post:

# Este método maneja las solicitudes POST para cerrar sesión.
# refresh_token = request.data["refresh"]:

# El cliente (generalmente el frontend) envía el token de refresco en el cuerpo de la solicitud.
# Se extrae este token de los datos de la solicitud (request.data).
# token = RefreshToken(refresh_token):

# Se crea una instancia de la clase RefreshToken a partir del token de refresco que se ha recibido. Esto permite manipular el token de refresco, por ejemplo, para invalidarlo.
# token.blacklist():

# Esta es la clave del proceso de logout. Se utiliza el método blacklist() para agregar el token de refresco a una lista negra (blacklist).
# Un token en la lista negra ya no es válido, lo que significa que no se puede usar para obtener nuevos tokens de acceso. Esto evita que el usuario pueda volver a autenticarse sin volver a iniciar sesión.
# return Response(status=status.HTTP_205_RESET_CONTENT):

# El código de estado HTTP 205 (RESET CONTENT) indica que la solicitud se procesó correctamente y que el estado del cliente se ha reiniciado (es decir, el usuario ha cerrado sesión).
# No se envía ningún contenido en la respuesta, solo el código de estado que informa al cliente de que el logout fue exitoso.
# Manejo de excepciones:

# except Exception: Si ocurre un error (por ejemplo, si el token de refresco proporcionado es inválido o no existe), se captura la excepción.
# return Response(status=status.HTTP_400_BAD_REQUEST): En caso de error, se devuelve un código HTTP 400 (BAD REQUEST), indicando que la solicitud era incorrecta o inválida.
# Flujo del Logout:
# Autenticación requerida: Solo los usuarios autenticados pueden hacer logout.
# Envío del refresh token: El cliente envía el token de refresco en la solicitud.
# Blacklisting del token: El token de refresco se invalida, impidiendo su reutilización para obtener nuevos tokens de acceso.
# Logout exitoso: Si todo funciona correctamente, el servidor responde con un código 205.
# ¿Por qué necesita autenticación?
# El logout implica la invalidación del token de refresco del usuario autenticado.
# Solo un usuario que ha iniciado sesión debe poder solicitar la invalidación de su propio token.
# Si no se requiriera autenticación, cualquier usuario podría enviar solicitudes de logout, lo cual sería inseguro.
# Este flujo es esencial para manejar la invalidación de tokens de manera segura, garantizando que los usuarios no puedan usar tokens antiguos después de haber cerrado sesión.
########################################################################################################################################################################################################

# # Información del usuario autenticado
# class UserInfoAPIView(RetrieveAPIView):
#     permission_classes = (IsAuthenticated,)
#     serializer_class = CustomUserSerializer

#     def get_object(self):
#         return self.request.user


# # CRUD de Instituciones
# class InstitutionViewSet(viewsets.ModelViewSet):
#     queryset = Institution.objects.all()
#     serializer_class = InstitutionSerializer


# # CRUD de Campus
# class CampusViewSet(viewsets.ModelViewSet):
#     queryset = Campus.objects.all()
#     serializer_class = CampusSerializer


# # CRUD de Cursos
# class CourseViewSet(viewsets.ModelViewSet):
#     queryset = Course.objects.all()
#     serializer_class = CourseSerializer


# Información del usuario autenticado
# class UserInfoAPIView(RetrieveAPIView):
#     permission_classes = (AllowAny,)  # Solo permite el acceso a usuarios autenticados
#     serializer_class = CustomUserSerializer  # Serializador para la información del usuario


#     def get_object(self):
#         return self.request.user  # Devuelve el usuario autenticado
class UserInfoAPIView(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CustomUserSerializer

    def get_object(self):
        return self.request.user


# CRUD de Instituciones
class InstitutionViewSet(viewsets.ModelViewSet):
    queryset = Institution.objects.all()  # Obtiene todas las instituciones
    serializer_class = InstitutionSerializer  # Serializador para instituciones

    def destroy(self, request, *args, **kwargs):
        # Aquí podrías agregar lógica para invalidar el token de refresco del usuario, si es necesario
        # Ejemplo de invalidación
        refresh_token = request.data.get(
            "refresh"
        )  # Obtiene el token de refresco si se envía
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
        )  # Llama al método original para eliminar la institución


# CRUD de Campus
class CampusViewSet(viewsets.ModelViewSet):
    queryset = Campus.objects.all()  # Obtiene todos los campus
    serializer_class = CampusSerializer  # Serializador para campus
    permission_classes = (
        IsAuthenticated,
    )  # Asegura que solo usuarios autenticados puedan acceder

    def destroy(self, request, *args, **kwargs):
        # Similar a la vista anterior, se puede invalidar el token de refresco aquí también
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
    queryset = Course.objects.all()  # Obtiene todos los cursos
    serializer_class = CourseSerializer  # Serializador para cursos
    permission_classes = (IsAuthenticated,)

    def destroy(self, request, *args, **kwargs):
        # Similar a las vistas anteriores, se puede invalidar el token de refresco aquí también
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
        )  # Llama al método original para eliminar el curso


# permission_classes = (IsAuthenticated,):

# Cada vista está configurada para permitir solo el acceso a usuarios que hayan sido autenticados previamente. Esto es crucial para asegurar que solo los usuarios con permisos adecuados puedan realizar acciones CRUD o acceder a información sensible.
# Método get_object (en UserInfoAPIView):

# Este método devuelve el usuario autenticado (self.request.user), lo que permite al cliente obtener información sobre su propio perfil.
# Implementación de destroy (en InstitutionViewSet, CampusViewSet, y CourseViewSet):

# Cada vista de CRUD implementa el método destroy, que se llama cuando se desea eliminar un objeto.
# Obtener el token de refresco: Se busca el token de refresco en los datos de la solicitud. Esto es útil si deseas invalidar el token cada vez que se realiza una acción importante, como eliminar un recurso.
# Invalidar el token: Si se proporciona un token de refresco, se crea un objeto RefreshToken y se llama al método blacklist(). Esto evita que el token pueda usarse nuevamente, asegurando que el usuario tenga que volver a autenticarse.
# Manejo de excepciones: Si se encuentra un problema al intentar invalidar el token (como un token inválido), se devuelve un código de error 400 (BAD REQUEST) y un mensaje de error.
# Consideraciones:
# Invalidación del token: La invalidación del token puede no ser necesaria en todos los métodos, así que es importante decidir cuándo es apropiado hacerlo. En este ejemplo, se realiza al eliminar un recurso, pero podrías querer aplicarlo en otras operaciones según tu lógica de negocio.
# Códigos de estado: El uso de códigos de estado apropiados ayuda a que el cliente comprenda el resultado de su solicitud y si ocurrió algún error.
# Resumen:
# Con estas modificaciones, ahora tienes vistas que requieren autenticación y que implementan el proceso de invalidación de tokens cuando se realizan acciones significativas. Esto es esencial para mantener la seguridad en un sistema donde se manejan recursos sensibles y operaciones administrativas.


# CRUD de Matriculaciones (Enrollments)
# class EnrollmentViewSet(viewsets.ModelViewSet):
#     queryset = Enrollment.objects.all()
#     serializer_class = EnrollmentSerializer
#     permission_classes = [IsAuthenticated]

#     def perform_create(self, serializer):
#         # Asignar el usuario autenticado a la matrícula
#         serializer.save(user=self.request.user)
####################################################################re


# class EnrollmentViewSet(viewsets.ModelViewSet):
#     queryset = Enrollment.objects.all()
#     serializer_class = EnrollmentSerializer

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)  # Asociar el usuario autenticado

# CRUD de Inscripciones
# class EnrollmentViewSet(viewsets.ModelViewSet):
#     queryset = Enrollment.objects.all()  # Obtiene todas las inscripciones
#     serializer_class = EnrollmentSerializer  # Serializador para inscripciones
#     permission_classes = (IsAuthenticated,)  # Solo permite el acceso a usuarios autenticados

#     def perform_create(self, serializer):
#         # Asocia el usuario autenticado a la inscripción
#         serializer.save(user=self.request.user)

#     def destroy(self, request, *args, **kwargs):
#         # Aquí podrías agregar lógica para invalidar el token de refresco del usuario, si es necesario
#         refresh_token = request.data.get("refresh")  # Obtiene el token de refresco si se envía
#         if refresh_token:  # Verifica si se ha proporcionado un token de refresco
#             try:
#                 token = RefreshToken(refresh_token)  # Crea un objeto RefreshToken
#                 token.blacklist()  # Invalidar el token
#             except Exception:
#                 return Response({"detail": "Invalid token."}, status=status.HTTP_400_BAD_REQUEST)
#         return super().destroy(request, *args, **kwargs)  # Llama al método original para eliminar la inscripción
# permission_classes = (IsAuthenticated,):

# Esta clase de permisos garantiza que solo los usuarios autenticados puedan acceder a las funcionalidades de este viewset, lo que es esencial para la seguridad y la integridad de la información.
# perform_create:

# Este método se llama cuando se crea una nueva inscripción. Utiliza el serializador para guardar la inscripción, y además, asocia el usuario autenticado (self.request.user) a la inscripción.
# Esto asegura que cada inscripción esté ligada al usuario que la creó, lo cual es fundamental para llevar un registro de quién está matriculado en qué curso.
# Método destroy:

# Este método maneja las solicitudes para eliminar inscripciones. Similar a las vistas anteriores, se busca un token de refresco en los datos de la solicitud.
# Invalidar el token: Si se proporciona un token de refresco, se intenta invalidarlo utilizando blacklist(). Esto podría ser útil si deseas forzar al usuario a autenticarse nuevamente tras realizar acciones críticas, como eliminar inscripciones.
# Manejo de excepciones: Se incluye un bloque try-except para manejar cualquier error que ocurra al intentar invalidar el token. Si el token es inválido, se devuelve un código de estado 400 y un mensaje de error.
# Resumen de la funcionalidad:
# Con estas implementaciones, los usuarios autenticados pueden matricularse en cursos mediante el EnrollmentViewSet, y cada inscripción estará asociada al usuario que la creó. Además, se incluye la lógica para manejar la invalidación del token de refresco en caso de que desees hacerlo cuando se eliminen inscripciones. Esto ayuda a mantener la seguridad y el control sobre las acciones que realizan los usuarios en la aplicación.


# Tu vista de EnrollmentViewSet es en su mayoría correcta, pero hay algunos detalles a revisar y mejorar, especialmente en el método destroy y en el contexto de cómo el token de refresco es manejado.

# Análisis y recomendaciones:
# Autenticación: La autenticación mediante la clase IsAuthenticated está bien aplicada. Esto asegura que solo los usuarios autenticados pueden acceder a las funcionalidades del ViewSet, como crear o eliminar inscripciones.

# Método perform_create: Está correctamente implementado para asociar la inscripción con el usuario autenticado.

# Método destroy: Aquí es donde se pueden hacer algunos ajustes, ya que el método de eliminación de una inscripción no debería requerir invalidar un token JWT, a menos que estés implementando una funcionalidad específica que requiera terminar la sesión del usuario o similar.

# Sugerencias para mejorar el método destroy:
# Si tu intención es eliminar una inscripción, no necesitas manejar el token JWT de esta manera dentro de este método. El destroy debería simplemente encargarse de eliminar el objeto Enrollment.

# Si quieres agregar funcionalidad para invalidar el token de refresco, eso debería estar en una vista de logout, no en el proceso de eliminación de una inscripción.

# Vista mejorada:

# class EnrollmentViewSet(viewsets.ModelViewSet):
#     queryset = Enrollment.objects.all()  # Obtiene todas las inscripciones
#     serializer_class = EnrollmentSerializer  # Serializador para inscripciones
#     permission_classes = (IsAuthenticated,)  # Solo permite el acceso a usuarios autenticados

#     def perform_create(self, serializer):
#         # Asocia el usuario autenticado a la inscripción
#         serializer.save(user=self.request.user)


#     def destroy(self, request, *args, **kwargs):
#         # No es necesario invalidar el token de refresco aquí
#         # Simplemente eliminamos la inscripción como en cualquier ModelViewSet
#         return super().destroy(request, *args, **kwargs)
class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# En resumen:
# Eliminar lógica del token en destroy: No es necesario invalidar el token en el método destroy del ViewSet de inscripciones. El manejo de tokens, como el refresco o la invalidación, debería estar en las vistas de autenticación (login, logout), no en vistas relacionadas con otras funcionalidades como las inscripciones.

# Seguridad y autenticación: Asegúrate de que cualquier vista protegida esté utilizando la autenticación JWT de manera correcta en las solicitudes. Por ejemplo, las solicitudes a la API deben incluir el encabezado Authorization: Bearer <access_token> para que Django verifique la autenticación.

# ¿Te gustaría implementar algo especial con el manejo de los tokens en otro contexto, o necesitas más ayuda con la lógica de autenticación y autorización?
