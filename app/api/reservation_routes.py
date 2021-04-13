from flask import Blueprint
from app.models import Reservation

reservation_routes = Blueprint("reservation", __name__)


@reservation_routes.route("")
def getAllReservations():
    reservations = Reservation.query.all()
    return {"reservations": [resevation.to_dict() for reservation in reservations]}
