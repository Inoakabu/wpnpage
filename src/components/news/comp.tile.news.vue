<template>
  <li class="new">
    <h3 class="news-title">{{ title }}</h3>
    <img @click="goToSingle(nId, title)" class="news-image" :src="imageSrc">
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
      return require(`../../assets/NewsImage/${this.image}`)
    }
  },
  methods: {
    goToSingle (nId, title) {
      this.$router.push({ name: 'NewsSinglePage', params: { nId, title } })
    }
  }
}
</script>

<style>
.new {
  position: relative;
  border: 2px solid var(--beige);
  padding: 1rem;
  transition: all 200ms ease-in-out;
}
.new::after {
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
.new:hover::after {
  background-color: var(--beige);
  opacity: 0.2;
}
.new::before {
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
