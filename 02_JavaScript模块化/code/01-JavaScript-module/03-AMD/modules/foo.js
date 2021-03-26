// 导入bar模块
define([
  'bar'
], (bar)=> {
  console.log(bar.name);
  console.log(bar.age);
  bar.sayHello('codeTao')
});