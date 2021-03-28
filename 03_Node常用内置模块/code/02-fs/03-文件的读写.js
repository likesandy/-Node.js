const fs = require('fs');

// 1.文件写入
// const name = 'codeTao';

// fs.writeFile('./abc.txt',name,{flag:'a'},(err)=>{
  // console.log(err);
// })

// 2.文件读取
fs.readFile('./abc.txt',{encoding:'utf8'},(err,data)=>{
  console.log(data);
})