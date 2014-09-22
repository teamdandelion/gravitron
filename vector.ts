interface Vector {
  _x: number;
  _y: number;
  x(): number;
  y(): number;
  add(v: Vector): Vector;
  sub(v: Vector): Vector;
  scale(s: number): Vector;
  distSq?(v: Vector): number;
  dist?(v: Vector): number;
  clone(): Vector;
}

class MutableVector implements Vector {
  constructor(public _x = 0, public _y = 0) {}

  public x(): number;
  public x(arg: number): MutableVector;
  public x(arg?: number): any {
    if (arg !== undefined) this._x = arg;
    return (arg !== undefined) ? this : this._x;
  }

  public y(): number;
  public y(arg: number): MutableVector;
  public y(arg?: number): any {
    if (arg !== undefined) this._y = arg;
    return (arg !== undefined) ? this : this._y;
  }

  public add(v: Vector): MutableVector {
    this._x += v.x();
    this._y += v.y();
    return this;
  }

  public sub(v: Vector): MutableVector {
    this._x -= v.x();
    this._y -= v.y();
    return this;
  }

  public scale(s: number): MutableVector {
    this._x *= s;
    this._y *= s;
    return this;
  }

  public distSq(v: Vector): number {
    return Math.pow(this._x - v.x(), 2) + Math.pow(this._y - v.y(), 2);
  }

  public clone(): MutableVector {
    return new MutableVector(this._x, this._y)
  }
}

class ImmutableVector implements Vector {
  constructor(public _x = 0, public _y = 0) {}

  public x(): number { return this._x; }
  public y(): number { return this._y; }

  public add(v: Vector): ImmutableVector {
    return new ImmutableVector(this._x + v.x(), this._y + v.y());
  }

  public sub(v: Vector): ImmutableVector {
    return new ImmutableVector(this._x - v.x(), this._y - v.y());
  }

  public scale(s: number): ImmutableVector {
    return new ImmutableVector(this._x * s, this._y * s);
  }

  public distSq(v: Vector): number {
    return Math.pow(this._x - v.x(), 2) + Math.pow(this._y - v.y(), 2);
  }

  public clone() {
    return this;
  }

}
