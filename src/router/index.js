import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import DocFrame from '@/pages/DocFrame'

//introduction
import GettingStarted from '@/wiki/introduction/GettingStarted'

//elements
import Button from '@/wiki/elements/Button'
import Divider from '@/wiki/elements/Divider'
import Flag from '@/wiki/elements/Flag'
import Header from '@/wiki/elements/Header'
import Icon from '@/wiki/elements/Icon'
import Image from '@/wiki/elements/Image'
import Input from '@/wiki/elements/Input'
import Label from '@/wiki/elements/Label'
import List from '@/wiki/elements/List'
import Loader from '@/wiki/elements/Loader'
import Rail from '@/wiki/elements/Rail'
import Reveal from '@/wiki/elements/Reveal'
import Segment from '@/wiki/elements/Segment'
import Step from '@/wiki/elements/Step'

//collections
import Breadcrumb from '@/wiki/collections/Breadcrumb'
import Form from '@/wiki/collections/Form'
import Grid from '@/wiki/collections/Grid'
import Menu from '@/wiki/collections/Menu'
import Message from '@/wiki/collections/Message'
import Table from '@/wiki/collections/Table'

//views
import Advertisement from '@/wiki/views/Advertisement'
import Card from '@/wiki/views/Card'
import Comment from '@/wiki/views/Comment'
import Feed from '@/wiki/views/Feed'
import Item from '@/wiki/views/Item'
import Statistic from '@/wiki/views/Statistic'

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
          path: 'divider',
          component: Divider
        },
        {
          path: 'flag',
          component: Flag
        },
        {
          path: 'header',
          component: Header
        },
        {
          path: 'icon',
          component: Icon
        },
        {
          path: 'image',
          component: Image
        },
        {
          path: 'input',
          component: Input
        },
        {
          path: 'label',
          component: Label
        },
        {
          path: 'list',
          component: List
        },
        {
          path: 'loader',
          component: Loader
        },
        {
          path: 'rail',
          component: Rail
        },
        {
          path: 'reveal',
          component: Reveal
        },
        {
          path: 'segment',
          component: Segment
        },
        {
          path: 'step',
          component: Step
        }
      ]
    },
    {
      path: '/collections',
      component: DocFrame,
      children: [
        {
          path: 'breadcrumb',
          component: Breadcrumb
        },
        {
          path: 'form',
          component: Form
        },
        {
          path: 'grid',
          component: Grid
        },
        {
          path: 'menu',
          component: Menu
        },
        {
          path: 'message',
          component: Message
        },
        {
          path: 'table',
          component: Table
        }
      ]
    },
    {
      path: '/views',
      component: DocFrame,
      children: [
        {
          path: 'advertisement',
          component: Advertisement
        },
        {
          path: 'card',
          component: Card
        },
        {
          path: 'Comment',
          component: Comment
        },
        {
          path: 'feed',
          component: Feed
        },
        {
          path: 'item',
          component: Item
        },
        {
          path: 'statistic',
          component: Statistic
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
