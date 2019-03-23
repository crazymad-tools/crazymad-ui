<template>
  <div id="app">

    <div id="example-1">
      <button @click="show = !show">
        Toggle render
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <h3>按钮尺寸</h3>
    <cm-button size="large">大型按钮</cm-button>
    <cm-button size="middle">中型按钮</cm-button>
    <cm-button size="small">小型按钮</cm-button>
    <cm-button size="small" type="text">文字按钮</cm-button>
    <source-code>
      <button-size></button-size>
    </source-code>
    <hr/>
    <h3>按钮类型</h3>
    <cm-button size="middle" type="text">文字按钮</cm-button>
    <cm-button size="middle" type="default">默认按钮</cm-button>
    <cm-button size="middle" type="primary">主要按钮</cm-button>
    <cm-button size="middle" type="danger">危险按钮</cm-button>
    <cm-button size="middle" type="warning">警告按钮</cm-button>
    <cm-button size="middle" type="success">成功按钮</cm-button>
    <source-code>
      <button-type></button-type>
    </source-code>
    <hr/>
    <h3>布局</h3>
    <div class="layout-container">
      <cm-row space="10">
        <cm-col span="lg8 md12"><div class="color1"></div></cm-col>
        <cm-col span="lg8"><div class="color2"></div></cm-col>
        <cm-col span="lg8 md12 sm24"><div class="color3"></div></cm-col>
      </cm-row>
      <!--<div style="clear: both;"></div>-->
      <cm-row style="margin-top: 10px;" space="10">
        <cm-col span="lg6 sm8"><div class="color1"></div></cm-col>
        <cm-col span="lg6 sm6"><div class="color2"></div></cm-col>
        <cm-col span="lg6 sm10"><div class="color3"></div></cm-col>
        <cm-col span="lg6"><div class="color4"></div></cm-col>
      </cm-row>
      <source-code>
        <layout-demo></layout-demo>
      </source-code>
    </div>
    <hr/>
    <h3>图标</h3>
    <ul class="icon-list">
      <li><i class="cm-icon-address"></i></li>
      <li><i class="cm-icon-article"></i></li>
      <li><i class="cm-icon-baseset"></i></li>
      <li><i class="cm-icon-brief"></i></li>
      <li><i class="cm-icon-category"></i></li>
      <li><i class="cm-icon-comment"></i></li>
      <li><i class="cm-icon-email"></i></li>
      <li><i class="cm-icon-file"></i></li>
      <li><i class="cm-icon-file-colorful"></i></li>
      <li><i class="cm-icon-folder"></i></li>
      <li><i class="cm-icon-folder-colorful"></i></li>
      <li><i class="cm-icon-article"></i></li>
      <li><i class="cm-icon-flag"></i></li>
      <li><i class="cm-icon-image"></i></li>
      <li><i class="cm-icon-list"></i></li>
      <li><i class="cm-icon-novel"></i></li>
      <li><i class="cm-icon-option"></i></li>
      <li><i class="cm-icon-outline"></i></li>
      <li><i class="cm-icon-password"></i></li>
      <li><i class="cm-icon-phone-2"></i></li>
      <li><i class="cm-icon-phone"></i></li>
      <li><i class="cm-icon-relation"></i></li>
      <li><i class="cm-icon-role"></i></li>
      <li><i class="cm-icon-setting"></i></li>
      <li><i class="cm-icon-transpond"></i></li>
      <li><i class="cm-icon-trash"></i></li>
      <li><i class="cm-icon-verification"></i></li>
      <li><i class="cm-icon-volume"></i></li>
      <li><i class="cm-icon-write"></i></li>
      <li><cm-icon name="address"></cm-icon></li>
      <li><cm-icon name="phone"></cm-icon></li>
      <li><cm-icon name="loading"></cm-icon></li>
      <li><cm-icon name="right"></cm-icon></li>
      <div style="clear: both;"></div>
      <source-code>
        <icon-demo></icon-demo>
      </source-code>
    </ul>
    <hr/>
    <h3>单选框</h3>
    <div>
      <cm-radio v-model="data" label="1">选项一</cm-radio>
      <cm-radio v-model="data" label="2">选项二</cm-radio>
    </div>
    <source-code>
      <radio-demo></radio-demo>
    </source-code>
    <hr/>
    <h3>导航栏</h3>
    <!--<cm-row space="20">-->
     <!--<cm-col span="lg12 md12 sm0">-->
        <!--<cm-nav :list="navList" default="index" space="20" :slide="false"></cm-nav>-->
      <!--</cm-col>-->
      <!--<cm-col span="lg12 md12 sm0">-->
        <!--<cm-nav :list="navList" default="index" space="20" :slide="true"></cm-nav>-->
      <!--</cm-col>-->
    <!--</cm-row>-->
    <!--<cm-row>-->
      <!--<cm-col span="lg0 md0 sm24">-->
        <!--<cm-nav :list="navList" default="index" space="20" :slide="false"></cm-nav>-->
        <!--<cm-nav :list="navList" default="index" space="20" :slide="true"></cm-nav>-->
      <!--</cm-col>-->
    <!--</cm-row>-->
    <cm-nav :list="navList" default="index" space="20" :slide="true"></cm-nav>
    <cm-nav :list="navList" default="index" space="20" :slide="false"></cm-nav>
    <source-code>
      <nav-demo></nav-demo>
    </source-code>
    <hr/>
    <h3>消息弹窗</h3>
    <cm-button size="middle" type="primary" @click.native="popMessageBox('info')">消息</cm-button>
    <cm-button size="middle" type="primary" @click.native="popMessageBox('warning')">警告</cm-button>
    <cm-button size="middle" type="primary" @click.native="popMessageBox('error')">错误</cm-button>
    <cm-button size="middle" type="primary" @click.native="popMessageBox('success')">成功</cm-button>
    <router-view/>

  </div>
</template>

<script>
import SourceCode from './components/SourceCode'
import ButtonSize from './components/code/ButtonSize'
import ButtonType from './components/code/ButtonType'
import LayoutDemo from './components/code/LayoutDemo'
import IconDemo from './components/code/IconDemo'
import RadioDemo from './components/code/RadioDemo'
import NavDemo from './components/code/NavDemo'
export default {
  name: 'App',
  components: { SourceCode, ButtonSize, ButtonType, LayoutDemo, IconDemo, RadioDemo, NavDemo },
  data () {
    return {
      show: true,
      data: '2',
      navList: [{
        lable: '小说',
        value: 'index'
      }, {
        lable: '文章',
        value: 'category'
      }, {
        lable: '用户',
        value: 'auth'
      }, {
        lable: '登出',
        value: 'logout'
      }]
    }
  },
  watch: {
    data: function (val) {
      console.log('data have change:' + val)
    }
  },
  methods: {
    popMessageBox (type) {
      let message = ''
      if (type === 'info') {
        message = '这是普通消息弹窗'
      } else if (type === 'success') {
        message = '这是成功消息弹窗'
      } else if (type === 'error') {
        message = '这是错误消息弹窗'
      } else {
        message = '这是警告消息弹窗'
      }
      this.$message({
        message: message,
        type: type
      })
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  margin-top: -20px;
}

.layout-container {
  width: 100%;
}
[class *= color] {
  height: 30px;
  border-radius: 5px;
}
.color1 {
  background-color: #d3dce6;
}
.color2 {
  background-color: #c9e0e6;
}
.color3 {
  background-color: #e5e9f2;
}
.color4 {
  background-color: #c5c8d0;
}
.icon-list {
  [class *= cm-icon] {
    font-size: 25px;
  }
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  margin-bottom: -1px;
  list-style: none;
  overflow: hidden;
  li {
    float: left;
    /*padding: 15px;*/
    border-right: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
    box-sizing: border-box;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
}
#app {
  padding: 5px;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  .cm-button {
    margin: 5px;
  }
}
</style>
