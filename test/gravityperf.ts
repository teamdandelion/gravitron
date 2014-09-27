
function makeM(x, y, xv, yv, m) {
  return new MutableMass(new MutableVector(x, y), new MutableVector(xv, yv), m);
}

function makeI(x, y, xv, yv, m) {
  return new ImmutableMass(new ImmutableVector(x, y), new ImmutableVector(xv, yv), m);
}

var m = [makeM(0 , 0 , 1  , 1  , 2),
         makeM(1 , 1 , 2  , 0  , 2),
         makeM(0 , 1 , 0  , 0  , 1),
         makeM(50, 50, 2  , 2  , 5),
         makeM(0 , 15, 1  , 1  , 2),
         makeM(0 , 2 , 0.5, 0.5, 5)];

var i = [makeI(0 , 0 , 1  , 1  , 2),
         makeI(1 , 1 , 2  , 0  , 2),
         makeI(0 , 1 , 0  , 0  , 1),
         makeI(50, 50, 2  , 2  , 5),
         makeI(0 , 15, 1  , 1  , 2),
         makeI(0 , 2 , 0.5, 0.5, 5)];

var n = 10000;

console.time("m");
for (var j = 0; j < n; j++) {
  m = simulate(m);
}
console.timeEnd("m");

console.time("i");
for (var j = 0; j < n; j++) {
  i = simulate(i);
}
console.timeEnd("i");
