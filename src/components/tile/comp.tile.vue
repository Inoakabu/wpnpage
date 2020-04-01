<template>
  <a :href="route" class="tile" v-if="external" target="_blank" :class="{sepia: sepia, shadow: shadow, backgroundImg: backgroundImg, border: border, show: show, alert: alert }">
    <h3 class="tile-name" v-if="name">{{ name }}</h3>
    <div class="tile-image--wrapper">
      <img class="tile-image" :src="imageUrl ? imageUrl : imageSrc" :alt="`Bild von ${name}`"/>
    </div>
  </a>
  <router-link :to="{ name: route, params:{id} }" class="tile" :class="{sepia: sepia, shadow: shadow, backgroundImg: backgroundImg, border: border, show: show, alert: alert }" v-else>
    <h3 class="tile-name" v-if="name">{{ name }}</h3>
    <div class="tile-image--wrapper">
      <img class="tile-image" :src="imageUrl ? imageUrl : imageSrc" :alt="`Bild von ${name}`"/>
    </div>
  </router-link>
</template>

<script>
const cockpit = require('../../assets/conf/cpAPI.json')
  export default {
    name: 'Tile',
    props: {
      name: String,
      image: { type: String },
      imagePath: { type: String, default: 'logo/bands' },
      imageUrl: String,
      route: { type: String },
      id: { type: String },
      border: { type: Boolean, default: false },
      backgroundImg: {type: Boolean, default: false},
      external: { type: Boolean, default: false },
      shadow: { type: Boolean, default: false },
      sepia: { type: Boolean, default: false },
      show: { type: Boolean, default: false },
      alert: { type: Boolean, default: false }
    },
    computed: {
      imageSrc () {
        return cockpit.call.baseURL + this.image
      }
    },
    watch: {
      '$route.params': function(params) {
        this.$forceUpdate();
      }
    }
  }
</script>

<style scoped>
  .tile {
    position: relative;
    padding: 1rem;
    padding-bottom: 3rem;
    transition: all 200ms ease-in-out;
  }
  .linkDisplay {
    display: none;
  }

  .border {
    border: 2px solid var(--motiv);
  }

  .alert{
    border: 2px solid var(--alert);
  }

  .tile:hover {
    border-color: var(--main);
  }

  .tile::before {
    content: '';
    width: 95%;
    background-size: 350%;
    background-position: center;
    position: absolute;
    height: 95%;
    z-index: -1;
    left: 2.5%;
    top: 2.5%;
    opacity: 0.2;
  }
  .backgroundImg::before {
    background-image: url('../../assets/images/background/bg.jpg')
  }

  .tile-name {
    position: absolute;
    padding: 0.5rem;
    bottom: 1rem;
    right: 0.5rem;
    color: var(--main);
    transition: all 200ms ease-in-out;
    z-index: 3;
    text-align: right;
  }

  .tile:hover .tile-name {
    color: var(--typo);
  }

  .tile-name::before {
    content: '[';
  }

  .tile-name::after {
    content: ']';
  }

  .tile-image--wrapper {
    height: 100%;
    overflow: hidden;
  }

  .tile-image {
    display: block;
  }

  .tile-image--wrapper > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 550ms ease-in-out;
  }

  .tile:hover img {
    filter: saturate(1) sepia(0);
    transform: scale(1.05);
  }

  .shadow:after {
    content: '';
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    display: block;
    background-image: linear-gradient(-45deg, rgba(135, 132, 128, 0.71) 0%, transparent 100%);
    position: absolute;
    z-index: 1;
    left: 1rem;
    top: 1rem;
  }

  .shadow {
    color: var(--background);
  }

  .shadow:hover {
    color: var(--main);
  }

  .sepia .tile-image--wrapper {
    filter: saturate(.25) sepia(.25);
  }
  @media (max-width: 960px) {
    .tile-name {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      color: var(--main);
      transition: all 200ms ease-in-out;
      z-index: 3;
    }
  }

  @media (max-width: 560px) {
    .tile-name {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      color: var(--main);
      transition: all 200ms ease-in-out;
      z-index: 3;
    }
  }

</style>
