class Vector {
  public _x: number;
  public _y: number;
  constructor(_x = 0, _y = 0) {
    this._x = 0;
    this._y = 0;
  }

  public x(): number { return this._x; }
  public y(): number { return this._y; }

  public add(v: Vector): Vector {
    return new Vector(this._x + v.x(), this._y + v.y());
  }

  public sub(v: Vector): Vector {
    return new Vector(this._x - v.x(), this._y - v.y());
  }

  public scale(s: number): Vector {
    return new Vector(this._x * s, this._y * s);
  }

  public distSq(v: Vector): number {
    return Math.pow(this._x - v.x(), 2) + Math.pow(this._y - v.y(), 2);
  }
}

class IntegerVector extends Vector {
  constructor(_x = 0, _y = 0) {
    super(_x | 0, _y | 0);
  }
}
