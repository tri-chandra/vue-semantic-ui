// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import semanticui from './port'

import WikiTemplate from '@/wiki/components/WikiTemplate'

require('semantic-ui-css/semantic.css')
require('prismjs/prism.js')
require('prismjs/themes/prism.css')
// require('prismjs/themes/prism-okaidia.css')

Vue.config.productionTip = false

Vue.use(semanticui)

Vue.component('WikiTemplate', WikiTemplate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
