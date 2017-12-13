<template>
  <div :class="classList" @click="onComboExpand" @mousedown.stop="doNothing">
    <input type="hidden" :value="selectedValue.value" :name="dataName" />
    <input v-if="search" v-model="searchValue" class="search" autocomplete="off" tabindex="0" />
    <div
      :class="{
        text: true,
        default: selection && !selectedValue.value,
        filtered:search && searchValue}">
      {{ displayValue }}
    </div>
    <i class="dropdown icon" @click.stop="onclick" />
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
    },
    fluid: Boolean
  },
  data() {
    return {
      selectedValue: '',
      searchValue: '',
      isCollapsed: true,
      menuClass: ['menu', 'transition', 'hidden'],
      styling: {}
    }
  },
  computed: {
    classList() {
      let retVal
      const activeDropdownStyle = ['ui', 'dropdown', 'active', 'visible']
      const inactiveDropdownStyle = ['ui', 'dropdown']
      if (this.isCollapsed) {
        retVal = inactiveDropdownStyle
      } else {
        retVal = activeDropdownStyle
      }

      if (this.fluid) {
        retVal.splice(1, 0, 'fluid')
      }
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
    },
    searchValue(val) {
      let others = this.$slots.default.filter(
        (item) => {
          return item.tag &&
          item.elm.textContent.toLowerCase().indexOf(val.toLowerCase()) >= 0
        }
      )
      for (let idx in others) {
        let item = others[idx]
        item.elm.classList.value = 'item'
      }

      let filtered = this.$slots.default.filter(
        (item) => {
          return item.tag &&
          item.elm.textContent.toLowerCase().indexOf(val.toLowerCase()) < 0
        }
      )
      for (let idx in filtered) {
        let item = filtered[idx]
        item.elm.classList.value = 'item filtered'
      }
    }
  },
  created() {
    let vm = this
    document.addEventListener('mousedown', this.onComboCancel)

    this.$on('changed', this.onSelect)
    this.selectedValue = this.value
  },
  beforeDestroy() {
    let vm = this
    document.removeEventListener('mousedown', this.onComboCancel)

    this.$off('changed', this.onSelect)
  },
  methods: {
    onclick() {
      this.isCollapsed = !this.isCollapsed
    },
    highlight(val) {
      let filtered = this.$slots.default.filter(
        (item) => {
          return item.tag &&
          item.elm.classList.value === 'item active selected'
        }
      )
      for (let idx in filtered) {
        let item = filtered[idx]
        console.log(item)
        if (item.componentOptions.propsData.value !== val) {
          item.elm.classList.value = 'item'
        }
      }
    },
    onSelect(val) {
      if(val) {
        this.selectedValue = val

        this.highlight(val)
      }
      this.onComboCancel()
    },
    onComboExpand() {
      this.isCollapsed = false
    },
    onComboCancel() {
      this.isCollapsed = true

      if (this.search && this.searchValue) {

        this.searchValue = ''
      }
    },
    doNothing() {

    }
  }
}
</script>

<style>

</style>
