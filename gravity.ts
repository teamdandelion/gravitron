interface Mass {
  position: Vector;
  velocity: Vector;
  mass: number;
  isGravitationallyAffected: boolean;
  gravitationallyAffectsOthers: boolean;
  update(acceleration: Vector): Mass;
}

var GRAVITATIONAL_CONSTANT = 1;

class ImmutableMass implements Mass {
  constructor(public position = new ImmutableVector(),
              public velocity = new ImmutableVector(),
              public mass = 1,
              public isGravitationallyAffected = true,
              public gravitationallyAffectsOthers = true) {}

  update(acceleration?: Vector): ImmutableMass {
    var velocity = acceleration ? this.velocity.add(acceleration) : this.velocity;
    var position = this.position.add(velocity);
    return new ImmutableMass(position, velocity, this.mass, this.isGravitationallyAffected, this.gravitationallyAffectsOthers);
  }
}

class MutableMass implements Mass {
  constructor(public position = new MutableVector(),
              public velocity = new MutableVector(),
              public mass = 1,
              public isGravitationallyAffected = true,
              public gravitationallyAffectsOthers = true) {}

  update(acceleration?: Vector): MutableMass {
    if (acceleration) this.velocity.add(acceleration);
    this.position.add(this.velocity);
    return this;
  }
}

function simulate(objects: Mass[]) {
  return objects.map((o) => o.update(computeGravitationalAcceleration(o, objects)))
}

function computeGravitationalVector(to: Mass, from: Mass): Vector {
  if (to === from || !to.isGravitationallyAffected || !from.gravitationallyAffectsOthers) {
    return to.position.clone().scale(0); // returns the right kind of 0 vector
  }
  var distSq = from.position.distSq(to.position);
  var g = from.mass * GRAVITATIONAL_CONSTANT / distSq;
  var acc = from.position.clone().sub(to.position).scale(g)
  return acc;
}

function computeGravitationalAcceleration(target: Mass, others: Mass[]): Vector {
  var accs = others.map((o) => computeGravitationalVector(target, o));
  var init = target.position.clone().scale(0); // zero-vector of right mutability
  var acc = accs.reduce((v1, v2) => v1.add(v2));
  return acc;
}
