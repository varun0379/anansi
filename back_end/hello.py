from flask import Flask, request, jsonify
from flask_cors import CORS
from db1 import insert_story
# from models import Story
import pymysql


app = Flask(__name__)
CORS(app, origins="*")

@app.route('/')
def hello_world():
    return 'Hello, World!'

<<<<<<< Updated upstream
@app.route('/api/stories', methods=['POST'])
def add_story():
    data = request.json
    #insert_story(data['title'], data['author'], data['story_body'], data['tags'])
    print(data)
    return jsonify({'message': 'Story added successfully'})
=======
@app.route('/api/stories', methods=['POST', 'GET'])
def response():
    if request.method == 'POST':
        data = request.get_json()
        story_body = speech_recog.rec_story(data["language"]["code"])
        insert_story(data['title'], data['author'], story_body, data['tags'])
        print(data)
        print(story_body)
        return jsonify({'message': 'Story added successfully'})
    elif request.method == 'GET':
        # Query all stories from the database
        # hostname = 'localhost'
        # user = 'root'
        # password = 'varun0379'
        # database_name = 'anansi'
        
        # db = pymysql.connect(host=hostname, user=user, password=password, db=database_name)
        # stories = db.query.all()
        try:
            cur = pymysql.cursor()
            cur.execute('SELECT * FROM stories')
            data = cur.fetchall()
            # print(data)
            cur.close()
            stories=[{'id': item[0], 'title': item[1], 'author': item[2], 'time_published': item[3], 'story_body': item[4], 'tags': item[5]} for item in data]
            output = []
            for story in stories:
                # Format each story as a dictionary and append to the output list
                story_data = {'id': story.id, 'title': story.title, 'author': story.author, 
                            'story_body': story.story_body, 'tags': story.tags}
                output.append(story_data)
            return jsonify({'stories': output}, status=200, mimetype='application/json')
        except Exception as e:
            response = {
                'error': False,
                'message': f'Error Occurred: {e}',
                'data': None
            }
            return response
        
    else:
        return "{'success': false}"

# Define a route to get all stories
# @app.route('/api/stories', methods=['GET'])
# def get_stories():
    
>>>>>>> Stashed changes
