<template>
<div :class="classList">
    <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    vertical: Boolean,
    horizontal: Boolean,

    inverted: Boolean,
    fitted: Boolean,
    hidden: Boolean,
    section: Boolean,
    clearing: Boolean
  },
  computed: {
    classList() {
      let retVal = ['ui', 'divider']

      if (this.inverted) retVal.splice(1, 0, 'inverted')
      if (this.fitted) retVal.splice(1, 0, 'fitted')
      if (this.hidden) retVal.splice(1, 0, 'hidden')
      if (this.section) retVal.splice(1, 0, 'section')
      if (this.clearing) retVal.splice(1, 0, 'clearing')

      if (this.horizontal) retVal.splice(1, 0, 'horizontal')
      else if (this.vertical) retVal.splice(1, 0, 'vertical')

      return retVal
    }
  }
}
</script>
