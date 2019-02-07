<template>
  <section class="band-single">
    <div class = "band-wrapper" v-for="band in bands" :key="band.bId">
      <div class = "band-inner-single" v-if="bId == band.bId">
        <h1> {{ band.name }} </h1>
        <div> {{ band.text }} </div>
      </div>
    </div>
  </section>
</template>

<script>
import bandJson from '../../assets/bandSinglePageJson/bands.json'
export default {
  name: 'Band',
  data () {
    return {
      bId: this.$route.params.bId,
      bands: bandJson.bands
    }
  }
}
</script>

<style>

</style>
