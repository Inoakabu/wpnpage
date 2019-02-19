<template>
  <section class="map-section">
    <h3>Map</h3>
    <div class="map">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker v-for="marker in markers" :key="marker.name" :lat-lng="marker.pos">
          <l-tooltip :content="marker.tooltip" />
        </l-marker>
      </l-map>
    </div>
  </section>
</template>

<script>
import { L, LMap, LTileLayer, LMarker, LTooltip } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import mapJson from '../../assets/info/map.json'
export default {
  components: { LMap, LTileLayer, LMarker, LTooltip },
  data () {
    return {
      zoom: 14,
      center: L.latLng(52.48438, 13.39136),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markers: [ //mapJson.markers
        {
          name: 'De Mortem Et Diabolum',
          pos: L.latLng(52.48438, 13.39136),
          tooltip: 'De Mortem Et Diabolum'
        },
        {
          name: 'Hotel',
          pos: L.latLng(52.49381, 13.38793),
          tooltip: 'Hotel'
        }
      ]
    }
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
