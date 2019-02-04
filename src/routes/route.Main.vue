<template>
  <main>
    <introComp /> <bandsComp /> <instaComp />
    <!-- <router-link to="/Bands">Bands</router-link> -->
  </main>
</template>

<script>
import introComp from '../components/intro/comp.intro'
import bandsComp from '../components/bands/comp.bands'
import instaComp from '../components/social/comp.instagram'

export default {
  name: 'MainPage',
  components: { introComp,
    bandsComp,
    instaComp
  }
}
</script>

<style>

</style>
