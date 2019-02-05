<template>
  <section class="band-single">
    <div class = "band-wrapper" v-for="band in bands" :key="band.bId">
      <div class = "band-inner-single" v-if="bId == band.bands[index].bId">
        <h1> {{ band.bands[index].name }} </h1>
        <div> {{ band.bands[index].text }} </div>
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
      index: this.$route.params.bId - 1,
      name: this.$route.params.name,
      bands: [bandJson]
    }
  }
}
</script>

<style>

</style>
