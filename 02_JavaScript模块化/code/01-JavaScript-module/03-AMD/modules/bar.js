define(()=>{
  const name  = 'codeTao';
  const age = 19;
  const sayHello  = (name)=>{
    console.log('你好'+name);
  }
  // 导出
  // return {
  //   name:name,
  //   age:age,
  //   sayHello:sayHello
  // }
  // ES6写法(对象增强写法,本质是语法糖,系统会帮你把后面的东西加上去)
  return {
    name,
    age,
    sayHello
  }
})