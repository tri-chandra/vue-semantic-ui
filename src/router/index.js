import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import DocFrame from '@/pages/DocFrame'

//introduction
import GettingStarted from '@/wiki/introduction/GettingStarted'

//elements
import Button from '@/wiki/elements/Button'

//modules
import Accordion from '@/wiki/modules/Accordion'

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
        }
      ]
    }
  ]
})
