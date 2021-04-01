from .db import db
from sqlalchemy.orm import relationship


class Review(db.Model):

    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    den_id = db.Column(db.Integer, db.ForeignKey('dens.id'), nullable=False)
    user = relationship("User", back_populates='reviews')
    den = relationship("den", back_populates='reviews')

    def to_dict(self):
        return {
            "id": self.id,
            "comment": self.comment,
            "rating": self.rating,
            "user_id": self.user_id,
            "den_id": self.den_id,
            "den": self.den.to_dict_with_picture(),
        }
