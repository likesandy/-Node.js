// console.log(name); // 报错

// 这里导入本质上就是bar = exports,因为exports是一个对象, exports = {name, age, msg}
// 所以这里bar = {name, age, msg}
const bar = require('./bar');

// console.log(bar);
// console.log(bar.name);
// console.log(bar.age);
// console.log(bar.msg);

// 所以也可以这样写(这就是ES6的解构赋值)
// const {name,age,msg} = require('./bar');
console.log(bar.name);
// console.log(age);
// console.log(msg);


setTimeout(()=>{
  console.log(bar.name);
},2000);

// 所以Node中实现CommonJS的本质就是对象的引用赋值