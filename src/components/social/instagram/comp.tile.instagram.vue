<template>
  <a class="insta-post-img" :href="`https://www.instagram.com/p/${shortcode}`" target="_blank">
    <div class="insta-post-img--wrapper">
      <img :src="imgsrc"/>
    </div>
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
    /*opacity: 0.5;*/
    transition: all 250ms ease-in-out;
  }

  .insta-post-img::after {
    content: '';
    width: 98%;
    position: absolute;
    height: 96%;
    left: 3%;
    top: 3%;
    border: 2px solid var(--motiv);
    background-color: transparent;
    transition: all 200ms ease-in-out;
    z-index: 1;
  }

  .insta-post-img:hover::after {
    border-color: var(--main);
    opacity: 0.2;
  }

  .insta-post-img:hover {
    opacity: 1;
  }

  .insta-post-img--wrapper {
    height: 98%;
    width: 100%;
    overflow: hidden;
  }

  .insta-post-img--wrapper > img {
    filter: saturate(.25) sepia(.25);
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 550ms ease-in-out;
  }

  .insta-post-img:hover img {
    filter: saturate(1) sepia(0);
    transform: scale(1.1);
  }
</style>
