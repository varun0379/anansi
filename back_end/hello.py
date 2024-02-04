from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import speech_recog
from db1 import insert_story


app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/stories', methods=['POST'])
def add_story():
    data = request.json
    insert_story(data['title'], data['author'], data['story_body'], data['tags'])
    return jsonify({'message': 'Story added successfully'})