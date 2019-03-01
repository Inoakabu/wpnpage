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

// Header.json for get the short urls
import {navigation} from '@/assets/json/header.json'

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
      path: `/${navigation.tickets.route}`,
      name: 'TicketPage',
      beforeEnter () {
        location.href = navigation.tickets.url
      }
    },
    {
      path: `/${navigation.shop.route}`,
      name: 'ShopPage',
      beforeEnter () {
        location.href = navigation.shop.url
      }
    },
    {
      path: `/${navigation.bands.route}`,
      name: 'BandOverview',
      component: BandOverview,
      children: [
        {
          path: `/${navigation.bands.route}`+'/:id',
          name: 'BandPage',
          component: BandPage
        }
      ]
    },
    // {
    //   path: '/band/:id',
    //   name: 'BandPage',
    //   component: BandPage
    // },
    {
      path: `/${navigation.news.route}`,
      name: 'NewsOverview',
      component: NewsOverview
    },
    {
      path: '/news/:id',
      name: 'NewsPage',
      component: NewsPage
    },
    {
      path: `/${navigation.info.route}`,
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
