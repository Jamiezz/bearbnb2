from app.models import db, Den
import random


def seed_dens():

    ArcticDen = Den(
      title='Arctic Tundra',
      userId=(random.randrange(1, 4)),
      price=(random.randrange(50, 100)),
      description='snow, ice, seals and penguins a polarbear\'s dream habitat',
    )

    WoodlandsDen = Den(
      title='Woodlands',
      userId=(random.randrange(1, 4)),
      price=(random.randrange(50, 100)),
      description="Lots of trees, what else could a bear want?",
    )

    RockyMountainsDen = Den(
      title='Rocky Mountains',
      userId=(random.randrange(1, 4)),
      price=(random.randrange(50, 100)),
      description="lots of big hills basically",
    )

    ChicagoBearsDen = Den(
      title="Soldier Field",
      userId=(random.randrange(1, 4)),
      price=1000,
      description="Chicago Bears play here fairly often",
    )

    GreenBayDen = Den(
      title="some stadium I guess",
      userId=(random.randrange(1, 4)),
      price=(random.randrange(50, 100)),
      description="some sports team plays here I guess",
    )

    AppalachiaDen = Den(
      title="Pittsburgh",
      userId=(random.randrange(1, 4)),
      price=(random.randrange(50, 100)),
      description="Bears show up here on occassion",
    )


db.session.add(ArcticDen)
db.session.add(WoodlandsDen)
db.session.add(RockyMountainsDen)
db.session.add(ChicagoBearsDen)
db.session.add(GreenBayDen)
db.session.add(AppalachiaDen)


db.session.commit()


def undo_dens():
    db.session.execute('TRUNCATE dens;')
    db.session.commit()
