<template>
  <div :class="classList" @click.stop="onClick">
    <span v-if="description" class="description">{{description}}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    description: String
  },
  data() {
    return {
      filtered: false,
      active: false,
      selected: false
    }
  },
  computed: {
    classList() {
      let retVal = ['item']
      if (this.active) retVal.push('active')
      if (this.selected) retVal.push('selected')
      if (this.filtered) retVal.push('filtered')

      return retVal
    }
  },
  methods: {
    onClick() {
      this.$parent.$emit('changed', {
        value: this.value,
        display: this.$el.innerHTML,
        text: this.$el.textContent,
        component: this
      })
    }
  }
}
</script>
