<script>
import sizeMixin from '@/port/mixins/SizeMixin'

export default {
  mixins: [sizeMixin],
  props: {
    image: Boolean,
    circular: Boolean,

    fade: Boolean,
    move: {
      type: String,
      validator: function(val) {
        return ['up', 'down', 'left', 'right'].includes(val)
      }
    },
    rotate: Boolean,
    rotateLeft: Boolean,

    active: Boolean,
    instant: Boolean,
    disabled: Boolean
  },
  computed: {
    classList() {
      let retVal = ['ui', 'reveal']

      if (this.image) retVal.splice(1, 0, 'image')
      if (this.circular) retVal.splice(1, 0, 'circular')

      if (this.fade) retVal.splice(1, 0, 'fade')

      if (this.move && this.move === 'left') retVal.splice(1, 0, 'move')
      else if (this.move) retVal.splice(1, 0, `${this.move} move`)

      if (this.rotate) retVal.splice(1, 0, 'rotate')
      else if (this.rotateLeft) retVal.splice(1, 0, 'rotate left')

      if (this.active) retVal.splice(1, 0, 'active')
      if (this.instant) retVal.splice(1, 0, 'instant')
      if (this.disabled) retVal.splice(1, 0, 'disabled')

      for (let c in this.sizeClass) {
        retVal.splice(1, 0, c)
      }

      return retVal
    }
  },
  render(h) {
    let children = []

    if (this.$slots.visible && this.$slots.visible.length > 0) {
      if (this.$slots.visible[0].data.staticClass) {
        this.$slots.visible[0].data.staticClass += ' visible content'
      } else {
        this.$slots.visible[0].data.staticClass = 'visible content'
      }

      children.push(this.$slots.visible[0])
    }

    if (this.$slots.hidden && this.$slots.hidden.length > 0) {
      if (this.$slots.hidden[0].data.staticClass) {
        this.$slots.hidden[0].data.staticClass += ' hidden content'
      } else {
        this.$slots.hidden[0].data.staticClass = 'hidden content'
      }

      children.push(this.$slots.hidden[0])
    }

    for (let idx in this.$slots.default) {
      children.push(this.$slots.default[idx])
    }

    return h(
      'div',
      {
        'class': this.classList
      },
      children
    )
  }
}
</script>
