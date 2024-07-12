var pattern = {};
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;