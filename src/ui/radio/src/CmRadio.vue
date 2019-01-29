<template>
  <span class="cm-radio" @click="model = value === label ? null : label">
    <span class="radio-flag" :class="{ 'radio-flag-choosed': value === label }">
      <i :class="[ model === label ? 'icon-right-choosed' : 'icon-right' ]" class="cm-icon-right"></i>
    </span>
    <span class="radio-label" :style="{ 'color': model !== label ? 'black' : '#1c83e9' }">
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: 'CmRadio',
  props: {
    value: {},
    label: String
  },
  data () {
    return {
      model: {}
    }
  },
  mounted () {
    console.log('label:' + this.label)
  },
  watch: {
    value: function (val) {
      this.model = val
    },
    model: function (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss">
.radio-label {
  margin-left: 5px;
  &:hover {
    color: dodgerblue;
  }
}
.radio-flag {
  display: inline-block;
  color: white;
  font-weight: bold;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  text-align: center;
  line-height: 20px;
  border: 1px solid dodgerblue;
  background-color: white;
  i {
    font-size: 16px;
    display: block;
  }
  .icon-right {
    transform: scale(0, 0);
    transition: all 0.3s;
  }
  .icon-right-choosed {
    transform: scale(1, 1);
    transition: all 0.3s;
  }
}
.radio-flag-choosed {
  background-color: dodgerblue;
}
</style>
