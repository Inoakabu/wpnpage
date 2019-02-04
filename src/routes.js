import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './routes/route.Main'
import BandPage from './routes/route.band'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/Tickets',
      name: 'TicketPage',
      component: BandPage // placeholder TicketPage
    },
    {
      path: '/Bands',
      name: 'BandPage',
      component: BandPage
    },
    // {
    //   path: '/Bands/:id',
    //   name: 'BandSinglePage',
    //   component: BandSinglePage
    // },
    {
      path: '/News',
      name: 'NewsPage',
      component: BandPage // placeholder NewsPage
    },
    {
      path: '/FAQ',
      name: 'FAQPage',
      component: BandPage // placeholder FAQPage
    }
  ]
})
