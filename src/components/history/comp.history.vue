<template>
  <section class="history">
    <h2>Vergangene Festivals</h2>
    <ul class="history-list">
      <li v-for="(entry,idx) in CuttedArray" :key="entry.image" class="history-list-item" :class="{big: idx===1}">
        <img :src="require(`@/assets/images/history/${entry.image}`)"/>
      </li>
    </ul>
    <div>
      <button @click="previous" class="button">◀ Zurueck</button>
      <button @click="next" class="button">Vorwaerts ▶</button>
    </div>
  </section>
</template>

<script>
  import history from '@/assets/json/history.json'

  export default {
    name: 'history',
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

  .history-list {
    height: 600px;
    max-width: 960px;
    display: flex;
    grid-gap: 1rem;
    padding: 0;
  }

  .history-list-item {
    cursor: pointer;
    position: relative;
    display: inline-block;
    opacity: .5;
  }


  .history-list-item.big {
    width: 100%;
    opacity: 1;
  }

  .history-list-item button {
    z-index: 2;
  }

  .history-list-item .next {
    position: absolute;
    right: -2rem;
  }

  .history-list-item .prev {
    position: absolute;
    left: -2rem;
  }

  .history-list-item img {
    width: 100%;
  }

  /*
  Animations einstellungen fuer <transition-group>
  die Zustaende werden von VUE vorgegeben
*/


</style>
