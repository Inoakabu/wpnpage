<template>
  <section class="history">
    <h2>History</h2>
      <Carousel3d :display="5" :height="500" class="Carousel3d" :autoplay="true" :autoplay-timeout="5000" :count="data.length">
        <Slide v-for="(history, idx) in data" :key="idx" :index="idx">
          <carousel
            :year="history.year"
            :image="history.image.path"
            :link="history.link"
            :href="history.link"
          />
        </Slide>
      </Carousel3d>
  </section>
</template>

<script>
  import Carousel from '../carousel/comp.carousel'
  import { Carousel3d, Slide } from 'vue-carousel-3d';
  import { call } from '../../assets/conf/cpAPI.json';
  import fetcher from '../../helpers/fetcher/fetcher';

  export default {
    name: 'history',
    components: { Carousel, Slide, Carousel3d },
    data () {
      return {
        data: Array(7).fill({image: {path: undefined}, year: undefined, link: undefined})
      }
    },
    created: function () {
      fetcher(`${call.collURL}${this.$options._componentTag}`).then((res) => {
        this.data = res.entries
      })
    }
  }
</script>
<style>
  .history {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .carousel-3d-slide {
    padding: 2px;
  }
</style>
