<template>
  <section class="sponsors">
    <ul class="sponsors-list">
      <SponsorTile
        v-for="sponsor in sponsors"
        :key="sponsor.sId"
        :sId="sponsor.sId"
        :sponsor="sponsor.sponsor"
        :logo="sponsor.logo"
        :link="sponsor.url"
        />
    </ul>
  </section>
</template>

<script>
import SponsorTile from './comp.sponsor.tile'
import sponsorJson from '../../assets/sponsor/sponsor.json'
export default {
  name: 'Sponsors',
  components: { SponsorTile },
  data () {
    return {
      sponsors: sponsorJson.sponsors
    }
  }
}
</script>

<style>
.sponsors {
  text-align: center;
  padding: 2rem;
}
.sponsors-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  list-style: none;
  padding: 0;
}
@media (max-width: 960px){
  .sponsors-list {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
@media (max-width: 560px){
  .sponsors-list {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
