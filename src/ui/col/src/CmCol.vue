<template>
  <div class="cm-col"
       :class="[ classNames ]"
       :style="{ padding: colSpace }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CmCol',
  props: {
    span: {
      type: String,
      default: '20'
    }
  },
  computed: {
    colSpace: function () {
      let space = this.$parent.space ? this.$parent.space : '0'
      return '0 ' + space / 2 + 'px'
    },
    classNames: function () {
      console.log('hello world')
      console.log(this.span)
      let item = this.span.trim().split(/\s+/)
      let classNames = ''
      item.forEach(name => {
        classNames += ' cm-col--' + name
      })
      return classNames
    }
  }
}
</script>

<style lang="scss">

</style>
