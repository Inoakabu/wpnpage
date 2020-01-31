<template>
  <section class="info">
    <infoContact v-for="(item,idx) in data" :key="idx" :data="item"/>
    <infoHotel v-for="(item,idx) in data" :key="idx" :data="item"/>
    <infoMap v-for="(item,idx) in data" :key="idx" :data="item"/>
    <infoGTC v-for="(item,idx) in data" :key="idx" :data="item"/>
  </section>
</template>

<script>
import infoMap from './comp.info.map'
import infoHotel from './comp.info.hotel'
import infoContact from './comp.info.contact'
import infoGTC from './comp.gtc'
const cockpit = require('../../assets/conf/cpAPI.json')
const fetcher = require('../../helpers/fetcher/fetcher')
const collURL = JSON.stringify(cockpit.call.collURL).replace(/"/g, "") + 'info' + cockpit.call.endStr + JSON.stringify(cockpit.call.token).replace(/"/g, "")


export default {
  name: 'Info',
  components: { infoMap, infoHotel, infoContact, infoGTC },
  data () {
    return {
      data: []
    }
  },
  methods: {
      getData: function() {
        fetcher.getData(collURL).then((res) => {
          this.data = res.entries
        })
      }
    },
    created: function () {
      this.getData();
    }
}
</script>

<style>
  .info {
    text-align: center;
    padding: 2rem;
  }
</style>
