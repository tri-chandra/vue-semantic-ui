<script>
import sizeMixin from '@/port/mixins/SizeMixin'

export default {
  mixins: [sizeMixin],
  props: {
    tag: {
      type: String,
      default: 'img',
      validator(val) {
        return ['img', 'svg', 'div', 'a'].includes(val)
      }
    },
    hidden: Boolean,
    disabled: Boolean,
    avatar: Boolean,
    bordered: Boolean,
    rounded: Boolean,
    circular: Boolean,

    topAligned: Boolean,
    middleAligned: Boolean,
    bottomAligned: Boolean,
    centered: Boolean,
    spaced: Boolean,
    leftSpaced: Boolean,
    rightSpaced: Boolean,
    leftFloated: Boolean,
    rightFloated: Boolean
  },
  computed: {
    classList() {
      let retVal = ['ui', 'image']

      if (this.topAligned) retVal.splice(1, 0, 'top aligned')
      else if (this.middleAligned) retVal.splice(1, 0, 'middle aligned')
      else if (this.bottomAligned) retVal.splice(1, 0, 'bottom aligned')

      if (this.centered) retVal.splice(1, 0, 'centered')

      if (this.spaced) retVal.splice(1, 0, 'spaced')
      else if (this.leftSpaced) retVal.splice(1, 0, 'left spaced')
      else if (this.rightSpaced) retVal.splice(1, 0, 'right spaced')

      if (this.leftFloated) retVal.splice(1, 0, 'left floated')
      else if (this.rightFloated) retVal.splice(1, 0, 'right floated')

      for (let size in this.sizeClass) {
        retVal.splice(1, 0, size)
      }

      if (this.hidden) retVal.splice(1, 0, 'hidden')
      if (this.disabled) retVal.splice(1, 0, 'disabled')
      if (this.avatar) retVal.splice(1, 0, 'avatar')
      if (this.bordered) retVal.splice(1, 0, 'bordered')
      if (this.fluid) retVal.splice(1, 0, 'fluid')
      if (this.rounded) retVal.splice(1, 0, 'rounded')
      if (this.circular) retVal.splice(1, 0, 'circular')

      return retVal
    }
  },
  render(h) {
    return h(
      this.tag,
      {
        'class': this.classList
      },
      this.$slots.default
    )
  }
}
</script>
