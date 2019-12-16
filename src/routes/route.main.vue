<template>  
  <main>
    <introComp v-if="this.active === this.isActive.intro"/>
    <runningorderComp v-if="active === this.isActive.runningorder"/>
    <bandsComp v-if="active === this.isActive.bands"/>
    <newsComp v-if="active === this.isActive.news"/>
    <instaComp v-if="active === this.isActive.instagram"/>
    <history v-if="active === this.isActive.history"/>
  </main>
</template>

<script>
import introComp from '../components/intro/comp.intro'
import bandsComp from '../components/bands/comp.band.list'
import newsComp from '../components/news/comp.news.list'
import instaComp from '../components/social/comp.instagram.list'
import history from '../components/history/comp.history'
import runningorderComp from '../components/runningorder/comp.runningorder'

import mainShow from '../assets/json/main.json'

export default {
  name: 'MainPage',
  components: {
    introComp,
    runningorderComp,
    bandsComp,
    newsComp,
    instaComp,
    history
  },
  data () {
    return {
      active: true,
      isActive: mainShow.show
    }
  }
}
</script>

<style>
</style>
