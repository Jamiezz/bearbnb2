from .db import db


class Reservation(db.Model):
    __tablename__ = "reservations"


    id = db.Column(db.Integer, primary_key=True, nullable=False)
    denId = db.Column(db.Integer, db.ForeignKey("dens.id"), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    startDate = db.Column(db.DateTime, nullable=False)
    endDate = db.Column(db.DateTime, nullable=False)

    user = db.relationship("User", backref="reservations")
    den = db.relationship("Den", backref="reservations")

    def to_dict(self):
        den = self.den

        return {
            "id": self.id,
            "denTitle": den.title,
            "denDescription": den.description,
            "startDate": self.startDate,
            "endDate": self.endDate,
        }
