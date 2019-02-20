<template>
  <section class="map-section">
    <h3>Map</h3>
    <div class="map">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker v-for="marker in markers" :key="marker.name" :lat-lng="marker.pos" :icon="marker.icon" >
          <l-tooltip :content="marker.tooltip" />
        </l-marker>
      </l-map>
    </div>
  </section>
</template>

<script>
import { L, LMap, LTileLayer, LMarker, LTooltip } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
// import mapJson from '../../assets/info/map.json'
export default {
  components: { LMap, LTileLayer, LMarker, LTooltip },
  data () {
    return {
      zoom: 14,
      center: L.latLng(52.48841, 13.38858),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      hotelIcon: L.icon({
        iconUrl: require('../../assets/info/sharp-hotel-24px.svg'),
        iconAnchor: [22, 94],
        iconSize: [38, 95]
      }),
      venueIcon: L.icon({
        iconUrl: require('../../assets/info/sharp-local_activity-24px.svg'),
        iconAnchor: [22, 94],
        iconSize: [38, 95]
      }),
      markers: [ // mapJson.markers
        {
          name: 'De Mortem Et Diabolum',
          pos: L.latLng(52.48462, 13.39142),
          tooltip: 'De Mortem Et Diabolum',
          icon: L.icon({
            iconUrl: require('../../assets/info/sharp-local_activity-24px.svg')
          })
        },
        {
          name: 'Hotel',
          pos: L.latLng(52.49381, 13.38793),
          tooltip: 'Hotel',
          icon: L.icon({
            iconUrl: require('../../assets/info/sharp-hotel-24px.svg')
          })
        },
        {
          name: 'atm',
          pos: L.latLng(52.48469, 13.38490),
          tooltip: 'ATM',
          icon: L.icon({
            iconUrl: require('../../assets/info/sharp-local_atm-24px.svg')
          })
        },
        {
          name: 'train',
          pos: L.latLng(52.48496, 13.38593),
          tooltip: 'Train Station',
          icon: L.icon({
            iconUrl: require('../../assets/info/sharp-train-24px.svg')
          })
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
