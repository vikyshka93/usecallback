var regexp  = new RegExp('{{([^}]+)}}', 'g');
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
var arr2 = arr1.reverse();