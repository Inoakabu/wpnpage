<template>
  <a :href="route" class="tile" target="_blank">
    <div class="tile-image--wrapper">
      <img class="tile-image" :src="imageUrl ? imageUrl : imageSrc"/>
    </div>
  </a>
</template>

<script>

export default {
  name: 'Carousel',
  props: {
    image: { type: String, default: 'dmed2019_web_announce_band_arroganz_transp.png' },
    imagePath: { type: String, default: 'logo/bands' },
    imageUrl: String,
  },
  computed: {
    imageSrc () {
      return require(`@/assets/images/${this.imagePath}/${this.image}`)
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