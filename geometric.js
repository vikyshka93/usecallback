var pattern = {};
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);