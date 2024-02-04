import pymysql

def insert_story(data, story_body):
    hostname = 'localhost'
    user = 'root'
    password = 'varun0379'
    database_name = 'anansi'
    
    db = pymysql.connect(host=hostname, user=user, password=password, db=database_name)
    cursor = db.cursor()
    
    query = """
    INSERT INTO stories (title, author, story_body, tags)
    VALUES (%s, %s, %s, %s)
    """
    
    try:
        cursor.execute(query, (data["title"], data["author"], story_body, data["tags"]))
        db.commit()
        print(f"{cursor.rowcount} details inserted")
    except pymysql.MySQLError as e:
        print(e)
        db.rollback()
    finally:
        cursor.close()
        db.close()
