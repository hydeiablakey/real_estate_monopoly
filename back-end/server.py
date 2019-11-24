import os
from flask import Flask
from flask_socketio import SocketIO, send
from flask_sqlalchemy import SQLAlchemy
from models import Book


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

# Database config
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
#-----------------------------------------------------



socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('message')
def handle_message(message):
    print('received message: ' + message)
    #Send this message to everyone connected to the server
    send("server-recieve: "+message, broadcast=True)

if __name__ == '__main__':
    socketio.run(app)