<template>
<div :class="`html ui top attached ${inverted?'inverted':''} segment custom`">
  <slot></slot>
  <sui-label attached="top" class="custom-label">Example</sui-label>
</div>
</template>

<script>
export default {
  props: {
    inverted: Boolean
  }
}
</script>

<style scoped>
.custom {
  padding: 3.5em 1em 1em;
}
.custom-label {
  background-color: #F8F8F8;
  box-shadow: 0px 0px 0px 1px #DDDDDD;
  user-select: none;
}
</style>
