from flask import Blueprint, jsonify, request

from app.models import den, User, Picture, Review, UserImage, Bookedden, db, densamenitiesjoins, Amenity

from sqlalchemy import func
from app.forms.reservation_form import ReservationForm
import datetime
den_routes = Blueprint('dens', __name__)


@den_routes.route('/<int:id>')
def get_one_den(id):
    den = den.query.get(id)
    pictures = Picture.query.filter_by(den_id=id).all()
    host = User.query.get(den.host_id)
    host_image = UserImage.query.filter_by(user_id=den.host_id).first()
    reviews = Review.query.filter_by(den_id=id).all()
    amenities = Amenity.query.join(densamenitiesjoins).filter(
        (densamenitiesjoins.c.den_id == id) & (densamenitiesjoins.c.amenity_id == Amenity.id)).all()
    total = 0
    for review in reviews:
        total += review.rating
    rating = total / len(reviews)
    denData = {**den.to_dict()}
    denData["amenities"] = [amenity.to_dict() for amenity in amenities]
    denData["pictures"] = [picture.to_dict() for picture in pictures]
    denData["host"] = host.to_dict()
    denData["host_image"] = host_image.to_dict()
    denData["rating"] = "{:.1f}".format(rating)
    denData["reviews_count"] = len(reviews)
    denData["reviews"] = [review.to_dict() for review in reviews]
    for review in denData["reviews"]:
        user = User.query.get(review["user_id"])
        img = UserImage.query.filter_by(user_id=user.id).first()
        review["user"] = user.to_dict()
        review["img"] = img.to_dict()
        # user_image = UserImage.query.filter_by(user_id=user.id)
        # if user_image.to_dict():
        #     review["user_image"] = user_image.to_dict()
        # else:
        #     review["user_image"] = {}
    return denData


@den_routes.route('/<int:id>/pictures')
def get_den_pictures(id):
    pictures = Picture.query.filter_by(den_id=id).all()
    return {"pictures": [picture.to_dict() for picture in pictures]}


@den_routes.route('/search', methods=["POST"])
def get_dens_query():
    search_string = request.data.decode("UTF-8")
    dens = []

    # another to search and make the search case insensitive
    # dens = den.query.filter(func.lower(den.address).contains(func.lower(search_string))).all()
    dens_search_adrress = den.query.filter(
        den.address.ilike(f"%{search_string}%"))
    dens_search_title = den.query.filter(
        den.title.ilike(f"%{search_string}%"))
    dens_search_adrress = [den.to_dict_with_picture()
                            for den in dens_search_adrress]
    dens_search_title = [den.to_dict_with_picture()
                          for den in dens_search_title]
    dens.extend(dens_search_adrress)
    dens.extend(dens_search_title)
    # The for loop below is to remove any duplicate dens for our search functionality
    return_dens = []
    for s in dens:
        if s not in return_dens:
            return_dens.append(s)
    return_obj = {"dens": return_dens}
    return return_obj

# @den_routes.route('/<int:id>/pictures')
# def get_den_pictures(id):
#     pictures = Picture.query.filter_by(den_id=id).all()
#     return {"pictures": [picture.to_dict() for picture in pictures]}


# @den_routes.route('/<int:id>/host')
# def get_host(id):
#     den = den.query.get(id)
#     host = User.query.get(den.host_id)
#     return host.to_dict()

@den_routes.route('/book', methods=['POST'])
def get_booked_den():
    form = BookingForm()
    # print(form.userId)
    # print(form.startDate)
    # print(form.data['userId'])
    # print(form.endDate)
    # print(form.data['endDate'])

    booked_den = Bookedden(
        den_id=form.data['denId'],
        start_date=form.data['startDate'],
        end_date=form.data['endDate'],
        user_id=form.data['userId']
    )
    db.session.add(booked_den)
    db.session.commit()
    return 'test'