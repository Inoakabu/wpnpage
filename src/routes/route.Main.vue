<template>
  <main>
    <introComp /> <bandsComp /> <newsComp /> <instaComp /> <history /> <foot />
  </main>
</template>

<script>
import introComp from '../components/intro/comp.intro'
import bandsComp from '../components/bands/comp.bands'
import newsComp from '../components/news/comp.news'
import instaComp from '../components/social/comp.instagram'
import history from '../components/history/comp.history'
import foot from '../components/footer/comp.footer'

export default {
  name: 'MainPage',
  components: {
    introComp,
    bandsComp,
    newsComp,
    instaComp,
    history,
    foot
  }
}
</script>

<style>

</style>
