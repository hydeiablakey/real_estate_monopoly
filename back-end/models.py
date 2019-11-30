
from server import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship



class Users(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String())
    email = db.Column(db.String())
    password = db.Column(db.String())

    def __init__(self, user_name, email, password):
        self.user_name = user_name
        self.email = email
        self.password = password

    def __repr__(self):
        return '<id {}>'.format(self.id)
    
    def serialize(self):
        return {
            'id': self.id, 
            'user_name': self.user_name,
            'email': self.email,
            'password':self.password
        }

'''
class Properties(db.Model):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    author = db.Column(db.String())
    published = db.Column(db.String())

    def __init__(self, name, author, published):
        self.name = name
        self.author = author
        self.published = published

    def __repr__(self):
        return '<id {}>'.format(self.id)
    
    def serialize(self):
        return {
            'id': self.id, 
            'name': self.name,
            'author': self.author,
            'published':self.published
        }
'''

class Games(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    started = db.Column(db.Boolean, default=False)

    def __init__(self, started):
        self.started = started

    def __repr__(self):
        return '<id {}>'.format(self.id)
    
    def serialize(self):
        return {
            'id': self.id, 
            'started': self.started
        }


class Players(db.Model):
    __tablename__ = 'players'

    user_id = db.Column(db.Integer, ForeignKey(Users.id), primary_key=True) 
    game_id = db.Column(db.Integer, ForeignKey(Games.id), primary_key=True)  

    money = db.Column(db.Integer)
    location = db.Column(db.String())
    in_lobby = db.Column(db.Boolean, default=False)
    is_playing = db.Column(db.Boolean, default=False)

    users = relationship('Users', foreign_keys='Players.user_id')
    games = relationship('Games', foreign_keys='Players.game_id')
   

    def __init__(self, in_lobby, is_playing, money, location):
        self.in_lobby = in_lobby
        self.is_playing = is_playing
        self.money = money
        self.location = location

    def __repr__(self):
        return '<id {}>'.format(self.id)
    
    def serialize(self):
        return {
            'user_id': self.user_id, 
            'game_id': self.game_id,
            'money': self.money,
            'location':self.location,
            'in_lobby': self.in_lobby,
            'is_playing': self.is_playing
        }
