<template>
  <section class="history">
    <h2>History</h2>
    <div class="list">
      <Tile v-for="(item, idx) in CuttedArray" :key="idx" :route="item.link" :name="item.year" :image="item.image"
            imagePath="history"
            external shadow backgroundImg border/>
    </div>
    <div class="history-controls">
      <button @click="previous" class="button">◀ Previous</button>
      <button @click="next" class="button">Next ▶</button>
    </div>
  </section>
</template>

<script>
  // TODO: HISTORY fixing
  // TODO: HISTORY Styling
  // TODO: HISTORY one picture in responsive less then 960px

  import history from '@/assets/json/history.json'
  import Tile from '@/components/tile/comp.tile'

  export default {
    name: 'history',
    components: { Tile },
    data () {
      return {
        arr: history
      }
    },
    computed: {
      CuttedArray () {
        return this.arr.slice(0, 3) // limitiert den array
      }
    },
    methods: {
      next () {
        let first = this.arr.shift() // entfernt den ersten eintrag
        this.arr = this.arr.concat(first) // fuegt den eintrag hinten am array ein
      },
      previous () {
        let last = this.arr.pop() // entfernt den letzten eintrag
        this.arr = [last].concat(this.arr) // fuegt den eintrag vorne am array ein
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .history {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
