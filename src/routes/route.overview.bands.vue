<template>
  <section class="bands ov">
    <h2>Bands</h2>
    <div class="list four ov">
      <Tile v-for="(band,idx) in data" :key="idx" :name="band.name" :image="band.image.path" :imagePath="'logo/bands'"
            :route="'BandPage'" :id="band.name" backgroundImg border/>
    </div>
    <router-view></router-view>
  </section>
</template>
<script>
import bandsJson from '@/assets/json/bands.json'
import Tile from '@/components/tile/comp.tile'
const cockpit = require('../assets/conf/cpAPI.json')
const fetcher = require('../helpers/fetcher/fetcher')
const collURL = JSON.stringify(cockpit.call.collURL).replace(/"/g, "") + 'Bands' + cockpit.call.endStr + JSON.stringify(cockpit.call.token).replace(/"/g, "")

export default {
  name: 'Bands',
  components: { Tile },
  data () {
    return {
      bands: bandsJson,
      data: []
    }
  },
  methods: {
    getData: function() {
      fetcher.getData(collURL).then((res) => {
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
  .bands.ov {
    text-align: center;
    padding: 2rem;
    /* padding-top: 11rem; */
    padding-top: 3rem
  }
  .list.four.ov {
    /* padding-top: 12rem; */
    padding-top: 3rem;
  }
</style>
