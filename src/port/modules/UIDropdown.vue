<template>
  <div :class="classList" @click="onclick">
    <input type="hidden" :value="selectedValue.value" :name="dataName" />
    <input v-if="search" class="search" autocomplete="off" tabindex="0" />
    <div :class="{text: true, default: selection && !selectedValue.value}">{{ displayValue }}</div>
    <i class="dropdown icon" />
    <div :class="menuClass" v-bind:style="styling">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    search: Boolean,
    selection: Boolean,
    defaultText: {
      type: String,
      default: 'Select Item'
    },
    dataName: String,
    animationDuration: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      selectedValue: '',
      isCollapsed: true,
      menuClass: ['menu', 'transition', 'hidden'],
      styling: {}
    }
  },
  computed: {
    classList() {
      let retVal = ['ui', 'dropdown', 'active', 'visible']

      if (this.search) {
        retVal.splice(1, 0, 'search')
      }
      if (this.selection) {
        retVal.splice(1, 0, 'selection')
      }

      return retVal
    },
    displayValue() {
      if (this.selectedValue.value) {
        return this.selectedValue.text
      } else {
        return this.defaultText
      }
    }
  },
  watch: {
    isCollapsed(val) {
      if (val) {
        this.menuClass = ['menu', 'animating', 'transition', 'slide', 'down', 'out']
        this.styling = {
          display: 'block !important',
          'animation-duration': `${this.animationDuration}ms`
        }

        let vm = this
        setTimeout(function() {
          vm.menuClass = ['menu', 'transition', 'hidden']
          vm.styling = false
        }, vm.animationDuration)
      } else {
        this.menuClass = ['menu', 'animating', 'transition', 'slide', 'down', 'in']
        this.styling = {
          display: 'block !important',
          'animation-duration': `${this.animationDuration}ms`
        }

        let vm = this
        setTimeout(function() {
          vm.menuClass = ['menu', 'transition', 'visible']
          vm.styling = false
        }, vm.animationDuration)
      }
    }
  },
  created() {
    this.$on('changed', this.onSelect)
    this.selectedValue = this.value
  },
  mounted() {
    let x = 0
    for (let idx in this.$slots.default) {
      if (this.$slots.default[idx].tag) {
        x++
        let item = this.$slots.default[idx]
        if (x%2 == 0) {
          item.elm.classList.value = 'item filtered'
        }
        console.log(item.elm.classList)
        console.log(x)
      }
    }
  },
  beforeDestroy() {
    this.$off('changed', this.onSelect)
  },
  methods: {
    onclick() {
      this.isCollapsed = !this.isCollapsed
      console.log(this)
    },
    onSelect(val) {
      if(val) {
        this.selectedValue = val
      }
    }
  }
}
</script>

<style>

</style>
