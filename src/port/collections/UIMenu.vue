<template>
  <div
    :class="['ui', 'menu', colorClass, sizeClass, directionClass, appliedClass]">
    <slot></slot>
  </div>
</template>

<script>
import colorMixin from '@/port/mixins/ColorMixin'
import sizeMixin from '@/port/mixins/SizeMixin'
import directionMixin from '@/port/mixins/DirectionMixin'

export default {
  mixins: [colorMixin, sizeMixin, directionMixin],
  props: {
    floated: Boolean,
    icon: Boolean
  },
  computed: {
    appliedClass: function() {
      return  {
        floated: this.floated,
        icon: this.icon
      }
    }
  }
}
</script>
