<template>
  <section class="bands">
    <h2>Bands</h2>
    <div class="list four">
      <Tile v-for="(band,idx) in bands" :key="idx" :name="band.name" :image="band.image" :imagePath="'logo/bands'"
            :route="'BandPage'" :id="band.name" backgroundImg border/>
    </div>
  </section>
</template>
<script>
import bandsJson from '@/assets/json/bands.json'
import Tile from '@/components/tile/comp.tile'

export default {
  name: 'Bands',
  components: { Tile },
  data () {
    return {
      bands: bandsJson
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
