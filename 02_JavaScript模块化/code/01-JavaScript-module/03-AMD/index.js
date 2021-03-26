(()=>{
  // 配置
  require.config({
    baseUrl:'',
    // 映射关系(这里的后缀名不能跟,因为它在读取文件的时候会自动添加上后缀名,如果你手动添加了后缀名,系统添加的时候可能会出现错误)
    paths:{
      "bar":'./modules/bar',
      "foo":'./modules/foo'
    }
  })
  // 使用
  require(['foo'],(foo)=>{
  })
})();