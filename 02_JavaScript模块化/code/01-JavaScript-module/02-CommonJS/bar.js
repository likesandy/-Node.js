// 一个文件就是一个模块
const name  = 'codeTao';
const age = 19;

let msg = 'my name is codeTao';

function sayHello(name){
  console.log('Hello' + name);
}
// exports是一个对象, .什么就表示给exports添加什么属性,添加的值就是你后面给的值
exports.name = name;
exports.age = age;
exports.msg = msg;

setTimeout(()=>{
  exports.name = 'gt';
},1000);