<template>
  <div class="hello">
    <transition-group name="list" tag="ul" class="list">
      <li v-for="entry in CuttedArray" :key="entry" class="list-item">
        <img :src="`https://placehold.it/140/0${entry}0`"/>
        <p>{{ entry }}</p>
      </li>
    </transition-group>
    <button @click="previous">◀︎ previous</button>
    <button @click="next">next ▶</button>
  </div>

  <div class="history-list-item" @click="previous">
    <button class="button prev" @click="previous">previous</button>
    <img :src="require(`@/assets/images/history/${firstItem.image}`)"/>
  </div>
  <a href="secondItem">
    <img class="history-list-item-big"
         :src="require(`@/assets/images/history/${secondItem.image}`)"/>
  </a>
  <div class="history-list-item" @click="next">
    <button class="button next" @click="next">next</button>
    <img :src="require(`@/assets/images/history/${thirdItem.image}`)"/>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
      this.arr.push(first) // fuegt den eintrag hinten am array ein
    },
    previous () {
      let last = this.arr.pop() // entfernt den letzten eintrag
      this.arr.unshift(last) // fuegt den eintrag vorne am array ein
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
  .list {
    padding: 0;
    font-size: 2rem;
  }

  .list-item {
    border: 2px solid lightgrey;
    margin-right: 5px;
    display: inline-block;
    min-width: 125px;
    transition: all 250ms ease-in-out;
  }

  /* Entfernt den margin beim letzten eintrag */
  .list-item:last-child {
    margin-right: 0;
  }

  /* Highlighted den 2ten eintrag */
  .list-item:nth-child(2) {
    color: red;
    font-weight: bold;
    border-color: red;
  }

  /*
    Animations einstellungen fuer <transition-group>
    die Zustaende werden von VUE vorgegeben
  */
  .list-enter-active,
  .list-leave-active {
    /* Animation wird indirekt deaktiviert */
    transition: all 0ms;
  }

  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateY(1rem);
  }

  .list-leave-active {
    position: absolute;
    left: 50%;
    opacity: 0;
    background-color: red;
  }
</style>
