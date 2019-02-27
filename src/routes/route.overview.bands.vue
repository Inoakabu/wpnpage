<template>
  <section class="bands ov">
    <h2>Bands</h2>
    <div class="list four ov">
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
  .bands.ov {
    text-align: center;
    padding: 2rem;
    padding-top: 11rem
  }
  .list.four.ov {
    padding-top: 12rem;
  }
</style>
