import pymysql

# Define the Story model mapping to the 'story' table
class Story(db.Model):
    # Define the primary key column
    id = db.Column(db.Integer, primary_key=True)
    # Define the title column
    title = db.Column(db.String(255), nullable=False)
    # Define the author column
    author = db.Column(db.String(255), nullable=False)
    # Define the story body column
    story_body = db.Column(db.Text, nullable=True)
    # Define the tags column
    tags = db.Column(db.String(255), nullable=True)

    def __repr__(self):
        # Representation method for debugging
        return '<Story %r>' % self.title