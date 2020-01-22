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
  const cockpit = require('../../assets/conf/cpAPI.json')
  const fetcher = require('../../helpers/fetcher/fetcher')
  const collURL = JSON.stringify(cockpit.call.collURL).replace(/"/g, "") + 'Bands' + cockpit.call.endStr + JSON.stringify(cockpit.call.token).replace(/"/g, "")


  export default {
    name: 'Bands',
    components: { Tile },
    data () {
      return {
        content: content.bands.button,
        data: fetcher.get
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
    },
    methods: {
      // getData () {
      //   fetcher.getData(collURL).then((data) => {
      //     console.log(data)
      //   })
      // }
    }
  }
</script>

<style>
  .bands {
    text-align: center;
    padding: 2rem;
  }
</style>
