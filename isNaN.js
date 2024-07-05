const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const apmRootPath = path.join(repositoryRootPath, 'apm');
console.log("1 && 2 = "+(1 && 2));