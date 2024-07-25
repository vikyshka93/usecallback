const maxNumber = arr => Math.max(...arr);
const channel = getChannel(computedAppVersion);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();