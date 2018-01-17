//elements
import UiButton from '@/port/elements/UIButton'
import UiButtons from '@/port/elements/UIButtons'
import UiContainer from '@/port/elements/UIContainer'
import UiFlag from '@/port/elements/UIFlag'
import UiHeader from '@/port/elements/UIHeader'
import UiIcon from '@/port/elements/UIIcon'
import UiIcons from '@/port/elements/UIIcons'
import UiImage from '@/port/elements/UIImage'
import UiInput from '@/port/elements/UIInput'
import UiLabel from '@/port/elements/UILabel'
import UiList from '@/port/elements/UIList'
import UiListContent from '@/port/elements/UIListContent'
import UiListItem from '@/port/elements/UIListItem'
import UiLoader from '@/port/elements/UILoader'
import UiReveal from '@/port/elements/UIReveal'
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
    Vue.component('SuiFlag', UiFlag)
    Vue.component('SuiHeader', UiHeader)
    Vue.component('SuiIcon', UiIcon)
    Vue.component('SuiIcons', UiIcons)
    Vue.component('SuiImage', UiImage)
    Vue.component('SuiInput', UiInput)
    Vue.component('SuiLabel', UiLabel)
    Vue.component('SuiList', UiList)
    Vue.component('SuiListContent', UiListContent)
    Vue.component('SuiListItem', UiListItem)
    Vue.component('SuiLoader', UiLoader)
    Vue.component('SuiReveal', UiReveal)
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
