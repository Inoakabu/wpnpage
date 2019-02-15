<template>
  <section class="history-slider">
    <div class="slider-navigation">
      <button class="button-left" @click="prev">Prev</button>
      <button class="button-right" @click="next">Next</button>
    </div>
      <transition-group name="slide-fade">
        <div class="image-slider" v-for="number in [activeImage]" :key="number">
          <img class="image-left" :src="leftImageSrc">
          <img class="image-active" v-on:click="goTo()" :src="activeImageSrc">
          <img class="image-right" :src="rightImageSrc">
        </div>
      </transition-group>
  </section>
</template>

<script>
// array init
import historyJson from '../../assets/history/history.json'
export default {
  data () {
    return {
      historyArr: historyJson.history,
      activeImage: 0
    }
  },
  computed: {
    activeImageMath () {
      return Math.abs(this.activeImage) % this.historyArr.length
    },
    leftImageMath () {
      return Math.abs(this.activeImage - 1) % this.historyArr.length
    },
    rightImageMath () {
      return Math.abs(this.activeImage + 1) % this.historyArr.length
    },
    activeImageSrc () {
      return require(`../../assets/history/${this.historyArr[this.activeImageMath].image}`)
    },
    leftImageSrc () {
      return require(`../../assets/history/${this.historyArr[this.leftImageMath].image}`)
    },
    rightImageSrc () {
      return require(`../../assets/history/${this.historyArr[this.rightImageMath].image}`)
    }
  },
  methods: {
    next: function () {
      this.activeImage += 1
    },
    prev: function () {
      this.activeImage -= 1
    },
    goTo: function () {
      open(this.historyArr[this.activeImageMath].link)
    }
  }
}
</script>

<style>
.slider-navigation {
  display:flex;
  justify-content: center;
  padding: 0;
}
.button-left,
.button-right {
  display: inline-block;
  text-align: center;
  padding: .5rem;
  margin: 0 .5rem;
  min-width: 1rem;
  max-height: 2rem;
  border-radius: 15%;
  border: 1px solid var(--beige);
  background-color: transparent;
  color: var(--mittelgrau);
  font-weight: bold;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  text-transform: uppercase;
}
.button-left:hover,
.button-right:hover {
  color: var(--background);
  border-color: transparent;
  background-color: var(--gold);
  cursor: pointer;
}
.slider-navigation {
  align-items: center;
}
.slide-fade-enter-active {
  transition: all .10s ease;
}
.slide-fade-leave-active {
  transition: all .100ms cubic-bezier(1, 0.5, 0.8, 1)
}
.slide-fade-enter,
.slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
.image-slider {
  display: grid;
  grid-template-columns: .4fr .7fr .4fr;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  padding: 0;
  list-style: none;
  align-items: baseline;
  width: 100%;
}
.image-left,
.image-active,
.image-right{
  width: 100%;
}
.image-active {
  cursor: pointer;
}
</style>
