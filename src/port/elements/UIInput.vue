<template>
  <div :class="classList">
    <input
      v-model="model"
      type="text"
      :placeholder="placeholder" />
    <sui-icon v-if="icon||rightIcon||leftIcon" :value="icon||rightIcon||leftIcon" />
  </div>
</template>

<script>
export default {
  props: {
    value: '',
    placeholder: String,
    icon: String,
    leftIcon: String,
    rightIcon: String,

    focus: Boolean,
    loading: Boolean,

    disabled: Boolean
  },
  data() {
    return {
      model: ''
    }
  },
  computed: {
    classList() {
      let retVal = ['ui', 'input']

      if (this.loading) retVal.splice(1, 0, 'loading')
      if (this.icon) retVal.splice(1, 0, 'icon')
      else if (this.rightIcon) retVal.splice(1, 0, 'right icon')
      else if (this.leftIcon) retVal.splice(1, 0, 'left icon')

      if (this.focus) retVal.splice(1, 0, 'focus')
      if (this.disabled) retVal.splice(1, 0, 'disabled')

      return retVal
    }
  },
  watch: {
    value(val) {
      this.model = val
    },
    model(val) {
      this.$emit('input', val)
    }
  },
  mounted() {
    this.model = this.value
  }
}
</script>
