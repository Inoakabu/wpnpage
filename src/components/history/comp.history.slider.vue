<template>
  <section class="history">
      <h2>History</h2>
      <image-slider>
        <p>
          <a @click="prev">Prev</a> || <a @click="next">Next</a>
        </p>
        <div v-for="imageSlide in imageSlides" :key="imageSlide.yId">
          <img :src="imagesSlide">
          <div> {{ imageSlides }}</div>
        </div>
      </image-slider>
  </section>
</template>

<script>
import historyImages from '../../assets/history/history.json'
export default {
  name: 'HistoryImageSlider',
  data () {
    return {
      imageSlides: historyImages.history,
      currentNumber: 0
    }
  },
  ready: function () {
    this.startRotation()
  },
  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 3000)
    },
    stopRotation: function () {
      clearTimeout(this.timer)
      this.timer = null
    },
    next: function () {
      this.currentNumber += 1
    },
    prev: function () {
      this.currentNumber -= 1
    }
  }
}
</script>

<style>
</style>
