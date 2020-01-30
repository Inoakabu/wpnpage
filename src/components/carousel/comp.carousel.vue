<template>
  <a class="tile" target="_blank">
    <div class="tile-image--wrapper">
      <figure>
        <a  :data-url="link" class="historyLink" target="_blank" :href="link">
          <img class="tile-image" :src="imageUrl ? imageUrl : imageSrc"/>
        </a>        
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
    href: String
  },
  computed: {
    imageSrc () {
      return cockpit.call.baseURL + this.image
    }
  },
  methods: {
    setLink: function() {


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
  figure {
    margin: 2px;
  }
</style>