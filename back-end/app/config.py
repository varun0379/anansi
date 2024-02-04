import os

class Config:
    # Database connection URI
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:anansianansi@localhost/anansi'
    # Disable Flask-SQLAlchemy event system
    SQLALCHEMY_TRACK_MODIFICATIONS = False
