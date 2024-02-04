from flask import Flask, request, jsonify
from flask_cors import CORS
from db1 import insert_story


app = Flask(__name__)
CORS(app, origins="*")

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/stories', methods=['POST'])
def add_story():
    data = request.json
    #insert_story(data['title'], data['author'], data['story_body'], data['tags'])
    print(data)
    return jsonify({'message': 'Story added successfully'})