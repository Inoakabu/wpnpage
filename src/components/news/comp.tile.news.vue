<template>
  <router-link :to="{ name: 'NewsPage', params: { id } }" class="news-tile">
    <h3 class="news-tile-title">{{ title }}</h3>
    <div class="news-image-wrapper">
      <img class="news-image" :src="imageSrc">
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'NewsTile',
    props: {
      id: Number,
      title: String,
      image: String
    },
    computed: {
      imageSrc () {
        return require(`@/assets/images/news/${this.image}`)
      }
    }
  }
</script>

<style>
  .news-tile {
    position: relative;
    border: 2px solid var(--motiv);
    background-color: transparent;
    color: var(--typo);
    padding: 1rem;
    transition: all 200ms ease-in-out;
  }

  .news-tile:hover,
  .news-tile:hover .news-tile-title{
    border-color: var(--main);
    color: var(--main);
  }

  .news-tile::after {
    content: '';
    width: 100%;
    position: absolute;
    height: 100%;
    z-index: -1;
    left: 2%;
    top: 2%;
    transition: all 200ms ease-in-out;
  }

  .news-tile::before {
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

  .news-tile-title {
    position: absolute;
    bottom: 3rem;
    right: 3rem;
    color: var(--background);
    z-index: 3;
    transition: all 200ms ease-in-out;
  }

  .news-tile-title::before {
    content: '[';

  }

  .news-tile-title::after {
    content: ']';
  }

  .news-image-wrapper {
    height: 98%;
    width: 100%;
    overflow: hidden;
  }

  .news-image-wrapper > img {
    filter:  saturate(0) sepia(.25);
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 550ms ease-in-out;
  }

  .news-tile:hover img {
    transform: scale(1.1);
  }
</style>
