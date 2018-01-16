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
    relaxed: Boolean,
    divided: Boolean,
    bulleted: Boolean,
    ordered: Boolean,

    horizontal: Boolean,
    inverted: Boolean,

    link: Boolean
  },
  computed: {
    classList() {
      let retVal = ['ui', 'list']

      if (this.relaxed) retVal.splice(1, 0, 'relaxed')
      if (this.divided) retVal.splice(1, 0, 'divided')
      if (this.bulleted) retVal.splice(1, 0, 'bulleted')
      if (this.ordered) retVal.splice(1, 0, 'ordered')
      if (this.link) retVal.splice(1, 0, 'link')

      if (this.horizontal) retVal.splice(1, 0, 'horizontal')
      if (this.inverted) retVal.splice(1, 0, 'inverted')

      for (let c in this.sizeClass) {
        retVal.splice(1, 0, c)
      }

      return retVal
    }
  }
}
</script>
