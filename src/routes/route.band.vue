<template>
  <section class="band-page" v-if="band">
    <h1 class="band-page-headline">{{ band.name }}</h1>
    <div class="band-page-social" v-for="link in band.links" :key="link.name">
      <social :url="link.url" :name="link.name"/>
    </div>
    <div class="band-page-description">{{ band.text }}</div>
    <youtube class="band-page-video" :link="band.video"/>
  </section>
</template>

<script>
  import youtube from '@/components/youtube/comp.youtube'
  import social from '@/components/social/comp.social'
  import bandJson from '@/assets/json/bands.json'

  export default {
    name: 'Band',
    components: { youtube, social },
    computed: {
      name () {
        return this.$route.params.name
      },
      band () {
        return bandJson.filter(b => b.name.toLowerCase() === this.name.toLowerCase())[0]
      }
    }
  }
</script>

<style scoped>
  .band-page-headline {
    text-align: center;
    margin: 5rem 0;
  }

  .band-page-description {
    max-width: 900px;
    line-height: 1.5rem;
    padding-top: 5rem;
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
