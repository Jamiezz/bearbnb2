from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Den

den_routes = Blueprint("dens", __name__)


#get all den_routes
@den_routes.route('')
def alldens():
    dens = den.query.all()
    return {"dens" : [den.to_dict() for den in dens]}


#get one den
@den_routes.route('/<int:id>')
def getOneden(id):
    den = den.query.get(id)
    reviews = Review.query.filter_by(denId=id).all()
    denData = {**den.to_dict()}
    denData['reviews'] = [review.to_dict() for review in reviews]
    return denData