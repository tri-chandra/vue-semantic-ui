<template>
  <div :class="classList">
    <slot name="label" class="ui label"></slot>
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
    rightLabeled: Boolean,
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

      if (this.labeled) retVal.splice(1, 0, 'labeled')
      else if (this.rightLabeled) retVal.splice(1, 0, 'right labeled')

      if (this.transparent) retVal.splice(1, 0, 'transparent')
      if (this.inverted) retVal.splice(1, 0, 'inverted')

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
