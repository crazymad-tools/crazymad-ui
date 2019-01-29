<template>
  <i :class="[ 'cm-icon-' + name ]"></i>
</template>

<script>
export default {
  name: 'CmIcon',
  props: {
    name: String
  }
}
</script>
