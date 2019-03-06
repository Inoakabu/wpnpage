<template>
  <section>
    <h3>Hotel</h3>
    <div class="hotel-info">
      <p>Check out our recommended Hotel</p>
      <p>there is also an option to buy a combi Ticket for Hotel and Festival</p>
      <h4>Metropol Hostel</h4>
      <p>Mehringdamm 32</p>
      <p>10961 Berlin</p>
      <img class="hotel-link"
           src="http://neu.metropolhostel-berlin.de/wp-content/uploads/2016/06/metropolhostel-berlin.png" @click="goTo"><br>
      <small>(see the map below to get the location)</small>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goTo () {
      return open('http://neu.metropolhostel-berlin.de/')
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
