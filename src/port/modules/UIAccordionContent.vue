<template>
  <div :class="{content: true, active:isActive}" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data: function() {
    return {

    }
  },
  computed: {
    isActive: function() {
      return this.value
    }
  },
}

// <template>
//   <div :class="{title: true, active:isActive}" @click="onClick">
//     <slot></slot>
//   </div>
// </template>
</script>
