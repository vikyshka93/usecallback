var regexp  = new RegExp('{{([^}]+)}}', 'g');
const flattenedArray = arr => [].concat(...arr);
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;