<template>
  <main>
    <introComp/>
    <bandsComp/>
    <newsComp/>
    <instaComp/>
    <history/>
  </main>
</template>

<script>
import introComp from '../components/intro/comp.intro'
import bandsComp from '../components/bands/comp.band.list'
import newsComp from '../components/news/comp.news.list'
import instaComp from '../components/social/comp.instagram.list'
import history from '../components/history/comp.history'

export default {
  name: 'MainPage',
  components: {
    introComp,
    bandsComp,
    newsComp,
    instaComp,
    history
  }
}
</script>

<style>

</style>
