from app.models import db, Booking, Amenity
import random


def seed_bookings():

  ArcticBooking = Booking(
    title='Arctic Tundra',
    userId=(random.randrange(1,3)),
    price=(random.randrange(50,100)),
    description='snow, ice, seals and penguins a polarbear\'s dream habitat',
  )

  WoodlandsBooking = Booking(
    title= 'Woodlands',
    userId=(random.randrange(1,3)),
    price=(random.randrange(50,100)),
    description="Lots of trees, what else could a bear want?",
  )

  RockyMountainsBooking = Booking(
    title= 'Rocky Mountains',
    userId=(random.randrange(1,3)),
    price=(random.randrange(50,100)),
    description="lots of big hills basically",
  )

  ChicagoBearsBooking = Booking(
    title= "Soldier Field",
    userId=(random.randrange(1,3)),
    price=100,
    description="Chicago Bears play here fairly often",
  )

  GreenBayBooking = Booking(
    title="some stadium I guess",
    userId=(random.randrange(1,3)),
    price=(random.randrange(50,100)),
    description="some sports team plays here I guess",
  )

  AppalachiaBooking = Booking(
    title="Pittsburgh",
    userId=(random.randrange(1,3)),
    price=(random.randrange(50,100)),
    description="Bears show up here on occassion",
  )


db.session.add(ArcticBooking)
db.session.add(WoodlandsBooking)
db.session.add(RockyMountainsBooking)
db.session.add(ChicagoBearsBooking)
db.session.add(GreenBayBooking)
db.session.add(AppalachiaBooking)


db.session.commit()
