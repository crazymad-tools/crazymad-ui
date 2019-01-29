<template>
  <div class="cm-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CmRow',
  props: {
    space: String
  }
}
</script>
