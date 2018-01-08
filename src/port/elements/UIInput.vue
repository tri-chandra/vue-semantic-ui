<template>
  <div :class="classList">
    <input
      v-model="model"
      type="text"
      :placeholder="placeholder" />
    <slot></slot>
  </div>
</template>

<script>
import sizeMixin from '@/port/mixins/SizeMixin'

export default {
  mixins: [sizeMixin],
  props: {
    value: '',
    placeholder: String,
    icon: Boolean,
    leftIcon: Boolean,
    rightIcon: Boolean,

    focus: Boolean,
    loading: Boolean,
    error: Boolean,
    disabled: Boolean,

    labeled: Boolean,
    action: Boolean,
    transparent: Boolean,
    inverted: Boolean,
    fluid: Boolean
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
      if (this.error) retVal.splice(1, 0, 'error')

      for (let c in this.sizeClass) {
        retVal.splice(1, 0, c)
      }

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
