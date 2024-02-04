# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# from flask_cors import CORS
# from config import Config
# from flask_migrate import Migrate


# # Initialize the Flask application
# app = Flask(__name__)
# # Load the configuration from `config.py`
# app.config.from_object(Config)

# # Initialize SQLAlchemy with the Flask app for ORM functionality
# db = SQLAlchemy(app)
# # Initialize CORS to allow cross-origin requests
# CORS(app)
# # Initialize Flask-Migrate for database migrations
# migrate = Migrate(app, db)

import time
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import Config
from flask_migrate import Migrate
from application1 import app
from anansi.back_end.application1.db1 import insert_story  # Adjust the import path as necessary
import speech_recog


# Initialize the Flask application
##app = Flask(__name__)
# Load the configuration from `config.py`
app.config.from_object(Config)

# Initialize SQLAlchemy with the Flask app for ORM functionality
database1 = SQLAlchemy(app)
# Initialize CORS to allow cross-origin requests
CORS(app)
# Initialize Flask-Migrate for database migrations
migrate = Migrate(app, database1)


# input_lang = ""

# Define a route to get the current server time
@app.route('/time/') 
def get_current_time():
    return "hello world"

# story_body_gpt = speech_recog.rec_story(input_lang)


# # Define a route to add a new story
# @app.route('/api/stories', methods=['POST'])
# def add_story():
#     # Get JSON data from the request
#     data = request.json
#     try: 
#         # Create a new Story instance with data from the request
#         new_story = Story(title=data['title'], author=data['author'], story_body=story_body_gpt, tags=data['tags'])
#         # Add the new story to the database session
#         db.session.add(new_story)
#         # Commit the session to save the story to the database
#         db.session.commit()
#         return jsonify({'message': 'Story added successfully'}), 201
#     except SQLAlchemyError as e:
#             # Rollback the session in case of error
#             db.session.rollback()
#             return jsonify({'error': str(e)}), 500

# # Define a route to get all stories
# @app.route('/api/stories', methods=['GET'])
# def get_stories():
#     # Query all stories from the database
#     stories = Story.query.all()
#     output = []
#     for story in stories:
#         # Format each story as a dictionary and append to the output list
#         story_data = {'id': story.id, 'title': story.title, 'author': story.author, 
#                       'story_body': story.story_body, 'tags': story.tags}
#         output.append(story_data)
#     return jsonify({'stories': output}), 200




# input_lang = ""

# story_body_gpt = speech_recog.rec_story(input_lang)



@app.route('/api/stories', methods=['POST'])
def add_story():
    data = request.json
    insert_story(data['title'], data['author'], data['story_body'], data['tags'])
    return jsonify({'message': 'Story added successfully'})

# from app import app

if __name__ == '__main__':
    # Run the Flask application with debug mode enabled
    app.run(port=5500, debug=True)