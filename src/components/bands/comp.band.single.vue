<template>
  <section class="band-single">
        <h1>{{ band.name }}</h1>
        <div>{{ band.text }}</div>
        <youtube :link="band.video"/>
        <div class="social-bar" v-for="link in band.links" :key="link.name">
          <social :url="link.url" :name="link.name"/>
        </div>
  </section>
</template>

<script>
  import youtube from '@/components/youtube/comp.youtube'
  import social from '@/components/social/comp.social'
  import bandJson from '@/assets/json/bands.json'

  export default {
    name: 'Band',
    components: { youtube,social },
    data () {
      return {
        name: this.$route.params.name
      }
    },
    computed: {
      band () {
        return bandJson.filter(b=> b.name.toLowerCase() === this.name.toLowerCase())[0]
      }
    }
  }
</script>

<style>

  .social-bar {
    display: inline-flex;
    padding: 1rem;
    align-self: center;
  }
</style>
