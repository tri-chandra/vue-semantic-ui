

<script>
export default {
  props: {
    value: Boolean,
    notCollapsible: Boolean,
    on: {
      type: String,
      default: 'click'
    }
  },
  data: function() {
    return {

    }
  },
  computed: {
    isActive: function() {
      return this.value
    }
  },
  methods: {
    onClick: function() {
      let retVal = this.isActive
      if (! (this.notCollapsible && this.isActive) ) {
        retVal = !this.isActive
      }
      this.$emit('input', retVal)
    }
  },
  render: function(h) {
    let props = {
      'class': {title: true, active:this.isActive},
      on: {

      }
    }
    props.on[this.on] = this.onClick

    return h(
      'div',
      props,
      this.$slots.default
    )
  }
}
</script>
