<template>
  <div :class="['ui', 'rail', sizeClass, directionClass, appliedClass]">
    <slot></slot>
  </div>
</template>

<script>
import sizeMixin from '@/port/mixins/SizeMixin'
import directionMixin from '@/port/mixins/DirectionMixin'

export default {
  mixins: [sizeMixin, directionMixin],
  props: {
    internal: Boolean,
    dividing: Boolean,
    attached: Boolean,
    close: Boolean,
    very: Boolean
  },
  computed: {
    appliedClass: function() {
      var c = {}

      if (this.internal) c.internal = true
      if (this.dividing) c.dividing = true
      if (this.attached) c.attached = true
      if (this.close) {
        c.close = true
        if (this.very) c.very = true
      }

      return c
    }
  }
}
</script>
