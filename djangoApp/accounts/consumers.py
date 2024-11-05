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
