<template>
  <transition :name="animation" @after-leave="handleclosed">
    <div class="cm-message" v-show="visible">
      <div class="cm-message-content">
        <div class="cm-message-bg"
             :class="[ `cm-message-bg--${type}` ]"></div>
        <div class="cm-message-content-detail">
          {{ message }}
          <i class="cm-icon-cha cm-message-close-btn" @click="close"></i>
        </div>
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
      closed: false,
      type: 'info',
      animation: 'shrink'
    }
  },
  mounted () {
    // console.log('created')
    this.$nextTick(() => {
      this.visible = true
    })
    setTimeout(() => {
      this.closed = true
    }, this.delay)
  },
  watch: {
    closed (val) {
      // console.log(val)
      this.visible = !val
    }
  },
  methods: {
    handleclosed () {
      // console.log('delete')
      this.$el.parentNode.removeChild(this.$el)
      this.$destroy(true)
    },
    close () {
      this.closed = true
    }
  }
}
</script>

<style lang="scss">
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}
.slide-enter, .slide-leave-to /* .slide-leave-active below version 2.1.8 */ {
  opacity: 0;
  margin-top: -20px;
}
.shrink-enter-active {
  transition: all 0.1S;
}
.shrink-leave-active {
  transition: all 0.3S;
}
.shrink-enter, .shrink-leave-to {
  opacity: 0;
  //transform: scale(0.8) translateX(-60%) !important;
  transform: scale(0.8) !important;
}
.shake-enter-active, .shake-leave-active {

}
.shake-enter, .shake-leave-to {

}
.cm-message {
  display: inline;
  position: fixed;
  /*padding: 10px 25px;*/
  top: 20px;
  left: 0;
  /*left: 50%;*/
  //transform: translateX(-50%);
  /*margin: 0 auto;*/
  width: 100%;
  /*background-color: black;*/
  text-align: center;
  .cm-message-content {
    display: inline-block;
    position: relative;
    color: white;
    text-align: center;
    font-weight: bold;
    padding: 10px 25px;
    /*box-sizing: border-box;*/
    .cm-message-close-btn {
      margin-left: 20px;
      cursor: pointer;
      border-radius: 20px;
      border: 2px solid white;
    }
    .cm-message-content-detail {
      position: relative;
    }
    .cm-message-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
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
