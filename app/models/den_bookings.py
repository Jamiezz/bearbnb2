from .db import db
from sqlalchemy.orm import relationship


class Booking(db.Model):
  __tablename__ ='bookings'

  id = db.Column(db.Integer, primary_key=True, nullable=False)
  title = db.Column(db.String(250), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  price = db.Column(db.Numeric, nullable=False)
  description = db.Column(db.Text, nullable=False)

  def to_dict(self):
    state = self.state.stateName
    userFullName = self.user.fullName
    capital = self.state.capital
    reviews = self.reviews

    return {
      'id': self.id,
      'title': self.title,
      'userId': userFullName,
      'price': float(self.price),
      'description': self.description,
}
