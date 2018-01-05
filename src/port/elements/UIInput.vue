<template>
  <div :class="classList">
    <input
      v-model="model"
      type="text"
      :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    value: '',
    placeholder: String,
    focus: Boolean,
    loading: Boolean
  },
  data() {
    return {
      model: ''
    }
  },
  computed: {
    classList() {
      let retVal = ['ui', 'input']

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
