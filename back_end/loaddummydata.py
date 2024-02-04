import json
from app.db import insert_story

def load_data(filepath):
    with open(filepath, 'r') as file:
        data = json.load(file)
        for item in data:
            insert_story(
                title=item['title'],
                author=item['author'],
                story_body=item['story_body'],
                tags=item['tags']
            )

if __name__ == '__main__':
    load_data('dummydata.json')
