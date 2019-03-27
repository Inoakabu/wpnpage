<template>
  <section>
    <h3>Hotel</h3>
    <div class="hotel-info">
      <p>{{ content[currentLang].rowOne }}</p>
      <p>{{ content[currentLang].rowTwo }}</p>
      <h4>Metropol Hostel</h4>
      <p>Mehringdamm 32</p>
      <p>10961 Berlin</p>
      <img class="hotel-link"
           src="http://neu.metropolhostel-berlin.de/wp-content/uploads/2016/06/metropolhostel-berlin.png" @click="goTo"><br>
      <small>{{ content[currentLang].rowSmall }}</small>
    </div>
  </section>
</template>

<script>
import content from '@/assets/json/content.json'
export default {
  data () {
    return {
      content: content.info.hotel
    }
  },
  methods: {
    goTo () {
      return open('http://neu.metropolhostel-berlin.de/')
    }
  },
  computed: {
    currentLang () {
        return this.$route.params.lang
      }
  }
}
</script>

<style>
  .hotel-link {
    align-self: center
  }
  .hotel-link:hover {
    cursor: pointer;
  }
</style>
