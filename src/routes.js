import Vue from 'vue'
import Router from 'vue-router'
// Mainpage
import MainPage from './routes/route.main'
import RoutePage from './routes/route'
// Overview
import BandOverview from './routes/route.overview.bands'
// import NewsOverview from './routes/route.overview.news'
import InfoOverview from './routes/route.info'
import DarkartOverView from './routes/route.overview.darkart'
import ImpressumOverview from './routes/route.impressum'
import PressOverview from './routes/route.press.vue'
import PrivacyPolicy from './routes/route.privacy_policy'
import Blog from './routes/blog.route.vue'
import Crew from './routes/route.crew.overview.vue'
// Singlepages
import BandPage from './routes/route.band'
// import NewsPage from './routes/route.news'
import CrewPage from './routes/route.crew'
import Artist from './routes/route.darkart'
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
      beforeEnter() {
        location.href = navigation.tickets.url
      }
    },
    {
      path: `/${navigation.dmed.route}`,
      name: `${navigation.dmed.route}`,
      beforeEnter() {
        location.href = navigation.dmed.url
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
        // {
        //   path: 'news/:id',
        //   name: 'NewsPage',
        //   component: NewsPage
        // },
        // {
        //   path: `${navigation.news.route}`,
        //   name: `${navigation.news.route}`,
        //   component: NewsOverview
        // },
        {
          path: `${navigation.blog.route}`,
          name: `${navigation.blog.route}`,
          component: Blog
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
        },
        {
          path: `${navigation.crew.route}`,
          name: `${navigation.crew.route}`,
          component: Crew
        },
        {
          path: 'crew/:id',
          name: 'CrewPage',
          component: CrewPage
        },
        {
          path: `${navigation.darkart.route}`,
          name: `${navigation.darkart.route}`,
          component: DarkartOverView
        },
        {
          path: `${navigation.press.route}`,
          name: `${navigation.press.route}`,
          component: PressOverview
        },
        {
          path: 'artist/:id',
          name: 'ArtistPage',
          component: Artist
        },
      ]
    }
  ]
})