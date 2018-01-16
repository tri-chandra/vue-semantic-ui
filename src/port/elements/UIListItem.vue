
<template>
  <a v-if="link" :class="classList">
    <slot></slot>
  </a>
  <div v-else :class="classList">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    link: Boolean,
    active: Boolean
  },
  computed: {
    classList() {
      let retVal = ['item']

      if (this.active) retVal.splice(0, 0, 'active')

      return retVal
    }
  }
}
</script>
