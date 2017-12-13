<script>
export default {
  props: {
    value: {
      type: [Object, Boolean, String]
    },
    description: String
  },
  data() {
    return {

    }
  },
  methods: {
    onClick(event) {
      this.$parent.$emit('changed', {
        value: this.value,
        text: this.$el.textContent
      })

      this.$el.classList.value = 'item active selected'

      event.stopPropagation()
    }
  },
  render(h) {
    let children = this.$slots.default
    if (this.description) {
      children.splice(0, 0,
        h(
          'span',
          {
            'class': ['description']
          },
          this.description
        )
      )
    }

    return h('div',
    {
      'class': ['item'],
      on: {
          click: this.onClick
      }
    },
    this.$slots.default)
  }
}
</script>
