
function makeAttractor(x, y, m) {
  return {position: new IntegerVector(x, y), mass: m};
}

var a1 = makeAttractor(0, 0, 1);
var a2 = makeAttractor(50, 200, 5);
var a3 = makeAttractor(20, 150, 2);
var a4 = makeAttractor(5050, 2012, 1);

function makeField(prev, attractor, name) {
  console.time(name);
  var newField = prev.addAttractor(attractor);
  console.timeEnd(name);
  return newField;
}


var f1 = makeField(initialField, a1, "1");
var f2 = makeField(f1, a2, "2");
var f3 = makeField(f2, a3, "3");
var f4 = makeField(f3, a4, "4");
