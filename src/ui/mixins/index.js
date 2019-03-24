/**
 * @Author: crazy_mad
 * @Date: 2019/3/23 23:23
 * @Description:
 */
import Vue from 'vue'
import CmMessage from '../message/src/CmMessage'

const Message = Vue.extend(CmMessage)

const mixin = {
  methods: {
    $message: (conf) => {
      let msg = new Message({
        data: conf
      })
      msg.vm = msg.$mount()
      // msg.vm.visible = true
      msg.dom = msg.vm.$el
      document.body.appendChild(msg.vm.$el)

      return msg.vm
    },
    $messageInfo (message) {
      this.$message({
        message,
        type: 'info'
      })
    },
    $messageSuccess (message) {
      this.$message({
        message,
        type: 'success'
      })
    },
    $messageWarning (message) {
      this.$message({
        message,
        type: 'warning'
      })
    },
    $messageError (message) {
      this.$message({
        message,
        type: 'error'
      })
    }
  }
}

export default () => {
  Vue.mixin(mixin)
}
