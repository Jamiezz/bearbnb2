from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Reservation


class ReservationForm(FlaskForm):
    userId = HiddenField('userId')
    ReservationId = HiddenField('ReservationId')
    startDate = StringField('startDate', validators=[DataRequired()])
    endDate = StringField('endDate', validators=[DataRequired()])