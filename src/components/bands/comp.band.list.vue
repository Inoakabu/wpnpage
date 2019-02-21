<template>
  <section class="bands">
    <h2>Bands</h2>
    <ul class="bands-list">
      <BandTile v-for="(band,idx) in bands" :key="idx" :name="band.name" :image="band.image"/>
    </ul>
    <router-link class="button" :to="'bands'" >Mehr Bands anzeigen</router-link>
  </section>
</template>

<script>
  import BandTile from './comp.band.tile'
  import bandsJson from '@/assets/json/bands.json'

  export default {
    name: 'Bands',
    components: { BandTile },
    computed: {
      bands() {
        return bandsJson.slice(0,4);
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    list-style: none;
    padding: 0;
    margin-bottom: 3rem;
  }

  @media (max-width: 960px) {
    .bands-list {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 560px) {
    .bands-list {
      grid-template-columns: 1fr;
    }
  }
</style>
