<template>
  <section class="info">
    <infoContact />
    <infoHotel />
    <infoMap />
  </section>
</template>

<script>
import infoMap from './comp.info.map'
import infoHotel from './comp.info.hotel'
import infoContact from './comp.info.contact'
export default {
  name: 'Info',
  components: { infoMap, infoHotel, infoContact }
}
</script>

<style>
.info {
  text-align: center;
  padding: 2rem;
}
</style>
