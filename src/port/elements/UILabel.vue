<script>
import sizeMixin from '@/port/mixins/SizeMixin'
import colorMixin from '@/port/mixins/ColorMixin'

export default {
  mixins: [sizeMixin, colorMixin],
  props: {
    image: Boolean,
    tag: Boolean,
    ribbon: Boolean,
    attached: Boolean,
    horizontal: Boolean,
    floating: Boolean,
    empty: Boolean,
    basic: Boolean,

    leftCorner: Boolean,
    rightCorner: Boolean,

    pointing: Boolean,
    pointingBelow: Boolean,
    leftPointing: Boolean,
    rightPointing: Boolean,

    link: Boolean,
    detail: String
  },
  computed: {
    classList() {
      let retVal = ['ui', 'label']

      for (let c in this.colorClass) {
        retVal.splice(1, 0, c)
      }
      for (let c in this.sizeClass) {
        retVal.splice(1, 0, c)
      }

      if (this.image) retVal.splice(1, 0, 'image')

      if (this.pointing) retVal.splice(1, 0, 'pointing')
      else if (this.pointingBelow) retVal.splice(1, 0, 'pointing below')
      else if (this.leftPointing) retVal.splice(1, 0, 'left pointing')
      else if (this.rightPointing) retVal.splice(1, 0, 'right pointing')

      if (this.leftCorner) retVal.splice(1, 0, 'left corner')
      if (this.rightCorner) retVal.splice(1, 0, 'right corner')

      if (this.tag) retVal.splice(1, 0, 'tag')
      if (this.ribbon) retVal.splice(1, 0, 'ribbon')
      if (this.attached) retVal.splice(1, 0, 'attached')
      if (this.horizontal) retVal.splice(1, 0, 'horizontal')
      if (this.floating) retVal.splice(1, 0, 'floating')
      if (this.empty) retVal.splice(1, 0, 'empty')
      if (this.basic) retVal.splice(1, 0, 'basic')

      return retVal
    }
  },
  render(h) {
    let children = []

    if (this.detail) {
      children.push(h(
        'div',
        { 'class' : 'detail' },
        this.detail
      ))
    }

    children.splice(0, 0, this.$slots.default)

    return h(
      this.link? 'a' : 'div',
      {
        'class': this.classList
      },
      children
    )
  }
}
</script>
