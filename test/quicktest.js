
var n = 64000;

console.time("outer");
var x = new Int16Array(n);
for (var i=0; i<n; i++) {
  x[i] = Math.round(Math.random() * 100000);
}
var y = new Int16Array(n);
console.time("inner");
for (var i=0; i<n; i++) {
  y[i] = x[i] + 5;
}
console.timeEnd("inner");
console.timeEnd("outer");


console.time("inner");
for (var i=0; i<n; i++) {
  y[i] = x[i] + 5;
}
console.timeEnd("inner");

console.time("inner");
for (var i=0; i<n; i++) {
  y[i] = x[i] + 5;
}
console.timeEnd("inner");
