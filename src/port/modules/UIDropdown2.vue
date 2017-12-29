<template>
  <div :class="classList" @click="onClick" @mousedown.stop="doNothing">
    <!-- input element -->
    <select v-if="multiple" multiple :value="selectedValues" :name="formName"></select>
    <input v-else type="hidden" :value="selectedValues" :name="formName" />

    <!-- search element -->
    <input v-if="search" v-model="searchValue" class="search" autocomplete="off" tabindex="0" @click.stop="onComboExpand" />

    <!-- display elements -->
    <a
      v-if="multiple"
      class="ui label transition visible"
      data-value="AL"
      style="display: inline-block !important;">
      Alabama
      <i class="delete icon"></i>
    </a>
    <div
      v-else
      :class="placeholderClass"
      v-html="displayValue"></div>

    <!-- dropdown arrow -->
    <i class="dropdown icon" @click.stop="onClick" />

    <!-- slot element -->
    <div :class="menuClass" v-bind:style="styling">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    value: Array,
    search: Boolean,
    multiple: Boolean,
    selection: Boolean,
    defaultText: {
      type: String,
      default: 'Select Item'
    },
    formName: String,
    animationDuration: {
      type: Number,
      default: 200
    },
    fluid: Boolean
  },
  data() {
    return {
      // state
      isCollapsed: true,
      styling: {},

      // data
      selectedValues: [],
      selectedDisplay: [],
      selectedText: [],
      searchValue: '',

      // constants
      menuClass: ['menu', 'transition', 'hidden']
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
    placeholderClass() {
      let retVal = ['text']
      if (this.selection && !this.selectedValues.length) {
        retVal.splice(0, 0, 'default')
      }
      if (this.search && this.searchValue) {
        retVal.push('filtered')
      }

      return retVal
    },
    displayValue() {
      if (this.selectedDisplay.length) return this.selectedDisplay[0]
      else return this.defaultText
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
        var event = new CustomEvent('mousedown', {detail: this})
        document.dispatchEvent(event)

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
    searchValue(val) {console.log('search')
      let others = this.$slots.default.filter(
        (item) => {
          return item.tag && item.elm &&
          item.elm.textContent.toLowerCase().indexOf(val.toLowerCase()) >= 0
        }
      )

      for (let idx in others) {
        let item = others[idx]
        item.componentInstance.filtered = false
      }

      let filtered = this.$slots.default.filter(
        (item) => {
          return item.tag && item.elm &&
          item.elm.textContent.toLowerCase().indexOf(val.toLowerCase()) < 0
        }
      )
      for (let idx in filtered) {
        let item = filtered[idx]
        item.componentInstance.filtered = true
      }
    }
  },
  created() {
    document.addEventListener('mousedown', this.onComboCollapsed)

    this.$on('changed', this.onSelect)
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.onComboCollapsed)

    this.$off('changed', this.onSelect)
  },
  methods: {
    // events
    onSelect(val) {
      if(val) {
        if (!this.multiple) {
          this.clearValues()
        }
        this.selectedValues.push(val.value)
        this.selectedDisplay.push(val.display)
        this.selectedText.push(val.text)

        this.highlight()

        this.$emit('input', this.selectedValues)
      }
      this.onComboCollapsed()
    },
    onComboExpand() {
      this.isCollapsed = false
    },
    onComboCollapsed(event) {
      if (!event || this._uid != event.detail._uid) {
        this.isCollapsed = true
        this.searchValue = ''
      }
    },
    onClick() {
      this.isCollapsed = !this.isCollapsed
    },
    doNothing() {

    },

    // functions
    clearValues() {
      this.selectedValues = []
      this.selectedDisplay = []
      this.selectedText = []
    },
    highlight() {
      let items = this.$slots.default.filter(
        (item) => {
          return item.tag
        }
      )
      for (let idx in items) {
        let item = items[idx]
        item.componentInstance.active = false
        item.componentInstance.selected = false
      }

      let filtered = items.filter(
        (item) => {
          return this.selectedValues.includes(item.componentOptions.propsData.value)
        }
      )
      for (let idx in filtered) {
        let item = filtered[idx]
        item.componentInstance.active = true
        item.componentInstance.selected = true
      }
    },
    resetFormatting() {
      let others = this.$slots.default.filter(
        (item) => {
          return item.tag
        }
      )

      for (let idx in others) {
        let item = others[idx]
        item.componentInstance.filtered = false
      }
    }
  }
}
</script>
