<template>
  <section class = "bands">
    <h2>Bands</h2>
    <ul class="bands-list">
      <BandTile
        v-for="band in bands"
        :key="band.bId"
        :bId="band.bId"
        :name="band.name"
        :image="band.image"
      />
    </ul>
  </section>
</template>

<script>
import BandTile from './comp.tile.band'

export default {
  name: 'Bands',
  components: { BandTile },
  data () {
    return {
      bands: [
        {
          bId: 1,
          name: 'arroganz',
          image: 'dmed2019_web_announce_band_arroganz_transp.png'
        },
        {
          bId: 2,
          name: 'ascension',
          image: 'dmed2019_web_announce_band_ascension_transp.png'
        },
        {
          bId: 3,
          name: 'membaris',
          image: 'dmed2019_web_announce_band_membaris_transp.png'
        },
        {
          bId: 4,
          name: 'sinmara',
          image: 'dmed2019_web_announce_band_sinmara_transp.png'
        }
      ]
    }
  }
}
</script>

<style>
.bands {
  text-align: center;
  padding: 2rem;
}
.bands-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  list-style: none;
  padding: 0;
}
@media (max-width: 960px){
  .bands-list {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 560px){
  .bands-list {
    grid-template-columns: 1fr;
  }
}
</style>
