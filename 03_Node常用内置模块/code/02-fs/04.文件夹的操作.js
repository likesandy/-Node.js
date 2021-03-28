const fs = require('fs');
const path = require('path');

// 1.创建文件夹
const dirName = './codeTao';
// if(!fs.existsSync(dirName)){
//   fs.mkdir(dirName,(err)=>{
//     console.log(err);
//   })
// }

// 2.读取文件夹的所有文件
// fs.readdir('./codeTao',(err,files)=>{
//   console.log(files);
// })

// const getFiles = (dirName) => {
//   fs.readdir(dirName,{withFileTypes:true},(err,files)=>{
//     for(let file of files){
//       if(file.isDirectory()){
//         const filePath = path.resolve(dirName,file.name);
//         getFiles(filePath);
//       }else {
//         console.log(file.name);
//       } 
//     }
//   })
// }
// getFiles(dirName);
// 3.文件夹的重命名
fs.rename('./codeTao','./name',(err) => {
  console.log(err);
})