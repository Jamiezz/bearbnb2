from .db import db
from .densamenitiesjoins import densamenitiesjoins
from sqlalchemy.orm import relationship


class den(db.Model):
    __tablename__ = 'dens'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(255), nullable=False, unique=True)
    description = db.Column(db.Text)
    price = db.Column(db.Numeric, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "price": float(self.price),
        }

    def to_dict_with_bookings(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "bookings": [booking.to_dict() for booking in self.bookeddens],
        }
