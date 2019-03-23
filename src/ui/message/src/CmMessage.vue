<template>
  <transition name="fade" @after-leave="handleClose">
    <div class="cm-message" v-show="visible">
      <div class="cm-message-bg"
            :class="[ `cm-message-bg--${type}` ]"></div>
      <div class="cm-message-content">
        {{ message }}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CmMessage',
  data () {
    return {
      visible: false,
      options: {},
      delay: 1500,
      message: '',
      close: false,
      type: 'info'
    }
  },
  mounted () {
    // console.log('created')
    this.$nextTick(() => {
      this.visible = true
    })
    setTimeout(() => {
      this.close = true
    }, this.delay)
  },
  watch: {
    close (val) {
      console.log(val)
      this.visible = !val
    }
  },
  methods: {
    handleClose () {
      // console.log('delete')
      this.$el.parentNode.removeChild(this.$el)
      this.$destroy(true)
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  margin-top: -20px;
}
.cm-message {
  display: inline-block;
  position: fixed;
  padding: 10px 25px;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  /*background-color: black;*/
  .cm-message-content {
    position: relative;
    width: 100%;
    height: 100%;
    color: white;
    text-align: center;
    font-weight: bold;
  }
  .cm-message-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*background-color: #50c2ab;*/
  }
  .cm-message-bg--info {
    background-color: #ababab;
  }
  .cm-message-bg--error {
    background-color: #ff623b;
  }
  .cm-message-bg--warning {
    background-color: #e2ce6c;
  }
  .cm-message-bg--success {
    background-color: #3adfc5;
  }
}
</style>
