<template>
  <div :class="classList">
    <div :class="subClassList">
      <slot name="content" />
    </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    blurring: Boolean,
    inverted: Boolean
  },
  computed: {
    classList() {
      let retVal = ['ui']

      if (this.value) {
        retVal.push('dimmable')
        retVal.push('dimmed')
      }
      if (this.blurring) retVal.push('blurring')

      return retVal
    },
    subClassList() {
      let retVal = ['ui', 'simple', 'dimmer']

      if (this.inverted) retVal.push('inverted')

      return retVal
    }
  }
}
</script>

<style>

</style>
