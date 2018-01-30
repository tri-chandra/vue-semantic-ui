<template>
  <div :class="classList">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

import colorMixin from '@/port/mixins/ColorMixin'
import sizeMixin from '@/port/mixins/SizeMixin'
import gridMixin from '@/port/mixins/GridMixin'

export default {
  mixins: [colorMixin, sizeMixin, gridMixin],
  props: {
    floated: Boolean,
    labeled: Boolean,
    icon: Boolean,
    item: Boolean,

    vertical: Boolean,
    sub: Boolean,
    right: Boolean,
    compact: Boolean,
    secondary: Boolean,
    pointing: Boolean,
    text: Boolean,
    pagination: Boolean,

    fixed: {
      type: String,
      validator(val) {
        return ['top', 'bottom', 'left', 'right'].includes(val)
      }
    },
    stackable: Boolean,
    inverted: Boolean,
    fluid: Boolean
  },
  computed: {
    classList() {
      let retVal = ['ui', 'menu']
      if (this.sub) retVal = ['menu']

      if (this.right) retVal.splice(1, 0, 'right')
      if (this.floated) retVal.splice(1, 0, 'floated')
      if (this.icon) retVal.splice(1, 0, 'icon')
      if (this.labeled) retVal.splice(1, 0, 'labeled')
      if (this.vertical) retVal.splice(1, 0, 'vertical')
      if (this.compact) retVal.splice(1, 0, 'compact')
      if (this.secondary) retVal.splice(1, 0, 'secondary')
      if (this.pointing) retVal.splice(1, 0, 'pointing')
      if (this.text) retVal.splice(1, 0, 'text')
      if (this.pagination) retVal.splice(1, 0, 'pagination')
      if (this.fixed) retVal.splice(1, 0, `${this.fixed} fixed`)
      if (this.stackable) retVal.splice(1, 0, 'stackable')
      if (this.inverted) retVal.splice(1, 0, 'inverted')
      if (this.fluid) retVal.splice(1, 0, 'fluid')

      for (let c in this.colorClass) {
        retVal.splice(1, 0, c)
      }
      for (let c in this.sizeClass) {
        retVal.splice(1, 0, c)
      }
      for (let c in this.gridClass) {
        retVal.splice(1, 0, `${c} item`)
      }

      return retVal
    }
  },
  methods: {
    onChildClicked(e) {
      for (let idx in this.$slots.default) {
        let item = this.$slots.default[idx]
        if (item.tag && item.tag.endsWith('SuiMenuItem')) {
          let instance = item.componentInstance

          if (instance._uid !== e.id) {
            Vue.set(instance, 'isActive', false)
          } else {
            Vue.set(instance, 'isActive', true)
          }
        }
      }
    }
  },
  created() {
    this.$on('childClicked', this.onChildClicked)
  },
  beforeDestroy() {
    this.$off('childClicked', this.onChildClicked)
  }
}
</script>
