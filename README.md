虽然这个框架才开发了一点点，但是不妨碍我将其放到npm上，链接在这->[crazymad-ui](https://www.npmjs.com/package/crazymad-ui)。

这个框架是在vue的基础上写的，所以说是一个vue的ui框架，安装使用的方法我参照了element-ui，执行完```npm install --save-dev crazymad-ui```命令后，在vue的main.js文件里面加载组件及样式文件。
```
import Vue from 'vue'
import App from './App'
import router from './router'
import CrazymadUI from 'crazymad-ui'

import '../node_modules/crazymad-ui/src/ui/theme/style.scss'

Vue.config.productionTip = false

Vue.use(CrazymadUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```
然后就像使用element-ui那样使用crazymad-ui，下面写个样例：
```
<template>
  <div id="app">
    <cm-button>测试</cm-button>
    <cm-icon class="cm-icon-write"></cm-icon>
    <cm-nav space="20" :list="list" default="index" :slide="true"></cm-nav>
    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      list: [{
        lable: '首页',
        value: 'index'
      }, {
        lable: '列表',
        value: 'list'
      }]
    }
  }
}
</script>

<style>
#app {
  padding: 10px;
}
</style>
```

上面这个样例引入了导航栏组件。更多组件的使用方法可以进入[crazymad-ui](http://ui.crazymad.top)查阅。
