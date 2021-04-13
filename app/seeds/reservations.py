from app.models import db, Reservation

def seed_reservations():
    reservation1 = Reservation(
        userId=1,
        denId=1,
        startDate=("2/1/21"),
        endDate=("2/7/21")
    )

    reservation2 = Reservation(
        userId=1,
        denId=2,
        startDate=("2/8/21"),
        endDate=("2/9/21")
    )

    reservation3 = Reservation(
        userId=1,
        denId=3,
        startDate=("2/10/21"),
        endDate=("2/11/21")
    )

    reservation4 = Reservation(
        userId=1,
        denId=4,
        startDate=("2/12/21"),
        endDate=("2/13/21")
    )


    db.session.add(reservation1)
    db.session.add(reservation2)
    db.session.add(reservation3)
    db.session.add(reservation4)

    db.session.commit()



def undo_reservations():
    db.session.execute("TRUNCATE reservation;")
    db.session.commit()