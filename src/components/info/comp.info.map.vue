<template>
  <section class="map-section">
    <h3>{{ header[currentLang] }}</h3>
    <div class="map">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker v-for="marker in markers" :key="marker.name" :lat-lng="marker.pos" :icon="marker.icon">
          <l-tooltip :content="marker.tooltip"/>
        </l-marker>
      </l-map>
    </div>
  </section>
</template>

<script>
  import { L, LMap, LMarker, LTileLayer, LTooltip } from 'vue2-leaflet'
  import 'leaflet/dist/leaflet.css'
  import content from '@/assets/json/content.json'

  export default {
    components: { LMap, LTileLayer, LMarker, LTooltip },
    data () {
      return {
        header: content.info.map,
        zoom: 14,
        center: L.latLng(52.537122,13.5273982),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        markers: [
          {
            name: 'Walpurgisnacht',
            pos: L.latLng(52.537122,13.5273982),
            tooltip: 'Walpurgisnacht',
            icon: L.icon({
              iconUrl: '/map/sharp-local_activity-24px.svg'
            }),
            link: 'https://www.google.com/maps/place/ORWOhaus+e.V./@52.537122,13.5273982,17z/data=!4m12!1m6!3m5!1s0x47a84c05c8fd04cd:0xd55aa76bdcc2e255!2sORWOhaus+e.V.!8m2!3d52.537122!4d13.5295869!3m4!1s0x47a84c05c8fd04cd:0xd55aa76bdcc2e255!8m2!3d52.537122!4d13.5295869'
          }
        ]
      }
    },
    computed: {
      currentLang () {
        return this.$route.params.lang
      }
    },
    methods: {
      goTo () {
        return open(this.markers.link)
      }
    },
    mounted() {
      setTimeout(function() { window.dispatchEvent(new Event('resize')) }, 250);
    }
  }
</script>

<style>
  .map-section {
    justify-content: center
  }

  .map {
    padding: 2rem;
    height: 350px;
    margin: 0
  }
</style>
