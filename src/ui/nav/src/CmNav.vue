<template>
  <div class="cm-nav-container">
    <div class="cm-nav-shadow">
      <ul class="cm-nav">
        <li class="cm-nav-item"
            v-for="item in list"
            v-if="slide"
            :key="item.value"
            :ref="`item-${item.value}`"
            :style="{ margin: '0 ' + space + 'px' }"
            :class="{ 'cm-nav-current-item': current === item.value }"
            @click="clickNavItem(item.value)"
            @mouseover="hoverNavItem(item.value)"
            @mouseout="outNavItem">{{ item.lable }}</li>
        <li class="cm-nav-item cm-nav-item-width-bottom"
            v-for="item in list"
            v-if="!slide"
            :key="item.value"
            :ref="`item-${item.value}`"
            :style="{ margin: '0 ' + space + 'px' }"
            :class="{ 'cm-nav-current-item': current === item.value }"
            @click="clickNavItem(item.value)"
            @mouseover="hoverNavItem(item.value)"
            @mouseout="outNavItem">{{ item.lable }}</li>
        <div class="cm-nav-slider" :ref="'nav-slider'" v-show="slide"></div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CmNav',
  props: [ 'list', 'default', 'space', 'slide' ],
  data () {
    return {
      current: 'index'
    }
  },
  created () {
    this.$nextTick(() => {
      let index = this.list.findIndex(item => item.value === this.default)
      console.log(`index:${index}`)
      if (index === -1 && this.list.length > 0) {
        this.clickNavItem(this.list[0].value)
      } else if (index >= 0 && this.list.length > 0) {
        this.clickNavItem(this.default)
      }
    })
  },
  methods: {
    changeNavItem (val) {
      let clientWidth = this.$refs[`item-${val}`][0].clientWidth
      let offsetLeft = this.$refs[`item-${val}`][0].offsetLeft
      this.$refs['nav-slider'].style.width = clientWidth + 'px'
      this.$refs['nav-slider'].style.transform = `translateX(${offsetLeft}px)`
    },
    clickNavItem (val) {
      this.current = val
      this.changeNavItem(val)
      this.$emit('update', val)
    },
    hoverNavItem (val) {
      // this.changeNavItem(val)
    },
    outNavItem () {
      this.changeNavItem(this.current)
    }
  }
}
</script>

<style lang="scss">
.cm-nav-container {
  width: 100%;
  text-align: center;
  padding: 0 0 5px 0;
  overflow: hidden;
  .cm-nav-shadow {
    box-sizing: border-box;
    box-shadow: 0 0 5px gray;
    .cm-nav {
      display: inline-block;
      background-color: white;
      position: relative;
      margin: 0;
      padding: 0;
      list-style: none;
      height: 60px;
      line-height: 60px;
      text-align: center;
      user-select: none;
      .cm-nav-item {
        display: inline-block;
        margin: 0 10px;
        padding: 0;
        height: 60px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          transition: all 0.3s;
          color: #71a7cc;
        }
      }
      .cm-nav-item-width-bottom {
        position: relative;
        &:before {
          transform: scale(0);
          position: absolute;
          content: "";
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background-color: #7db9e2;
          transition: all 0.3s;
        }
        &:hover {
          &:before {
            transform: scale(1);
            transition: all 0.3s;
          }
        }
      }
      .cm-nav-current-item {
        color: #7db9e2;
      }
      .cm-nav-slider {
        position: absolute;
        bottom: 0px;
        height: 2px;
        width: 0px;
        background-color: #7db9e2;
        transition: all 0.3s;
      }
      &:after {
        clear: both;
      }
    }
  }
}

</style>
