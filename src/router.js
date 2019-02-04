import Vue from 'vue'
import Router from 'vue-router'
import Band from './components/views/band.vue'
import PageHeader from './components/layout/PageHeader.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHeader
    },
    {
      path: '/band',
      name: 'Band',
      component: Band
    }
  ]
})
