"""
ASGI config for djangoApp project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/asgi/
"""

# asgi.py
# import os

# from channels.auth import AuthMiddlewareStack
# from channels.routing import ProtocolTypeRouter, URLRouter
# from django.core.asgi import get_asgi_application

# from .urls import websocket_urlpatterns  # Aquí aseguramos la correcta importación

# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "django_project.settings")

# application = ProtocolTypeRouter(
#     {
#         "http": get_asgi_application(),
#         "websocket": AuthMiddlewareStack(URLRouter(websocket_urlpatterns)),
#     }
# )
# asgi.py
# import os

# from channels.auth import AuthMiddlewareStack
# from channels.routing import ProtocolTypeRouter, URLRouter
# from django.core.asgi import get_asgi_application

# from .urls import websocket_urlpatterns  # Importamos las rutas WebSocket

# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "django_project.settings")

# application = ProtocolTypeRouter(
#     {
#         "http": get_asgi_application(),
#         "websocket": AuthMiddlewareStack(
#             URLRouter(websocket_urlpatterns)  # Agregamos el enrutamiento de WebSocket
#         ),
#     }
# )
# asgi.py
# import os

# from accounts.urls import websocket_urlpatterns  # Importamos las rutas WebSocket
# from channels.auth import AuthMiddlewareStack
# from channels.routing import ProtocolTypeRouter, URLRouter
# from django.core.asgi import get_asgi_application

# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "django_project.settings")

# application = ProtocolTypeRouter(
#     {
#         "http": get_asgi_application(),
#         "websocket": AuthMiddlewareStack(
#             URLRouter(websocket_urlpatterns)  # Agregamos el enrutamiento de WebSocket
#         ),
#     }
# )

# Redis
import os

from accounts.consumers import (
    CourseConsumer,  # Asegúrate de que el nombre de la app sea correcto
)
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
from django.urls import path

os.environ.setdefault(
    "DJANGO_SETTINGS_MODULE", "djangoapp.settings"
)  # Ajusta según tu configuración

application = ProtocolTypeRouter(
    {
        "http": get_asgi_application(),
        "websocket": AuthMiddlewareStack(
            URLRouter(
                [
                    path(
                        "ws/some_path/", CourseConsumer.as_asgi()
                    ),  # Define tu ruta WebSocket
                ]
            )
        ),
    }
)
