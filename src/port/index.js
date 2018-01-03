//elements
import UiButton from '@/port/elements/UIButton'
import UiButtons from '@/port/elements/UIButtons'
import UiContainer from '@/port/elements/UIContainer'
import UiHeader from '@/port/elements/UIHeader'
import UiRail from '@/port/elements/UIRail'

//collections
import UiMenu from '@/port/collections/UIMenu'

//modules
import UiAccordion from '@/port/modules/UIAccordion'
import UiAccordionTitle from '@/port/modules/UIAccordionTitle'
import UiAccordionContent from '@/port/modules/UIAccordionContent'
import UiCheckbox from '@/port/modules/UICheckbox'
import UiDimmer from '@/port/modules/UIDimmer'
import UiDropdown from '@/port/modules/UIDropdown'
import UiDropdownItem from '@/port/modules/UIDropdownItem'

export default {
  install: function(Vue, options) {
    // Vue.directive('template', {
    //   bind: function () {},
    //   inserted: function () {},
    //   update: function () {},
    //   componentUpdated: function () {},
    //   unbind: function () {}
    // })
    Vue.component('SuiButton', UiButton)
    Vue.component('SuiButtons', UiButtons)
    Vue.component('SuiContainer', UiContainer)
    Vue.component('SuiHeader', UiHeader)
    Vue.component('SuiRail', UiRail)

    Vue.component('SuiMenu', UiMenu)

    Vue.component('SuiAccordion', UiAccordion)
    Vue.component('SuiAccordionTitle', UiAccordionTitle)
    Vue.component('SuiAccordionContent', UiAccordionContent)
    Vue.component('SuiCheckbox', UiCheckbox)
    Vue.component('SuiDimmer', UiDimmer)
    Vue.component('SuiDropdown', UiDropdown)
    Vue.component('SuiDropdownItem', UiDropdownItem)
  }
}
