const path = require('path');

// 1.获取路径的信息
// const filePath = 'S:\code\Node\path.js';
// console.log(path.dirname(filePath));
// console.log(path.basename(filePath));
// console.log(path.extname(filePath));

// 2.join路径拼接
// const basePath = 'S:/code/Node';
// const fileName = 'path.js';

// const filePath = path.join(basePath,fileName);
// console.log(filePath);

// 3.resolve路径拼接
const basePath = 'S:/code/Node';
const fileName = 'path.js';

const filePath = path.resolve(basePath,fileName);
console.log(filePath);