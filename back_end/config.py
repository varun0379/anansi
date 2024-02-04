import os

class Config:
    # Database connection URI
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:varun0379@localhost/anansi'
    # Disable Flask-SQLAlchemy event system
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
