// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import CrazymadUI from './ui/index.js'
import './ui/theme/style.scss'

// import CmMessage from './ui/message/src/CmMessage'
import mixin from './ui/mixins/index'

Vue.config.productionTip = false
Vue.use(CrazymadUI)
mixin()

// let Message = Vue.extend(CmMessage)
// let msg = new Message({
//   data: {
//     message: 'hello world'
//   }
// })
// msg.vm = msg.$mount()
// msg.vm.visible = true
// msg.dom = msg.vm.$el
// document.body.appendChild(msg.vm.$el)

// const mixin = {
//   methods: {
//     $message: Message
//   }
// }
//
// Vue.mixin(mixin)

// var Message =

// Vue.$message = Vue.extend(CmMessage)
// console.log(Message)
// console.log(Vue.$message)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/*
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  created: function () {
    console.log('created')
  },
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
let list = []
let dom = new Profile()
dom.vm = dom.$mount()
dom.vm.visible = true
dom.dom = dom.vm.$el
console.log(dom.dom)
console.log(dom)
document.body.appendChild(dom.vm.$el)
list.push(dom)
setTimeout(() => {
  console.log('delete dom')
  list.splice(0, 1)
}, 1000)
*/
