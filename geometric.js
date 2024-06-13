var c = new Counter(); c.add(); c.add(); c.add();
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);