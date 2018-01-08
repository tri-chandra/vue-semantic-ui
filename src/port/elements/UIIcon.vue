<script>
import colorMixin from '@/port/mixins/ColorMixin'
import sizeMixin from '@/port/mixins/SizeMixin'
import directionMixin from '@/port/mixins/DirectionMixin'

export default {
  mixins: [colorMixin, sizeMixin, directionMixin],
  props: {
    value: {
      type: String,
      required: true
    },
    disabled: Boolean,
    loading: Boolean,
    fitted: Boolean,
    link: Boolean,

    horizontallyFlipped: Boolean,
    verticallyFlipped: Boolean,
    rotated: Boolean,
    counterRotated: Boolean,

    circular: Boolean,
    bordered: Boolean,
    corner: Boolean
  },
  computed: {
    coreClass() {
      return 'icon'
    },
    classList() {
      let retVal = [this.value, this.coreClass]

      if (this.disabled) retVal.splice(0, 0, 'disabled')
      if (this.loading) retVal.splice(0, 0, 'loading')
      if (this.fitted) retVal.splice(0, 0, 'fitted')
      if (this.link) retVal.splice(0, 0, 'link')

      if (this.verticallyFlipped) retVal.splice(0, 0, 'vertically flipped')
      else if (this.horizontallyFlipped) retVal.splice(0, 0, 'horizontally flipped')

      if (this.rotated) retVal.splice(0, 0, 'clockwise rotated')
      else if (this.counterRotated) retVal.splice(0, 0, 'counterclockwise rotated')

      if (this.circular) retVal.splice(0, 0, 'circular')
      if (this.bordered) retVal.splice(0, 0, 'bordered')

      for (let c in this.colorClass) {
        retVal.splice(0, 0, c)
      }
      for (let c in this.sizeClass) {
        retVal.splice(0, 0, c)
      }

      if (this.corner) retVal.splice(0, 0, 'corner')
      for (let c in this.directionClass) {
        retVal.splice(0, 0, c)
      }

      return retVal
    }
  },
  render(h) {
    return h(
      'i',
      {
        'class': this.classList
      }
    )
  }
}
</script>
