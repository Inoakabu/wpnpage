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
      path: '/tickets',
      name: 'TicketPage'
    },
    {
      path: '/bands',
      name: 'BandPage',
      component: BandPage
    },
    {
      path: '/bands/:name',
      name: 'BandSinglePage',
      component: BandSinglePage
    },
    {
      path: '/news',
      name: 'NewsPage',
      component: NewsPage
    },
    {
      path: '/news/:id?:title',
      name: 'NewsSinglePage',
      component: NewsSinglePage
    },
    {
      path: '/info',
      name: 'InfoPage',
      component: InfoPage
    },
    {
      path: '/impressum',
      name: 'ImpressumPage',
      component: ImpressumPage
    }
  ]
})
