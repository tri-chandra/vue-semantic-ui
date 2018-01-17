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
    text: Boolean,
    indeterminate: Boolean,
    active: Boolean,
    disabled: Boolean,
    inline: Boolean,
    centeredInline: Boolean,
    inverted: Boolean
  },
  computed: {
    classList() {
      let retVal = ['ui', 'loader']

      if (this.text) retVal.splice(1, 0, 'text')
      if (this.indeterminate) retVal.splice(1, 0, 'indeterminate')
      if (this.active) retVal.splice(1, 0, 'active')
      if (this.disabled) retVal.splice(1, 0, 'disabled')
      if (this.inline) retVal.splice(1, 0, 'inline')
      if (this.centeredInline) retVal.splice(1, 0, 'centered inline')
      if (this.inverted) retVal.splice(1, 0, 'inverted')

      for (let c in this.sizeClass) {
        retVal.splice(1, 0, c)
      }

      return retVal
    }
  }
}
</script>
