<template>
  <h1 v-if="h1" :class="['ui', 'header', appliedClass]">
    <slot></slot>
  </h1>
  <h2 v-else-if="h2" :class="['ui', 'header', appliedClass]">
    <slot></slot>
  </h2>
  <h3 v-else-if="h3" :class="['ui', 'header', appliedClass]">
    <slot></slot>
  </h3>
  <h4 v-else-if="h4" :class="['ui', 'header', appliedClass]">
    <slot></slot>
  </h4>
  <h5 v-else-if="h5" :class="['ui', 'header', appliedClass]">
    <slot></slot>
  </h5>
  <div v-else :class="['ui', 'header', appliedClass]">
    <slot></slot>
  </div>
</template>

<script>
import colorMixin from '@/port/mixins/ColorMixin'
import sizeMixin from '@/port/mixins/SizeMixin'

export default {
  mixins: [colorMixin, sizeMixin],
  props: {
    h1: Boolean,
    h2: Boolean,
    h3: Boolean,
    h4: Boolean,
    h5: Boolean,
    sub: Boolean,

    disabled: Boolean,
    dividing: Boolean,
    block: Boolean,
    icon: Boolean,

    centerAligned: Boolean,
    topAttached: Boolean,
    attached: Boolean,
    bottomAttached: Boolean,
    rightFloated: Boolean,
    leftFloated: Boolean,

    rightAligned: Boolean,
    leftAligned: Boolean,
    justified: Boolean,
    centerAligned: Boolean
  },
  computed: {
    appliedClass: function() {
      var c = {}

      if (this.sub) c.sub = true

      return c
    }
  }
}
</script>
