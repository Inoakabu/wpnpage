<template>
  <section class="map-section">
    <h3>Map</h3>
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

  export default {
    components: { LMap, LTileLayer, LMarker, LTooltip },
    data () {
      return {
        zoom: 14,
        center: L.latLng(52.6742683,12.7077129),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        markers: [
          {
            name: 'De Mortem Et Diabolum',
            pos: L.latLng(52.6742683,12.7077129),
            tooltip: 'De Mortem Et Diabolum',
            icon: L.icon({
              iconUrl: '/map/sharp-local_activity-24px.svg'
            }),
            link: 'https://www.google.com/maps/place/Prof.-Mitscherlich-Allee+1,+14641+Paulinenaue/@52.6742683,12.7077129,17z/data=!4m13!1m7!3m6!1s0x47a8dfc81a4ef9eb:0xb862116ca090521b!2sProf.-Mitscherlich-Allee+1,+14641+Paulinenaue!3b1!8m2!3d52.6742683!4d12.7099016!3m4!1s0x47a8dfc81a4ef9eb:0xb862116ca090521b!8m2!3d52.6742683!4d12.7099016'
          },
          {
            name: 'Metropol Hostel',
            pos: L.latLng(52.49381, 13.38793),
            tooltip: 'Metropol Hostel',
            icon: L.icon({
              iconUrl: '/map/sharp-hotel-24px.svg'

            }),
            link: 'https://www.google.de/maps/place/Metropol+Hostel+Berlin/@52.4938521,13.385581,17z/data=!3m1!4b1!4m5!3m4!1s0x47a8502922fa4a61:0x9439b531e7d32206!8m2!3d52.4938489!4d13.3877697'
          },
          {
            name: 'atm',
            pos: L.latLng(52.48469, 13.38490),
            tooltip: 'ATM',
            icon: L.icon({
              iconUrl: '/map/sharp-local_atm-24px.svg'
            }),
            link: ''
          },
          {
            name: 'train',
            pos: L.latLng(52.48496, 13.38593),
            tooltip: 'Train Station',
            icon: L.icon({
              iconUrl: '/map/sharp-train-24px.svg'
            }),
            link: ''
          }
        ]
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
