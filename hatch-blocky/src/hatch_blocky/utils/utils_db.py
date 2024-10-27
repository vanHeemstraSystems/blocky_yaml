from app.extensions import db

def init_db():
    print("Initializing database")
    db.create_all()