import Vue from 'vue'
import Router from 'vue-router'

// Mainpage
import MainPage from './routes/route.main'

// Overview
import BandOverview from './routes/route.overview.bands'
import NewsOverview from './routes/route.overview.news'
import InfoOverview from './routes/route.info'
import ImpressumOverview from './routes/route.impressum'

// Singlepages
import BandPage from './routes/route.band'
import NewsPage from './routes/route.news'

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
      name: 'BandOverview',
      component: BandOverview
    },
    {
      path: '/band/:name',
      name: 'BandPage',
      component: BandPage
    },
    {
      path: '/news',
      name: 'NewsOverview',
      component: NewsOverview
    },
    {
      path: '/news/:id',
      name: 'NewsPage',
      component: NewsPage
    },
    {
      path: '/info',
      name: 'InfoOverview',
      component: InfoOverview
    },
    {
      path: '/impressum',
      name: 'ImpressumOverview',
      component: ImpressumOverview
    }
  ]
})
