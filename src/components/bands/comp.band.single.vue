<template>
  <section class="band-single">
    <div class = "band-wrapper" v-for="band in bands" :key="band.bId">
      <div class = "band" v-if="bId == band.bands[bId-1].bId">
        <div> {{ band.bands[bId-1] }} </div>
      </div>
      <!-- <div> {{ band.bands.bId }}</div> -->
    </div>
    <div> {{ bId }}</div>
  </section>
</template>

<script>
import bandJson from '../../assets/bandSinglePageJson/bands.json'
export default {
  name: 'Band',
  data () {
    return {
      bId: this.$route.params.bId,
      name: this.$route.params.name,
      bands: [bandJson]
    }
  }
}
</script>

<style>

</style>
