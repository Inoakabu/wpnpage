<template>
  <main>
    <introComp /> <bandsComp /> <newsComp /> <instaComp />
    <!-- <router-link to="/Bands">Bands</router-link> -->
  </main>
</template>

<script>
import introComp from '../components/intro/comp.intro'
import bandsComp from '../components/bands/comp.bands'
import newsComp from '../components/news/comp.news'
import instaComp from '../components/social/comp.instagram'

export default {
  name: 'MainPage',
  components: { introComp,
    bandsComp,
    newsComp,
    instaComp
  }
}
</script>

<style>

</style>
