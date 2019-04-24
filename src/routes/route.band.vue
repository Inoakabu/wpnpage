<template>
  <section class="band-page" v-if="band">
    <h1 class="band-page-headline">{{ band.name }}</h1>
    <div class="band-page-social" v-for="link in band.links" :key="link.name">
      <social :url="link.url" :name="link.name"/>
    </div>
    <p class="band-page-description">{{ band.text[currentLang] }}</p>
    <youtube class="band-page-video" :link="band.video"/>
    <router-view></router-view>
  </section>
</template>

<script>
  import youtube from '@/components/social/comp.youtube-embedded'
  import social from '@/components/social/comp.social-tag'
  import bandJson from '@/assets/json/bands.json'

  export default {
    name: 'Band',
    components: { youtube, social },
    computed: {
      name () {
        return this.$route.params.id
      },
      band () {
        return bandJson.filter(b => b.name.toLowerCase() === this.name.toLowerCase())[0]
      },
      currentLang () {
        return this.$route.params.lang
      }
    }
  }
</script>

<style scoped>
  .band-page {
    text-align: center;
  }
  .band-page-headline {
    text-align: center;
    margin: 5rem 0;
  }

  .band-page-description {
    line-height: 1.5rem;
    /* padding-top: 10rem; */
    padding-top: 3rem;
    text-align: center;
  }

  .band-page-video {
    padding-top: 5rem;
  }

  .band-page-social {
    display: inline-flex;
    padding: 1rem;
    align-self: center;
  }
</style>
