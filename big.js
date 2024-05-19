const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const result = await makeHttpRequest(url);
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);