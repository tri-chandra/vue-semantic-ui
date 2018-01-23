<script>
import colorMixin from '@/port/mixins/ColorMixin'
import sizeMixin from '@/port/mixins/SizeMixin'

export default {
  mixins: [colorMixin, sizeMixin],
  props: {
    h1: Boolean,
    h2: Boolean,
    h3: Boolean,
    h4: Boolean,
    h5: Boolean,
    h6: Boolean,
    caption: Boolean,
    sub: Boolean,

    disabled: Boolean,
    dividing: Boolean,
    block: Boolean,
    icon: Boolean,
    image: Boolean,

    topAttached: Boolean,
    attached: Boolean,
    bottomAttached: Boolean,
    rightFloated: Boolean,
    leftFloated: Boolean,

    rightAligned: Boolean,
    leftAligned: Boolean,
    justified: Boolean,
    centerAligned: Boolean,

    divider: {
      type: String,
      validator(val) {
        return ['horizontal', 'vertical'].includes(val)
      }
    }
  },
  computed: {
    appliedClass() {
      var c = {}

      if (this.sub) c.sub = true

      return c
    },
    classList() {
      var retVal

      if (this.caption) retVal = ['sub', 'header']
      else if (this.sub) retVal = ['ui', 'sub', 'header']
      else retVal = ['ui', 'header']

      for (let color in this.colorClass) {
        retVal.splice(1, 0, color)
      }

      if (this.rightAligned) retVal.splice(1, 0, 'right aligned')
      else if (this.leftAligned) retVal.splice(1, 0, 'left aligned')
      else if (this.justified) retVal.splice(1, 0, 'justified')
      else if (this.centerAligned) retVal.splice(1, 0, 'center aligned')

      if (this.topAttached) retVal.splice(1, 0, 'top attached')
      else if (this.attached) retVal.splice(1, 0, 'attached')
      else if (this.bottomAttached) retVal.splice(1, 0, 'bottom attached')

      if (this.leftFloated) retVal.splice(1, 0, 'left floated')
      else if (this.rightFloated) retVal.splice(1, 0, 'right floated')

      if (this.icon) retVal.splice(1, 0, 'icon')
      else if (this.image) retVal.splice(1, 0, 'image')

      if (this.dividing) retVal.splice(1, 0, 'dividing')
      if (this.block) retVal.splice(1, 0, 'block')
      if (this.disabled) retVal.splice(1, 0, 'disabled')

      if (this.divider) retVal.splice(1, 0, `${this.divider} divider`)

      for (let c in this.sizeClass) {
        retVal.splice(1, 0, c)
      }

      return retVal
    }
  },
  render(h) {
    let tag

    if (this.h1) tag = 'h1'
    else if (this.h2) tag = 'h2'
    else if (this.h3) tag = 'h3'
    else if (this.h4) tag = 'h4'
    else if (this.h5) tag = 'h5'
    else if (this.h6) tag = 'h6'
    else tag = 'div'

    return h(
      tag,
      {
        'class': this.classList
      },
      this.$slots.default
    )
  }
}
</script>
