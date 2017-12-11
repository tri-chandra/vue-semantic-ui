<script>
export default {
  props: {
    value: {
      type: [Object, Boolean, String],
      required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {
    onClick() {
      this.$parent.$emit('changed', {
        value: this.value,
        text: this.$el.textContent
      })
    }
  },
  render(h) {
    return h('div',
    {
      'class': ['item'],
      on: {
          click: this.onClick
      },
      mounted() {
        alert('q')
      }
    },
    this.$slots.default)
  }
}
</script>
