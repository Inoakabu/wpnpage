import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './routes/route.Main'
import BandPage from './routes/route.band'
import NewsPage from './routes/route.news'
import InfoPage from './routes/route.info'
import ImpressumPage from './routes/route.impressum'
import BandSinglePage from './routes/route.band.single'
import NewsSinglePage from './routes/route.news.single'

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
      name: 'TicketPage'
    },
    {
      path: '/Bands',
      name: 'BandPage',
      component: BandPage
    },
    {
      path: '/Bands/:bId?:name',
      name: 'BandSinglePage',
      component: BandSinglePage
    },
    {
      path: '/News',
      name: 'NewsPage',
      component: NewsPage
    },
    {
      path: '/News/:id?:title',
      name: 'NewsSinglePage',
      component: NewsSinglePage
    },
    {
      path: '/Info',
      name: 'InfoPage',
      component: InfoPage
    },
    {
      path: '/Impressum',
      name: 'ImpressumPage',
      component: ImpressumPage
    }
  ]
})
