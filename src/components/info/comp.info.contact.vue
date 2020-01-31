<template>
  <section class="contact">
    <span v-html="data.contactValue"></span>
  </section>
</template>

<script>

export default {
  props: {
    data: Object
  }
}
</script>

<style>

</style>
