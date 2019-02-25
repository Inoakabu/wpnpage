<template>
  <a :href="route" class="tile" v-if="external" target="_blank" :class="{sepia: sepia, shadow: shadow, backgroundimg: backgroundimg, border: border }">
    <h3 class="tile-name" v-if="name">{{ name }}</h3>
    <div class="tile-image--wrapper">
      <img class="tile-image" :src="imageUrl ? imageUrl : imageSrc" :alt="`Bild von ${name}`"/>
    </div>
  </a>
  <router-link :to="{ name: route, params:{id} }" class="tile" :class="{sepia: sepia, shadow: shadow, backgroundimg: backgroundimg, border: border }" v-else>
    <h3 class="tile-name" v-if="name">{{ name }}</h3>
    <div class="tile-image--wrapper">
      <img class="tile-image" :src="imageUrl ? imageUrl : imageSrc" :alt="`Bild von ${name}`"/>
    </div>
  </router-link>

</template>

<script>
  export default {
    name: 'Tile',
    props: {
      name: String,
      image: { type: String, default: 'dmed2019_web_announce_band_arroganz_transp.png' },
      imagePath: { type: String, default: 'logo/bands' },
      imageUrl: String,
      route: { type: String },
      id: { type: String },
      border: { type: Boolean, default: false },
      backgroundimg: {type: Boolean, default: false},
      external: { type: Boolean, default: false },
      shadow: { type: Boolean, default: false },
      sepia: { type: Boolean, default: false }
    },
    computed: {
      imageSrc () {
        return require(`@/assets/images/${this.imagePath}/${this.image}`)
      }
    }
  }
</script>

<style scoped>
  .tile {
    position: relative;
    /* border: 2px solid var(--motiv); */
    padding: 1rem;
    transition: all 200ms ease-in-out;
  }

  .border {
    border: 2px solid var(--motiv);
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
  .backgroundimg::before {
    background-image: url('../../assets/images/background/bg.jpg')
  }

  .tile-name {
    position: absolute;
    bottom: 3rem;
    right: 3rem;
    color: var(--main);
    transition: all 200ms ease-in-out;
    z-index: 3;
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

  .shadow .tile-name {
    color: var(--background);
  }

  .shadow:hover .tile-name {
    color: var(--main);
  }

  .sepia .tile-image--wrapper {
    filter: saturate(.25) sepia(.25);
  }

</style>
