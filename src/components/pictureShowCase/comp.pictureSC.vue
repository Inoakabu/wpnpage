<template>
  <section class="pictureSC">
    <div class="list hist" v-if="showOne() > 767">
      <Tile v-for="(item, idx) in CuttedArray" :key="idx" :route="item.link" :name="item.year" :image="item.image"
            imagePath: pSCimagePath
            external shadow backgroundImg border/>
    </div>
    <div class="list one" v-else>
      <Tile v-for="(item, idx) in OneFromArray" :key="idx" :route="item.link" :name="item.year" :image="item.image"
            imagePath: pSCimagePath
            external shadow backgroundImg border/>
    </div>
    <div class="pictureSC-controls">
      <button @click="previous" class="button">◀ {{ content[currentLang].prev }}</button>
      <button @click="next" class="button">{{ content[currentLang].next }} ▶</button>
    </div>
  </section>
</template>

<script>
  import content from '@/assets/json/content.json' 
  import Tile from '@/components/tile/comp.tile'

  export default {
    name: 'pictureShowCase',
    components: { Tile },
    props: {
      pSCimagePath: { type: String, default: 'history' },
      arr: String
    },
    data () {
      return {
        content: content.history
      }
    },
    computed: {
      CuttedArray () {
        return this.arr.slice(0, 3) 
      },
      OneFromArray () {
        return this.arr.slice(0, 1)
      },
      currentLang () {
        return this.$route.params.lang
      }
    },
    methods: {
      next () {
        let first = this.arr.shift() 
        this.arr = this.arr.concat(first) 
      },
      previous () {
        let last = this.arr.pop() 
        this.arr = [last].concat(this.arr) 
      },
      showOne () {
        return window.outerWidth
      }
    },
    watch: {
      '$route.params': function(params) {
        this.$forceUpdate();
      }
    }
  }
</script>
<style>
  .pictureSC {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .list.one {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }
  @media (max-width: 960px){
    .list.hist {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1rem;
      margin-bottom: 3rem;
    }
  }
</style>
