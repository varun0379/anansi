import pymysql

hostname = 'localhost'
user = 'root'
password = 'anansianansi'

db = pymysql.connections.Connection(
    host = hostname, 
    user = user, 
    password = password
)

cursor = db.cursor()

cursor.execute("USE anansi;")

# # Executing SQL query
# cursor.execute("CREATE DATABASE IF NOT EXISTS books_db")
# cursor.execute("SHOW DATABASES")

title = 'hello'
author = 'hyebin'
story_body_en = 'dkssudgktpdy'
tags = 'korean,hyebin'
story_body_og =''

query = """
INSERT INTO stories (title, author, story_body_en, tags, story_body_og)
VALUES (%s, %s, %s, %s, %s)
"""

cursor.execute(query, (title, author, story_body_en, tags, story_body_og))

db.commit()

print(f"{cursor.rowcount} details inserted") 

for databases in cursor:
    print(databases)


cursor.close()
db.close()