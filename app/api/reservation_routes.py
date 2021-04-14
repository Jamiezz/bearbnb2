from flask import Blueprint
from app.models import Reservation
from app.forms import ReservationForm

reservation_routes = Blueprint("reservation", __name__)


@reservation_routes.route("")
def getAllReservations():
    reservations = Reservation.query.all()
    return {"reservations": [reservation.to_dict() for reservation in reservations]}


@reservation_routes.route("")
def createAReservation():
    form = ReservationForm()
    newReservation = Reservation(
        userId = form.data["userId"],
        denId = form.data["denId"],
        startDate = form.data["startDate"],
        endDate = form.data["endDate"]
    )
    db.session.add(newReservation)
    db.session.commit()
    return newReservation.to_dict()
