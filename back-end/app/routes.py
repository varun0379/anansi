from flask import request, jsonify
from . import app, db
from .models import Story
from sqlalchemy.exc import SQLAlchemyError  
import time

# Define a route to get the current server time
@app.route('/time') 
def get_current_time():
    return {'time': time.time()}

# Define a route to add a new story
@app.route('/api/stories', methods=['POST'])
def add_story():
    # Get JSON data from the request
    data = request.json
    try: 
        # Create a new Story instance with data from the request
        new_story = Story(title=data['title'], author=data['author'], story_body=data['story_body'], tags=data['tags'])
        # Add the new story to the database session
        db.session.add(new_story)
        # Commit the session to save the story to the database
        db.session.commit()
        return jsonify({'message': 'Story added successfully'}), 201
    except SQLAlchemyError as e:
            # Rollback the session in case of error
            db.session.rollback()
            return jsonify({'error': str(e)}), 500

# Define a route to get all stories
@app.route('/api/stories', methods=['GET'])
def get_stories():
    # Query all stories from the database
    stories = Story.query.all()
    output = []
    for story in stories:
        # Format each story as a dictionary and append to the output list
        story_data = {'id': story.id, 'title': story.title, 'author': story.author, 
                      'story_body': story.story_body, 'tags': story.tags}
        output.append(story_data)
    return jsonify({'stories': output}), 200