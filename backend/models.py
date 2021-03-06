import os
from sqlalchemy import Column, String, Integer, create_engine
from flask_sqlalchemy import SQLAlchemy
import json
from flask_migrate import Migrate
database_name = "dermai"
database_password = os.environ['DATABASE_PASSWORD']
database_path = "postgresql://{}:{}@{}/{}".format('postgres',database_password,'localhost:5432', database_name)

db = SQLAlchemy()

'''
setup_db(app)
    binds a flask application and a SQLAlchemy service
'''
def setup_db(app, database_path=database_path):
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()
    migrate = Migrate(app,db)

'''
User

'''
class User(db.Model):  
  __tablename__ = 'users'

  id = Column(Integer, primary_key=True)
  fullname = Column(String)  
  email = Column(String)
  password = Column(String)

  def __init__(self, fullname, email, password):    
    self.fullname = fullname
    self.email = email
    self.password = password

  def insert(self):
    db.session.add(self)
    db.session.commit()
  
  def update(self):
    db.session.commit()
  
  def finalize(self):
    db.session.close()

  def delete(self):
    db.session.delete(self)
    db.session.commit()  

  def format(self):
    return {
      'id': self.id,
      'fullname': self.fullname,      
      'email': self.email,
      'password': self.password
    }

'''
Category

'''
# class Category(db.Model):  
#   __tablename__ = 'categories'

#   id = Column(Integer, primary_key=True)
#   type = Column(String)

#   def __init__(self, type):
#     self.type = type

#   def format(self):
#     return {
#       'id': self.id,
#       'type': self.type
#     }