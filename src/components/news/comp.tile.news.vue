<template>
  <li class="news">
    <h3 class="news-title">{{ title }}</h3>
    <img class="news-image" :src="imageSrc">
  </li>
</template>

<script>
export default {
  name: 'NewsTile',
  props: {
    nId: Number,
    title: String,
    image: String
  },
  computed: {
    imageSrc () {
      return require(`../../assets/BandLogos/${this.image}`)
    }
  },
  methods: {
    goToSingle (nId, name) {
      this.$route.push({ name: 'NewsSinglePage', params: { nId, name } })
    }
  }
}
</script>

<style>
.news {
  position: relative;
  border: 2px solid var(--beige);
  padding: 1rem;
  transition: all 200ms ease-in-out;
}
.news::after {
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
.news:hover::after {
  background-color: var(--beige);
  opacity: 0.2;
}
.news::before {
  content: '';
  background-image: url('../../assets/images/dmed2019_web_bg_blank.jpg');
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
.news-title {
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  color: var(--gold);
}
.news-title::before {
  content: '[';

}
.news-title::after {
  content: ']';
}
.news-image {
  width: 100%;
}
</style>
