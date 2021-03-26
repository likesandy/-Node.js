define((require,exports,module)=>{
  const name  = 'codeTao';
  const age = 19;
  const sayHello = (name)=>{
    console.log('你好'+name);
  };
  // 导出
  module.exports = {
    name,
    age,
    sayHello
  }
})