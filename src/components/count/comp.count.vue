<template>
  <div class="count">
    <h3>Festival-Countdown</h3>
    <h1>{{ days }} : {{ hours }} : {{ minutes }} : {{ seconds }}</h1>
    <p>{{ content[currentLang].days }} : {{ content[currentLang].hrs }} : {{ content[currentLang].min }} : {{ content[currentLang].sec }}</p>
  </div>
</template>

<script>
import content from '@/assets/json/content.json'
  export default {
    name: 'Count',
    data () {
      return {
        currentDate: Date.parse(new Date(this.endDate)) - Date.parse(new Date()),
        endDate: 'Dec 13, 2019 01:00:00',
        content: content.countdown
      }
    },
    computed: {
      days () {
        return Math.floor(this.currentDate / (1000 * 60 * 60 * 24))
      },
      hours () {
        let hours = Math.floor((this.currentDate / (1000 * 60 * 60)) % 24)
        return hours > 9 ? hours : `0${hours}`
      },
      minutes () {
        let minutes = Math.floor((this.currentDate / 1000 / 60) % 60)
        return minutes > 9 ? minutes : `0${minutes}`
      },
      seconds () {
        let seconds = Math.floor((this.currentDate / 1000) % 60)
        return seconds > 9 ? seconds : `0${seconds}`
      },
      currentLang () {
        return this.$route.params.lang
      }
    },
    methods: {
      setCurrentDate () {
        this.currentDate = Date.parse(new Date(this.endDate)) - Date.parse(new Date())
      }
    },
    created () {
      this.setCurrentDate()
      setInterval(this.setCurrentDate, 1000)
    }
  }
</script>

<style>
  .count {
    padding: 5rem 0;
    text-align: center;
  }

  .count h1 {
    color: var(--main);
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    .count {
      padding: 2.5rem 0;
    }
  }

  @media (max-width: 560px) {
    .count h1 {
      color: var(--main);
      font-size: 12vw;
    }
  }

  @media (max-width: 411px) {
    .count h1 {
      color: var(--main);
      font-size: 10vw;
    }
  }

  .count h3 {
    text-transform: uppercase;
  }

  .count p {
    color: var(--motiv);
    text-transform: uppercase;
  }
</style>
