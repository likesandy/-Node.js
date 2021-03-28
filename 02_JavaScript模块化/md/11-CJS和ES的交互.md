# CommonJS和ES Module交互

- 结论一：通常情况下，CommonJS不能加载ES Module
  + 因为CommonJS是同步加载的，但是ES Module必须经过静态分析等，无法在这个时候执行JavaScript代码
  + 但是这个并非绝对的，某些平台在实现的时候可以对代码进行针对性的解析，也可能会支持
  + Node当中是不支持的

- 结论二：多数情况下，ES Module可以加载CommonJS
  + ES Module在加载CommonJS时，会将其module.exports导出的内容作为default导出方式来使用