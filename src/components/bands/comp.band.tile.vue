<template>
  <router-link :to="{ name: 'BandPage', params: { name } }" class="band">
    <h3 class="band-name">{{ name }}</h3>
    <img class="band-image" :src="imageSrc"/>
  </router-link>
</template>

<script>

export default {
  name: 'BandTile',
  props: {
    name: String,
    image: String
  },
  computed: {
    imageSrc () {
      return require(`@/assets/images/logo/bands/${this.image}`)
    }
  }
}
</script>

<style>
  .band {
    position: relative;
    border: 2px solid var(--motiv);
    padding: 1rem;
    transition: all 200ms ease-in-out;
  }

  .band::after {
    content: '';
    width: 100%;
    position: absolute;
    height: 100%;
    z-index: -1;
    left: 2%;
    top: 2%;
    border: 2px solid var(--main);
    background-color: transparent;
    transition: all 200ms ease-in-out;
  }

  .band:hover::after {
    background-color: var(--motiv);
    opacity: 0.2;
  }

  .band::before {
    content: '';
    background-image: url('../../assets/images/background/bg.jpg');
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

  .band-name {
    position: absolute;
    bottom: 3rem;
    right: 3rem;
    color: var(--main);
  }

  .band-name::before {
    content: '[';

  }

  .band-name::after {
    content: ']';
  }

  .band-image {
    width: 100%;
  }
</style>
