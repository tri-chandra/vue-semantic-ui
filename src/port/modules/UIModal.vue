<template>
<div :class="'ui dimmer modals page' + (value?' active': '')" :style="{display: value?'block !important': 'none'}">
 )
<div :class="classList">
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
      let retVal = ['ui', 'modal']

      if(this.value) retVal.splice(1, 0, 'active')

      return retVal
    }
  }   
}
</script>