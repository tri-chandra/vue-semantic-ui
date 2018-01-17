<template>
<div :class="classList">
  <slot></slot>
</div>
</template>

<script>
import colorMixin from '@/port/mixins/ColorMixin'

export default {
  mixins: [colorMixin],
  props: {

  },
  computed: {
    classList() {
      let retVal = ['ui', 'segment']

      for (let c in this.colorClass) {
        retVal.splice(1, 0, c)
      }

      return retVal
    }
  }
}
</script>
