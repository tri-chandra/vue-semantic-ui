<template>
  <div :class="classList" @click="onclick" @mousedown.stop="doNothing">
    <input v-if="!multiple" type="hidden" :value="selectedValue.value" :name="dataName" />
    <select v-else multiple :value="selectedValue.value">
    </select>

    <input v-if="search" v-model="searchValue" class="search" autocomplete="off" tabindex="0" @mousedown.stop="doNothing" />

    <div
      :class="{
        text: true,
        default: selection && !selectedValue.value,
        filtered:search && searchValue}">
      {{ displayValue }}
    </div>
    <i :class="arrowIcon ? `${arrowIcon} icon` : 'dropdown icon'" @click.stop="onclick" />

    <a
      v-if="multiple"
      class="ui label transition visible"
      data-value="AL"
      style="display: inline-block !important;">
      Alabama
      <i class="delete icon"></i>
    </a>

    <div :class="menuClass" v-bind:style="styling">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    value: Boolean,
    search: Boolean,
    multiple: Boolean,
    selection: Boolean,
    defaultText: {
      type: String,
      default: 'Select Item'
    },
    dataName: String,
    arrowIcon: String,
    animationDuration: {
      type: Number,
      default: 200
    },
    fluid: Boolean,
    labeled: Boolean,
    icon: Boolean
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
    selectedValue(val) {
      this.highlight(val.value)
    },
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
    searchValue(val) {
      let others = this.$slots.default.filter(
        (item) => {
          return item.tag &&
          item.elm.textContent.toLowerCase().indexOf(val.toLowerCase()) >= 0
        }
      )

      for (let idx in others) {
        let item = others[idx]
        item.elm.classList.remove('filtered')
      }

      let filtered = this.$slots.default.filter(
        (item) => {
          return item.tag &&
          item.elm.textContent.toLowerCase().indexOf(val.toLowerCase()) < 0
        }
      )
      for (let idx in filtered) {
        let item = filtered[idx]
        item.elm.classList.add('filtered')
      }
    }
  },
  created() {
    document.addEventListener('mousedown', this.onComboCollapsed)

    this.$on('changed', this.onSelect)
    this.selectedValue = this.value
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.onComboCollapsed)

    this.$off('changed', this.onSelect)
  },
  methods: {
    onclick() {
      this.isCollapsed = !this.isCollapsed
    },
    highlight(val) {
      let items = this.$slots.default.filter(
        (item) => {
          return item.tag
        }
      )
      for (let idx in items) {
        let item = items[idx]
        item.elm.classList.remove('active')
        item.elm.classList.remove('selected')
      }

      let filtered = items.filter(
        (item) => {
          return item.componentOptions.propsData.value === val
        }
      )
      for (let idx in filtered) {
        let item = filtered[idx]
        item.elm.classList.add('active')
        item.elm.classList.add('selected')
        // item.elm.classList.add('filtered')
      }
    },
    onSelect(val) {
      if(val) {
        this.selectedValue = val
      }
      this.onComboCollapsed()
    },
    onComboExpand() {
      this.isCollapsed = false
    },
    onComboCollapsed(doNotCollapse) {
      if (!doNotCollapse || this._uid != doNotCollapse.detail._uid) {
        this.isCollapsed = true

        if (this.search && this.searchValue) {
          let vm = this
          Vue.nextTick().then(() => {
            let result = vm.$slots.default.filter(
              (item) => {
                return item.tag &&
                item.elm.textContent.toLowerCase().indexOf(vm.searchValue.toLowerCase()) >= 0
              }
            )

            if (result.length > 0) {
              vm.selectedValue = {
                value: result[0].componentOptions.propsData.value,
                text: result[0].elm.textContent
              }
            }

            vm.searchValue = ''
          })
        }
      }
    },
    doNothing() {

    }
  }
}
</script>

<style>

</style>
