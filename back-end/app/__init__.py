from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import Config
from flask_migrate import Migrate


# Initialize the Flask application
app = Flask(__name__)
# Load the configuration from `config.py`
app.config.from_object(Config)

# Initialize SQLAlchemy with the Flask app for ORM functionality
db = SQLAlchemy(app)
# Initialize CORS to allow cross-origin requests
CORS(app)
# Initialize Flask-Migrate for database migrations
migrate = Migrate(app, db)
