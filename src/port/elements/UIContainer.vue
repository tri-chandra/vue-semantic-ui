<template>
  <div :class="['ui', 'container']"><slot></slot></div>
</template>

<script>
export default {
  props: {

  },
  computed: {
    appliedClass: function() {
      var c = {}

      return c
    }
  }
}
</script>

