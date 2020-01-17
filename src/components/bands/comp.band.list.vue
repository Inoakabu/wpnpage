<template>
  <section class="bands">
    <h2>Bands</h2>
    <div class="list four">
      <Tile v-for="(band,idx) in bands" :key="idx" :name="band.name" :image="band.image" :imagePath="'logo/bands'"
            :route="'BandPage'" :id="band.name" backgroundImg border/>
    </div>
    <router-link class="button" :to="'bands'">{{ content[currentLang] }} </router-link>
  </section>
</template>

<script>
  import Tile from '@/components/tile/comp.tile'
  import bandsJson from '@/assets/json/bands.json'
  import content from '@/assets/json/content.json'


  export default {
    name: 'Bands',
    components: { Tile },
    data () {
      return {
        content: content.bands.button,
      }
    },
    computed: {
      bands () {
        return bandsJson.slice(0, 4)
      },
      currentLang () {
        return this.$route.params.lang
      }
    },
    watch: {
      '$route.params.id': function (id) {
        this.$forceUpdate()
      }
    }
  }
</script>

<style>
  .bands {
    text-align: center;
    padding: 2rem;
  }
</style>
