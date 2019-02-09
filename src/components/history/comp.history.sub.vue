<template>
  <li class="history">
    <img class="history-image" :src="imageSrc">
  </li>
</template>

<script>

export default {
  name: 'HistorySub',
  props: {
    yId: Number,
    image: String
  },
  computed: {
    imageSrc () {
      return require(`../../assets/history/${this.image}`)
    }
  }
}
</script>

<style>
.history {
  position: relative;
  padding: 1rem;
  transition: all 200ms ease-in-out
}
.history::after {
  content: '';
  width: 100%;
  position: absolute;
  height: 100%;
  z-index: -1;
  left: 2%;
  top: 2%;
}
.history::before {
  content: '';
  width: 95%;
  position: absolute;
  height: 95%;
  z-index: -1;
  left: 2.5%;
  top: 2.5%;
}
.history-image {
  width: 100%;
}
</style>
