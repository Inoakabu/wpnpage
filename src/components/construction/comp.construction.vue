<template>
  <section class="construction">
    <Carousel3d>
      <Slide v-for="(band,idx) in bands" :key="idx" :index="idx" >
        <carousel
          :image="band.image" 
          :imagePath="'logo/bands'"
        />
      </Slide>
    </Carousel3d>
  </section>
</template>

<script>
import Carousel from '../carousel/comp.carousel'
import bandsJson from '@/assets/json/bands.json'
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  /* eslint-disable */
  name: 'Construction',
  components: {
    Carousel, Slide, Carousel3d
  },
  data () {
    return {
      bands: bandsJson
    }
  },
  computed: {
    currentLang () {
      return this.$route.params.lang
    }
  },
  watch: {
    '$route.params.id': function (id) {
      this.$forceUpdate()
    }
  }
}
</script>

<style>

</style>