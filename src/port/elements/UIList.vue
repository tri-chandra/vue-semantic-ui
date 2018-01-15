<template>
<div :class="classList">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    relaxed: Boolean,
    divided: Boolean,
    bulleted: Boolean,
    ordered: Boolean,

    link: Boolean
  },
  computed: {
    classList() {
      let retVal = ['ui', 'list']

      return retVal
    }
  }
}
</script>
