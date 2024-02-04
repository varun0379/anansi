import pymysql

def insert_story(title, author, story_body, tags):
    hostname = 'localhost'
    user = 'root'
    password = 'anansianansi'
    database_name = 'anansi'
    
    db = pymysql.connect(host=hostname, user=user, password=password, db=database_name)
    cursor = db.cursor()
    
    query = """
    INSERT INTO stories (title, author, story_body, tags)
    VALUES (%s, %s, %s, %s)
    """
    
    try:
        cursor.execute(query, (title, author, story_body, tags))
        db.commit()
        print(f"{cursor.rowcount} details inserted")
    except pymysql.MySQLError as e:
        print(e)
        db.rollback()
    finally:
        cursor.close()
        db.close()
