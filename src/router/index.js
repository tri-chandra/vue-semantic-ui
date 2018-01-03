import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import DocFrame from '@/pages/DocFrame'

//introduction
import GettingStarted from '@/wiki/introduction/GettingStarted'

//elements
import Button from '@/wiki/elements/Button'
import Flag from '@/wiki/elements/Flag'

//modules
import Accordion from '@/wiki/modules/Accordion'
import Checkbox from '@/wiki/modules/Checkbox'
import Dimmer from '@/wiki/modules/Dimmer'
import Dropdown from '@/wiki/modules/Dropdown'
import Embed from '@/wiki/modules/Embed'
import Modal from '@/wiki/modules/Modal'
import Nag from '@/wiki/modules/Nag'
import Popup from '@/wiki/modules/Popup'
import Progress from '@/wiki/modules/Progress'
import Rating from '@/wiki/modules/Rating'
import Search from '@/wiki/modules/Search'
import Shape from '@/wiki/modules/Shape'
import Sidebar from '@/wiki/modules/Sidebar'
import Sticky from '@/wiki/modules/Sticky'
import Tab from '@/wiki/modules/Tab'
import Transition from '@/wiki/modules/Transition'

Vue.use(Router)

export default new Router({
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) return { selector: to.hash }
    else if (savedPosition) return savedPosition
    else return { x:0, y:0}
  },
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/introduction',
      component: DocFrame,
      children: [
        {
          path: '',
          alias: 'getting-started',
          component: GettingStarted
        }
      ]
    },
    {
      path: '/elements',
      component: DocFrame,
      children: [
        {
          path: 'button',
          component: Button
        },
        {
          path: 'flag',
          component: Flag
        }
      ]
    },
    {
      path: '/modules',
      component: DocFrame,
      children: [
        {
          path: 'accordion',
          component: Accordion
        },
        {
          path: 'checkbox',
          component: Checkbox
        },
        {
          path: 'dimmer',
          component: Dimmer
        },
        {
          path: 'dropdown',
          component: Dropdown
        },
        {
          path: 'embed',
          component: Embed
        },
        {
          path: 'modal',
          component: Modal
        },
        {
          path: 'nag',
          component: Nag
        },
        {
          path: 'popup',
          component: Popup
        },
        {
          path: 'progress',
          component: Progress
        },
        {
          path: 'rating',
          component: Rating
        },
        {
          path: 'search',
          component: Search
        },
        {
          path: 'shape',
          component: Shape
        },
        {
          path: 'sidebar',
          component: Sidebar
        },
        {
          path: 'sticky',
          component: Sticky
        },
        {
          path: 'tab',
          component: Tab
        },
        {
          path: 'transition',
          component: Transition
        }
      ]
    }
  ]
})
