<template>
  <section class="contact">
    <div v-for="(dat,idx) in data.contactValue" :key="idx">
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
.p {
  text-align: left
}
</style>
