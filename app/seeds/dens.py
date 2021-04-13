from app.models import db, Den
import random


def seed_dens():

    arcticDen = Den(
      title='Arctic Tundra',
      userId=(random.randrange(1, 4)),
      price=(random.randrange(50, 100)),
      description='snow, ice, seals and penguins a polarbear\'s dream habitat',
    )

    woodlandsDen = Den(
      title='Woodlands',
      userId=(random.randrange(1, 4)),
      price=(random.randrange(50, 100)),
      description="Lots of trees, what else could a bear want?",
    )

    rockyMountainsDen = Den(
      title='Rocky Mountains',
      userId=(random.randrange(1, 4)),
      price=(random.randrange(50, 100)),
      description="lots of big hills basically",
    )

    chicagoBearsDen = Den(
      title="Soldier Field",
      userId=(random.randrange(1, 4)),
      price=1000,
      description="Chicago Bears play here fairly often",
    )

    greenBayDen = Den(
      title="some stadium I guess",
      userId=(random.randrange(1, 4)),
      price=(random.randrange(50, 100)),
      description="some sports team plays here I guess",
    )

    appalachiaDen = Den(
      title="Pittsburgh",
      userId=(random.randrange(1, 4)),
      price=(random.randrange(50, 100)),
      description="Bears show up here on occassion",
    )

    db.session.add(arcticDen)
    db.session.add(woodlandsDen)
    db.session.add(rockyMountainsDen)
    db.session.add(chicagoBearsDen)
    db.session.add(greenBayDen)
    db.session.add(appalachiaDen)


    db.session.commit()


def undo_dens():
    db.session.execute('TRUNCATE dens;')
    db.session.commit()
