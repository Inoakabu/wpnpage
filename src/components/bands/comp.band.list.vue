<template>
  <section class="bands">
    <h2>Bands</h2>
    <div class="list four">
      <Tile v-for="(band,idx) in bands" :key="idx" :name="band.name" :image="band.image" :imagePath="'logo/bands'"
            :route="'BandPage'" :id="band.name" />
    </div>
    <router-link class="button" :to="'bands'">Mehr Bands anzeigen</router-link>
  </section>
</template>

<script>
  import Tile from '@/components/tile/comp.tile'
  import bandsJson from '@/assets/json/bands.json'

  export default {
    name: 'Bands',
    components: { Tile },
    computed: {
      bands () {
        let band = bandsJson.sort((a, b) => {
          if (a.count > b.count) {
            return -1
          }
          if (a.count < b.count) {
            return 1
          }
          return 0
        })
        return band.slice(0, 4)
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
