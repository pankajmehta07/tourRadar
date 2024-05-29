from channels.consumer import SyncConsumer
from channels.exceptions import StopConsumer


class MySyncConsumer(SyncConsumer):
    def websocket_connect(self, event):
        print("websocket connected...", event)
        self.send({"type": "websocket.accept"})

    def websocket_receive(self, event):
        print("Message received...", event)
        self.send(
            {
                "type": "websocket.send",
                "text": "Message received from client : " + event["text"],
            }
        )

    def websocket_disconnect(self, event):
        print("websocket disconnected...", event)
        raise StopConsumer()
