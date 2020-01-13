<template>
  <section class="info">
    <infoContact/>
    <infoHotel/>
    <infoMap/>
    <infoGTC/>
  </section>
</template>

<script>
import infoMap from './comp.info.map'
import infoHotel from './comp.info.hotel'
import infoContact from './comp.info.contact'
import infoGTC from './comp.gtc'
export default {
  name: 'Info',
  components: { infoMap, infoHotel, infoContact, infoGTC }
}
</script>

<style>
  .info {
    text-align: center;
    padding: 2rem;
  }
</style>
