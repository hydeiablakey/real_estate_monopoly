import os
from flask import Flask, jsonify
from flask_socketio import SocketIO, send, emit
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

# Database config
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from models import *

#-----------------------------------------------------


socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('message')
def handle_message(message):
    print('received message: ' + message)
    #Send this message to everyone connected to the server
    send("server-recieve: " + message, broadcast=True)


@socketio.on('login')
def handle_login(userInfo):
    try:
       user_name = userInfo['user_name']
       password = userInfo['password']
       
       users =  db.session.query(Users).filter(Users.user_name == user_name, Users.password == password )
       
       if users.count() > 0 :
           user = users[0].serialize()
           del user['password']
           emit('loginResponse', {'status': 200, 'user': user})
       else:
           emit('loginResponse', {'status': 400})  

    except Exception as e:
        print(e)
        emit('loginResponse', {'status': 500})

@socketio.on('register')
def handle_register(userInfo):
    try:
       user_name = userInfo['user_name']
       email = userInfo['email']
       password = userInfo['password']

       users =  db.session.query(Users).filter(Users.user_name == user_name)

       if users.count() == 0:
           newUser = Users(user_name,email,password)
           db.session.add(newUser)
           db.session.commit()
           emit('registerResponse',{'status': 200})
       else:
           emit('registerResponse', {'status': 409, 'message':'username already exists'})

    except Exception as e:
        emit('registerResponse', {'status': 500})
   


if __name__ == '__main__':
    socketio.run(app)