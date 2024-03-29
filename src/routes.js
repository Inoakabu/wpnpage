import Vue from 'vue'
import Router from 'vue-router'
// Mainpage
import MainPage from './routes/route.main'
import RoutePage from './routes/route'
// Overview
import BandOverview from './routes/route.overview.bands'
import NewsOverview from './routes/route.overview.news'
import InfoOverview from './routes/route.info'
import ImpressumOverview from './routes/route.impressum'
import PrivacyPolicy from './routes/route.privacy_policy'
// Singlepages
import BandPage from './routes/route.band'
import NewsPage from './routes/route.news'
// Header.json for get the short urls
import { navigation } from '@/assets/json/header.json'
// language.json for langSwitch
import { defaultLang } from '@/assets/json/language.json'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: `/${defaultLang}`
    },
    {
      path: `/${navigation.tickets.route}`,
      name: `${navigation.tickets.route}`,
      beforeEnter () {
        location.href = navigation.tickets.url
      }
    },
    {
      path: '/:lang',
      component: RoutePage,
      children: [
        {
          path: '/',
          name: 'MainPage',
          component: MainPage
        },
        {
          path: `${navigation.bands.route}`,
          name: `${navigation.bands.route}`,
          component: BandOverview
        },
        {
          path: 'band/:id',
          name: 'BandPage',
          component: BandPage
        },
        {
          path: 'news/:id',
          name: 'NewsPage',
          component: NewsPage
        },
        {
          path: `${navigation.news.route}`,
          name: `${navigation.news.route}`,
          component: NewsOverview
        },
        {
          path: `${navigation.info.route}`,
          name: `${navigation.info.route}`,
          component: InfoOverview
        },
        {
          path: `impressum`,
          name: `impressum`,
          component: ImpressumOverview
        },
        {
          path: `privacypolicy`,
          name: `privacypolicy`,
          component: PrivacyPolicy
        }
      ]
    }
  ]
})