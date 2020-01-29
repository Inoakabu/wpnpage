<template>
  <a class="tile" target="_blank">
    <div class="tile-image--wrapper">
      <figure>
        <img class="tile-image" :src="imageUrl ? imageUrl : imageSrc"/>
        <figcaption> {{ year }} </figcaption>
      </figure>      
    </div>
  </a>
</template>

<script>
const cockpit = require('../../assets/conf/cpAPI.json')

export default {
  name: 'Carousel',
  props: {
    year: { type: String },
    image: { type: String },
    link: { type: String },
    imagePath: { type: String, default: 'logo/construction' },
    imageUrl: String,
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

<style>

</style>