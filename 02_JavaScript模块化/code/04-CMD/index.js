define((require,exports,module)=>{
  // 导入
  const foo = require('./modules/foo');

  console.log(foo.name);
  console.log(foo.age);
  foo.sayHello('codeTao');
})