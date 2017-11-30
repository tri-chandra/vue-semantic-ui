<script>
import colorMixin from '@/port/mixins/ColorMixin'
import sizeMixin from '@/port/mixins/SizeMixin'
import gridMixin from '@/port/mixins/GridMixin'
import directionMixin from '@/port/mixins/DirectionMixin'

export default {
  mixins: [colorMixin, sizeMixin, gridMixin, directionMixin],
  props: {
    animated: Boolean,
    vertical: Boolean,
    fade: Boolean,
    icon: Boolean,
    labeled: Boolean,
    rightLabeled: Boolean,
    floated: {
      type: String,
      validator: function(val) {
        return ['left', 'right'].includes(val)
      }
    },
    attached: Boolean,
    basic: Boolean,
    active: Boolean,
    disabled: Boolean,
    loading: Boolean,
    compact: Boolean,
    toggle: Boolean,
    fluid: Boolean,
    circular: Boolean
  },
  data() {
    return {

    }
  },
  computed: {
    coreClass: function() { return {ui:true, button:true} }
  },
  methods: {
    click: function(e) {
      //e.detail && this.$el.blur()
      this.$emit('click', e)
    }
  },
  render: function(h) {
    var classList = this.coreClass

    if (this.$props.rightLabeled) {
      delete this.$props.rightLabeled
      this.$props['right labeled'] = true
    }
    if (this.$props.google) {
      delete this.$props.google
      this.$props['google plus'] = true
    }
    for (var attr in this.$props) {
      if (this.$props[attr] === true) {
        classList[attr] = this.$props[attr]
      } else if (typeof this.$props[attr] === 'string') {
        classList[`${this.$props[attr]} ${attr}`] = true
      }
    }

    var children = []
    if (this.$slots.default) {
      for (var idx in this.$slots.default) {
        children.push(this.$slots.default[idx])
      }
    }
    if (this.$slots.visible) {
      this.$slots.visible[0].data.staticClass += ' visible content'
      children.push(this.$slots.visible[0])
    }
    if (this.$slots.hidden) {
      this.$slots.hidden[0].data.staticClass += ' hidden content'
      children.push(this.$slots.hidden[0])
    }

    return h(
      children.length>1 ? 'div' : 'button',
      {
        'class': classList,
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
