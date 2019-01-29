<template>
  <div id="app">
    <h3>按钮尺寸</h3>
    <cm-button size="large">大型按钮</cm-button>
    <cm-button size="middle">中型按钮</cm-button>
    <cm-button size="small">小型按钮</cm-button>
    <cm-button size="small" type="text">文字按钮</cm-button>
    <hr/>
    <h3>按钮类型</h3>
    <cm-button size="middle" type="text">文字按钮</cm-button>
    <cm-button size="middle" type="default">默认按钮</cm-button>
    <cm-button size="middle" type="primary">主要按钮</cm-button>
    <cm-button size="middle" type="danger">危险按钮</cm-button>
    <cm-button size="middle" type="warning">警告按钮</cm-button>
    <cm-button size="middle" type="success">成功按钮</cm-button>
    <hr/>
    <h3>布局</h3>
    <div class="layout-container">
      <cm-row space="10">
        <cm-col span="lg8 md12"><div class="color1"></div></cm-col>
        <cm-col span="lg8"><div class="color2"></div></cm-col>
        <cm-col span="lg8 md12 sm24"><div class="color3"></div></cm-col>
      </cm-row>
      <!--<div style="clear: both;"></div>-->
      <cm-row style="margin-top: 10px;" space="20">
        <cm-col span="lg6"><div class="color1"></div></cm-col>
        <cm-col span="lg6"><div class="color2"></div></cm-col>
        <cm-col span="lg6"><div class="color3"></div></cm-col>
        <cm-col span="lg6"><div class="color4"></div></cm-col>
      </cm-row>
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
      <div style="clear: both;"></div>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
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
    padding: 15px;
    border-right: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
    box-sizing: border-box;
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
}
</style>
