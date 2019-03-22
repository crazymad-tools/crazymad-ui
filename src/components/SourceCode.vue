<template>
  <div class="cm-code">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SourceCode'
}
</script>

<style lang="scss">
.cm-code {
  padding: 10px;
  background-color: rgba(151, 212, 255, 0.18);
}
</style>
