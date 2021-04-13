from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password')
    mayor1 = User(username='Rahm', email='Rahm@aa.io',
                password='password')
    mayor2 = User(username='Lori', email='Lori@aa.io',
                password='password')
    mayor3 = User(username='Bill', email='Bill@aa.io',
                password='password')

    db.session.add(demo)
    db.session.add(mayor1)
    db.session.add(mayor2)
    db.session.add(mayor3)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
