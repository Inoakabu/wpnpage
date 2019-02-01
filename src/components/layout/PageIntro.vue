<template>
<head class="intro">
  <div class="count">
      <h3>Festival-Countdown</h3>
      <h1>{{days}} : {{hours}} : {{minutes}} : {{seconds}}</h1>
      <p>Days : Hrs : Min : Sec</p>
  </div>
</head>
</template>
<script>
export default {
  name: 'FestivalCountdown',
  data () {
    return {
      days: 'something',
      hours: 'went',
      minutes: 'totally',
      seconds: 'wrong',
      endDate: 'Dec 13, 2019 01:00:00'
    }
  },
  methods: {
    getCountdown () {
      let diff = Date.parse(new Date(this.endDate)) - Date.parse(new Date())
      this.days = Math.floor(diff / (1000 * 60 * 60 * 24))
      this.hours = Math.floor(diff / (1000 * 60 * 60) % 24)
      this.minutes = Math.floor(diff / 1000 / 60 % 60)
      this.seconds = Math.floor(diff / 1000 % 60)
    }
  },
  created () {
    this.$options.interval = setInterval(this.getCountdown, 1000)
  },
  beforeDestroy () {
    clearInterval(this.$options.interval)
  }
}
</script>

<style>
/* .intro {
  margin-top: 150px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro:before {
  content: '';
  background-image: url('../../assets/images/dmed2019_web_bg_blank.jpg');
  display: block;
  max-width: 1600px;
  width: 100%;
  background-size: 100%;
  background-position-y: 90%;
  background-repeat: no-repeat;
  position: absolute;
  height: 750px;
  top: 0;
  z-index: -1;
  opacity: 0.15;
}

.count {
  text-align: center;
}

.count h1 {
  color: var(--gold);
  font-size: 2.25rem;
}

.count h3 {
  text-transform: uppercase
}

.count p {
  color: var(--beige);
  text-transform: uppercase;
} */
</style>
