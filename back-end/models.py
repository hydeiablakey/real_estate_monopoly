
from server import db
from sqlalchemy import ForeignKey, UniqueConstraint
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
            'password': self.password
        }


class Games(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    started = db.Column(db.Boolean, default=False)  # new

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
    game_id = db.Column(db.Integer, ForeignKey(Games.id))

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
            'player_id':self.player_id,
            'game_id': self.game_id,
            'money': self.money,
            'location': self.location,
            'in_lobby': self.in_lobby,
            'is_playing': self.is_playing
        }


class Properties(db.Model):
    __tablename__ = 'properties'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    address = db.Column(db.String())
    p_type = db.Column(db.String())  # new
    is_mortgaged = db.Column(db.Boolean, default=False)
    mortgage_price = db.Column(db.Integer, default=0)
    price = db.Column(db.Integer, default=0)
    rent_price = db.Column(db.Integer, default=0)
    upgrade_price = db.Column(db.Integer, default=0)
    level = db.Column(db.Integer, default=0)  # new

    owner_id = db.Column(db.Integer, ForeignKey(Players.user_id))
    game_id = db.Column(db.Integer, ForeignKey(Games.id))

    players = relationship('Players', foreign_keys='Properties.owner_id')
    games = relationship('Games', foreign_keys='Properties.game_id')

    def __init__(self, name, address, p_type, is_mortgaged, mortgage_price, price, rent_price, upgrade_price, level):
        self.name = name
        self.address = address
        self.p_type = p_type
        self.is_mortgaged = is_mortgaged
        self.mortgage_price = mortgage_price
        self.price = price
        self.rent_price = rent_price
        self.upgrade_price = upgrade_price
        self.level = level

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'name': self.name,
            'address': self.address,
            'p_type': self.p_type,
            'is_mortgaged': self.is_mortgaged,
            'mortgage_price': self.mortgage_price,
            'price': self.price,
            'rent_price': self.rent_price,
            'upgrade_price': self.upgrade_price,
            'level': self.level,
            'owner_id': self.owner_id,
            'game_id': self.game_id
        }
