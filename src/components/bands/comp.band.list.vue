<template>
  <section class="bands">
    <h2>Bands</h2>
    <div class="list four">
      <Tile v-for="(band,idx) in bands" :key="idx" :name="band.name" :image="band.image.path"
            :route="'BandPage'" :id="band.name" backgroundImg border/>
    </div>
    <router-link class="button" :to="'bands'">{{ content[currentLang] }} </router-link>
  </section>
</template>

<script>
  // eslint-disable-next-line import/first
  /* eslint-disable */ 
  import Tile from '@/components/tile/comp.tile'
  import content from '@/assets/json/content.json'
  const cockpit = require('../../assets/conf/cpAPI.json')
  // const fetcher = require('../../helpers/fetcher/fetcher')
  import fetcher from '../../helpers/fetcher/fetcher';

  const collURL = JSON.stringify(cockpit.call.collURL).replace(/"/g, "") + 'wpnBands' + cockpit.call.endStr + JSON.stringify(cockpit.call.token).replace(/"/g, "")
  // eslint-disable-next-line import/first
  /* eslint-disable */ 

  export default {
    name: 'Bands',
    components: { Tile },
    data () {
      return {
        content: content.bands.button,
        data: []
      }
    },
    computed: {
      bands () {
        return this.filteredData.slice(0, 4)
      },
      currentLang () {
        return this.$route.params.lang
      },
      filteredData () {
        let toFilter = this.data
        if(toFilter.length){
          toFilter = toFilter.filter((e) => {
            return e.show == true
          })
        }
        return toFilter
      }
    },
    methods: {
      getData: function() {
        fetcher(collURL).then((res) => {
          this.data = res.entries
        })
      }
    },
    created: function () {
      this.getData();
    }
  }
</script>

<style>
  .bands {
    text-align: center;
    padding: 2rem;
  }
</style>
