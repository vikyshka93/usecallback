console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const stringReverse = str => str.split("").reverse().join("");
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';