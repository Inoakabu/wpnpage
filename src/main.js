import Vue from 'vue'
import App from './App'
import router from './routes'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  data: {
    globalLang: 'en',
  },
  render: h => h(App)
}).$mount('#app')
