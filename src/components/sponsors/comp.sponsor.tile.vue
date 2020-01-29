<template>
  <li class="sponsor">
    <img class="sponsor-image" :src="imageSrc" @click="goTo">
  </li>
</template>

<script>
const cockpit = require('../../assets/conf/cpAPI.json')

export default {
  name: 'SponsorTile',
  props: {
    sId: Number,
    sponsor: String,
    image: String,
    link: String
  },
  computed: {
    imageSrc () {
      return cockpit.call.baseURL + this.image
    }
  },
  methods: {
    goTo () {
      return open(this.link)
    }
  }
}
</script>

<style>
  .sponsor {
    position: relative;
    padding: 1rem;
    transition: all 200ms ease-in-out;
  }

  .sponsor::after {
    content: '';
    width: 100%;
    position: absolute;
    height: 100%;
    z-index: -1;
    left: 2%;
    top: 2%;
  }

  .sponsor-image:hover {
    cursor: pointer;
  }
</style>
