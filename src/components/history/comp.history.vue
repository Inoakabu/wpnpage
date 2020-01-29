<template>
  <section class="history">
    <h2>History</h2>
      <Carousel3d class="Carousel3d" :autoplay="true" :autoplay-timeout="5000" :clickable="true">
        <Slide v-for="(history, idx) in data" :key="idx" :index="idx" >
          <carousel 
            :year="history.year"
            :image="history.image.path" 
            :link="history.link"
          />
        </Slide>
      </Carousel3d>
  </section>
</template>

<script>
  // import history from '@/assets/json/history.json'
  // import Tile from '@/components/tile/comp.tile'
  // import content from '@/assets/json/content.json'
  import Carousel from '../carousel/comp.carousel'
  import { Carousel3d, Slide } from 'vue-carousel-3d';
  const cockpit = require('../../assets/conf/cpAPI.json')
  const fetcher = require('../../helpers/fetcher/fetcher')
  const collURL = JSON.stringify(cockpit.call.collURL).replace(/"/g, "") + 'history' + cockpit.call.endStr + JSON.stringify(cockpit.call.token).replace(/"/g, "")


  export default {
    name: 'history',
    components: { Carousel, Slide, Carousel3d },
    data () {
      return {
        data: []
      }
    },
    methods: {
      getData: function() {
        fetcher.getData(collURL).then((res) => {
          this.data = res.entries
        })
      }
    },
    created: function () {
      this.getData();
    }
  }
</script>
<style>
  .history {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Carousel3d {
    position: relative;
    padding: 20px 10px;
  }
</style>
