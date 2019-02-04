<template>
  <li class="band">
    <h3 class="band-name">{{ name }}</h3>
    <img class="band-image" :src="imageSrc" />
  </li>
</template>

<script>
export default {
  name: 'BandTile',
  props: {
    name: String,
    name: String
  },
  computed: {
    imageSrc() {
      return `./bands/${this.image}`
    }
  }
}
</script>

<style>
.band {
  position: relative;
  border: 2px solid var(--beige);
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
  border: 2px solid var(--gold);
  background-color: transparent;
  transition: all 200ms ease-in-out;
}
.band:hover::after {
  background-color: var(--beige);
  opacity: 0.2;
}
.band::before {
  content: '';
  background-image: '';
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
  color: var(--gold);
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
