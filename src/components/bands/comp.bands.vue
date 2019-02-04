<template>
  <section class = "bands">
    <h2>Bands</h2>
    <ul class="bands-list">
      <BandTile 
        v-for="band in bands"
        :key="band.name"
        :name="band.name"
        :image="band.image"
      />
    </ul>
  </section>
</template>

<script>
import BandTile from './comp.tile.band'

export default {
  name: 'Bands'  ,
  components: { BandTile },
  data() {
    return {
      bands: [
        {
          name: 'arroganz',
          image: ''
        },
        {
          name: 'ascension',
          image: ''
        },
        {
          name: 'membaris',
          image: ''
        },
        {
          name: 'sinmara',
          image: ''
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
