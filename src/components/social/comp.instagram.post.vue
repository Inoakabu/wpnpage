<template>
  <a
    class="insta-post-img"
    :href="`https://www.instagram.com/p/${shortcode}`"
    target="_blank"
  >
    <img :src="imgsrc" />
  </a>
</template>

<script>
export default {
  name: 'Instagram-Post',
  props: {
    shortcode: {
      type: String,
      default: 'Bh8_AOlBrZS'
    },
    imgsrc: {
      type: String,
      default: 'https://placeimg.com/1000/1000/nature/sepia'
    }
  }
}
</script>

<style>
.insta-post-img {
  position: relative;
  opacity: 0.5;
  transition: all 250ms ease-in-out;
}
.insta-post-img::after {
  content: '';
  width: 98%;
  position: absolute;
  height: 96%;
  left: 3%;
  top: 3%;
  border: 2px solid var(--beige);
  background-color: transparent;
  transition: all 200ms ease-in-out;
  z-index: 1;
}
.insta-post-img:hover::after {
  border-color: var(--gold);
  opacity: 0.2;
}
.insta-post-img:hover {
  opacity: 1;
}

.insta-post-img > img {
  width: 100%;
}
</style>
