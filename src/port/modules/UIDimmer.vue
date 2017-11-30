<template>
  <div :class="classList">
    <div class="ui simple dimmer"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  computed: {
    classList() {
      var retVal = ['ui']

      if (this.value) {
        retVal.push('dimmable')
        retVal.push('dimmed')
      }

      return retVal
    }
  }
}
</script>

<style>

</style>
