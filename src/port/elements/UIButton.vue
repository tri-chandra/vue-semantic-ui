<script>
import colorMixin from '@/port/mixins/ColorMixin'
import sizeMixin from '@/port/mixins/SizeMixin'
import gridMixin from '@/port/mixins/GridMixin'
import directionMixin from '@/port/mixins/DirectionMixin'

export default {
  mixins: [colorMixin, sizeMixin, gridMixin, directionMixin],
  props: {
    tag: {
      type: String,
      default: 'div'
    },

    animated: Boolean,
    verticalAnimated: Boolean,
    fadeAnimated: Boolean,

    labeled: Boolean,
    leftLabeled: Boolean,
    rightLabeled: Boolean,

    leftFloated: Boolean,
    rightFloated: Boolean,

    icon: Boolean,
    basic: Boolean,
    active: Boolean,
    disabled: Boolean,
    loading: Boolean,
    compact: Boolean,
    toggle: Boolean,
    fluid: Boolean,
    circular: Boolean
  },
  computed: {
    coreClass() { 
      return 'button'
    },
    classList() {
      let retVal = ['ui', this.coreClass]

      if (this.animated) retVal.splice(1, 0, 'animated')
      else if (this.verticalAnimated) retVal.splice(1, 0, 'vertical animated')
      else if (this.fadeAnimated) retVal.splice(1, 0, 'fade animated')
      
      if (this.labeled) retVal.splice(1, 0, 'labeled')
      else if (this.leftLabeled) retVal.splice(1, 0, 'left labeled')
      else if (this.rightLabeled) retVal.splice(1, 0, 'right labeled')

      if (this.icon) retVal.splice(1, 0, 'icon')
      if (this.basic) retVal.splice(1, 0, 'basic')
      if (this.active) retVal.splice(1, 0, 'active')
      if (this.disabled) retVal.splice(1, 0, 'disabled')
      if (this.loading) retVal.splice(1, 0, 'loading')
      if (this.compact) retVal.splice(1, 0, 'compact')
      if (this.toggle) retVal.splice(1, 0, 'toggle')
      if (this.fluid) retVal.splice(1, 0, 'fluid')
      if (this.circular) retVal.splice(1, 0, 'circular')

      if (this.leftFloated) retVal.splice(1, 0, 'left floated')      
      else if (this.rightFloated) retVal.splice(1, 0, 'right floated')      

      for (let c in this.colorClass) {
        retVal.splice(1, 0, c)
      }
      for (let c in this.sizeClass) {
        retVal.splice(1, 0, c)
      }
      for (let c in this.gridMixin) {
        retVal.splice(1, 0, c)
      }
      for (let c in this.directionMixin) {
        retVal.splice(1, 0, c)
      }

      return retVal
    }
  },
  methods: {
    click: function(e) {
      //e.detail && this.$el.blur()
      this.$emit('click', e)
    }
  },
  render: function(h) {
    var children = []
    
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
      this.tag,
      {
        'class': this.classList,
        on: {
          click: this.click
        }
      },
      children
    )
  }
}

// <template>
//   <button v-if="$slots.default.length == 1"
//     :class="['ui', 'button', appliedClass, colorClass, sizeClass, directionClass]"
//     @click="click">
//     <slot></slot>
//     <slot name="visible" class="visible content"></slot>
//     <slot name="hidden" class="hidden content"></slot>
//   </button>
//   <div v-else
//     :class="['ui', 'button', appliedClass, colorClass, sizeClass, directionClass]"
//     @click="click">
//     <slot></slot>
//     <slot name="visible" class="visible content"></slot>
//     <slot name="hidden" class="hidden content"></slot>
//   </div>
// </template>
</script>
