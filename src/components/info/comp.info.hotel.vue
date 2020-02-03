<template>
  <section>
    <div v-for="(dat,idx) in data.hotelValue" :key="idx">
      <span v-html="dat.value[currentLang]"></span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object
  },
  computed: {
    currentLang () {
        return this.$route.params.lang
      }
  }
}
</script>

<style>
  .hotel-link {
    align-self: left
  }
  .hotel-link:hover {
    cursor: pointer;
  }
</style>
