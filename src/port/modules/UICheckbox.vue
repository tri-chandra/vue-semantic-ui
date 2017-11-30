<template>
  <div :class="classList">
    <input v-if="exclusive" type="radio" @change="emitChange" v-model="data" :value="value" />
    <input v-else type="checkbox" @change="emitChange" v-model="data" :value="value" />
    <label>My label</label>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: [Boolean, Array, String],
      default: false
    },
    value: [Boolean, String],
    //style
    radio: Boolean,
    slider: Boolean,
    toggle: Boolean,
    //logic
    readOnly: Boolean,
    disabled: Boolean,
    fitted: Boolean,
    exclusive: Boolean,
    indeterminate: Boolean,
    uncheckable: Boolean //Not implemented
  },
  data() {
    return {
      data: ''
    }
  },
  computed: {
    classList() {
      var retVal = ['ui', 'checkbox']

      if (this.$props.readOnly) {
        retVal.splice(1, 0, 'read-only')
      }
      if (this.$props.disabled) {
        retVal.splice(1, 0, 'disabled')
      }
      if (this.$props.fitted) {
        retVal.splice(1, 0, 'fitted')
      }
      if (this.$props.indeterminate) {
        retVal.splice(1, 0, 'indeterminate')
      }

      if (this.$props.radio) {
        retVal.splice(1, 0, 'radio')
      } else if (this.$props.slider) {
        retVal.splice(1, 0, 'slider')
      } else if (this.$props.toggle) {
        retVal.splice(1, 0, 'toggle')
      }

      return retVal
    }
  },
  watch: {
    checked(val) {
      this.data = val
    },
    indeterminate(val) {
      this.$el.childNodes[0].indeterminate = val
    }
  },
  methods: {
    emitChange(e) {
      if (this.readOnly || this.disabled) {
        this.data = this.checked
      } else {
        this.$emit('change', this.data)
      }
    }
  },
  mounted() {
    this.data = this.checked
    if (this.indeterminate) {
      this.$el.childNodes[0].indeterminate = true
    }
  }
}
</script>
