const fs = require('fs');

// 读取文件信息
const filePath = './abc.txt';

// 方式一:同步操作
// const info = fs.statSync(filePath);
// console.log('后续执行的代码');
// console.log(info); 

// 方式二:异步操作
// fs.stat(filePath,(err, info) => {
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(info);
// })
// console.log('后续执行的代码');

// 方式三: Promise
fs.promises.stat(filePath)
.then((info) => {
  console.log(info);
})
.catch((err) => {
  console.log(err);
})
console.log('后续执行的代码');
