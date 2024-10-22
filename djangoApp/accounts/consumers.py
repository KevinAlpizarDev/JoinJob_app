# # consumers.py
# import json

# from channels.generic.websocket import AsyncWebsocketConsumer


# class YourConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         self.group_name = (
#             "realtime_updates"  # Nombre del grupo para actualizaciones en tiempo real
#         )
#         await self.channel_layer.group_add(self.group_name, self.channel_name)
#         await self.accept()

#     async def disconnect(self, close_code):
#         await self.channel_layer.group_discard(self.group_name, self.channel_name)

#     async def receive(self, text_data):
#         text_data_json = json.loads(text_data)
#         message = text_data_json["message"]

#         # Envía el mensaje al grupo (broadcast)
#         await self.channel_layer.group_send(
#             self.group_name,
#             {
#                 "type": "chat_message",
#                 "message": message,
#             },
#         )

#     async def chat_message(self, event):
#         message = event["message"]

#         # Envía el mensaje de vuelta al WebSocket
#         await self.send(
#             text_data=json.dumps(
#                 {
#                     "message": message,
#                 }
#             )
#         )
# accounts/consumers.py

# import json

# from channels.generic.websocket import AsyncWebsocketConsumer


# class YourConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         self.group_name = (
#             "realtime_updates"  # Nombre del grupo para actualizaciones en tiempo real
#         )
#         await self.channel_layer.group_add(self.group_name, self.channel_name)
#         await self.accept()

#     async def disconnect(self, close_code):
#         await self.channel_layer.group_discard(self.group_name, self.channel_name)

#     async def receive(self, text_data):
#         text_data_json = json.loads(text_data)
#         message = text_data_json["message"]

#         # Envía el mensaje al grupo (broadcast)
#         await self.channel_layer.group_send(
#             self.group_name,
#             {
#                 "type": "chat_message",
#                 "message": message,
#             },
#         )

#     async def chat_message(self, event):
#         message = event["message"]

#         # Envía el mensaje de vuelta al WebSocket
#         await self.send(
#             text_data=json.dumps(
#                 {
#                     "message": message,
#                 }
#             )
#         )
# consumers.py


# import json

# from channels.generic.websocket import AsyncWebsocketConsumer


# class CourseConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         await self.channel_layer.group_add("realtime_updates", self.channel_name)
#         await self.accept()

#     async def disconnect(self, close_code):
#         await self.channel_layer.group_discard("realtime_updates", self.channel_name)

#     async def course_update(self, event):
#         message = event["message"]
#         await self.send(text_data=json.dumps(message))


# REDIS
import json

from channels.generic.websocket import AsyncWebsocketConsumer


class CourseConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("realtime_updates", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("realtime_updates", self.channel_name)

    async def course_update(self, event):
        message = event["message"]
        await self.send(text_data=json.dumps(message))
