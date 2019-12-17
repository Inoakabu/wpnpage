<template>
  <section class="construction">
    <Carousel3d :width="885" :height="920" :autoplay="true" :autoplay-timeout="5000">
      <Slide v-for="(construction, idx) in construction" :key="idx" :index="idx" >
        <carousel 
          :image="construction.image" 
          :imagePath="'logo/construction'"
        />
      </Slide>
    </Carousel3d>
  </section>
</template>

<script>
import Carousel from '../carousel/comp.carousel'
import constructionJson from '../../assets/json/construction.json'
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  /* eslint-disable */
  name: 'Construction',
  components: {
    Carousel, Slide, Carousel3d
  },
  data () {
    return {
      construction: constructionJson
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