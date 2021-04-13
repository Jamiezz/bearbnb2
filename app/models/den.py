from .db import db
# from sqlalchemy.orm import relationship


class Den(db.Model):
    __tablename__ = 'dens'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(255), nullable=False, unique=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Numeric, nullable=False)
    user = db.relationship('User', backref='dens')

    # def to_dict(self):
    #     return {
    #         "id": self.id,
    #         "title": self.title,
    #         "userId": self.userId,
    #         "description": self.description,
    #         "price": float(self.price),
    #     }
