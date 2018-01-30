<template>
<div :class="classList">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    image: Boolean,
    scrolling: Boolean
  },
  computed: {
    classList() {
      let retVal = []

      if (this.image) retVal.splice(0, 0, 'image')
      if (this.scrolling) retVal.splice(0, 0, 'scrolling')
      retVal.splice(0, 0, 'content')

      return retVal
    }
  }
}
</script>