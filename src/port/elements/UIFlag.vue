<template>
 <i :class="classList"></i>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    classList() {
      let retVal = ['flag']

      if (this.value) {
        retVal.splice(0, 0, this.value)
      }

      return retVal
    }
  }
}
</script>
