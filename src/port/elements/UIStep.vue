<template>
<div :class="classList">
  <slot></slot>
</div>
</template>

<script>
import sizeMixin from '@/port/mixins/SizeMixin'

export default {
  mixins: [sizeMixin],
  props: {

  },
  computed: {
    classList() {
      let retVal = ['ui', 'step']

      for (let c in this.sizeClass) {
        retVal.splice(1, 0, c)
      }

      return retVal
    }
  }
}
</script>
