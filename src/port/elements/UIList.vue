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
    veryRelaxed: Boolean,
    divided: Boolean,
    celled: Boolean,
    bulleted: Boolean,
    ordered: Boolean,

    horizontal: Boolean,
    inverted: Boolean,
    selection: Boolean,
    animated: Boolean,

    rightFloated: Boolean,

    link: Boolean
  },
  computed: {
    classList() {
      let retVal = ['ui', 'list']

      if (this.relaxed) retVal.splice(1, 0, 'relaxed')
      if (this.veryRelaxed) retVal.splice(1, 0, 'very relaxed')
      if (this.divided) retVal.splice(1, 0, 'divided')
      if (this.celled) retVal.splice(1, 0, 'celled')
      if (this.bulleted) retVal.splice(1, 0, 'bulleted')
      if (this.ordered) retVal.splice(1, 0, 'ordered')
      if (this.link) retVal.splice(1, 0, 'link')

      if (this.horizontal) retVal.splice(1, 0, 'horizontal')
      if (this.inverted) retVal.splice(1, 0, 'inverted')
      if (this.selection) retVal.splice(1, 0, 'selection')
      if (this.animated) retVal.splice(1, 0, 'animated')

      if (this.rightFloated) retVal.splice(1, 0, 'right floated')

      for (let c in this.sizeClass) {
        retVal.splice(1, 0, c)
      }

      return retVal
    }
  }
}
</script>
