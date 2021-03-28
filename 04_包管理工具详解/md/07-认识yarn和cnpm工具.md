# Yarn工具

* 另一个node包管理工具yarn
  * yarn是由Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具
  * yarn 是为了弥补 npm 的一些缺陷而出现的
  * 早期的npm存在很多的缺陷，比如安装依赖速度很慢、版本依赖混乱等等一系列的问题
  * 虽然从npm5版本开始，进行了很多的升级和改进，但是依然很多人喜欢使用yarn
    
    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/301df7398a5c4860a3e93acbca6f2b93~tplv-k3u1fbpfcp-watermark.image)


# cnpm工具

* 由于一些特殊的原因，某些情况下我们没办法很好的从 https://registry.npmjs.org下载下来一些需要的包

* 查看npm镜像
  ``
  npm config get registry
  ``

* 我们可以直接设置npm的镜像
  ``
  npm config set registry https://registry.npm.taobao.org
  ``

* 但是对于大多数人来说（比如我），并不希望将npm镜像修改了
  * 第一，不太希望随意修改npm原本从官方下来包的渠道
  * 第二，担心某天淘宝的镜像挂了或者不维护了，又要改来改去

* 这个时候，我们可以使用cnpm，并且将cnpm设置为淘宝的镜像
  ``
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  ``

  ``
  cnpm config get registry
  ``
