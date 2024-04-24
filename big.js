const isEmptyArray = arr => !arr.length;
const merge = Object.assign({}, obj1, obj2);
const getRandomBoolean = () => Math.random() >= 0.5;
const repositoryRootPath = path.resolve(__dirname, '..');
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const merge = [...new Set([...a, ...b])];