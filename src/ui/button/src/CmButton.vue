<template>
  <button class="cm-button"
          :class="[
            'cm-button-size--' + size,
            'cm-button-type--' + type
          ]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CmButton',
  props: {
    size: {
      type: String,
      default: 'middle'
    },
    type: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
