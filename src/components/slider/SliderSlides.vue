<template>
  <transition :name="transition">
    <div v-show="active" class="SliderSlide">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SliderSlide',
  data () {
    return {
      active: false,
      transition: ''
    }
  },
  methods: {
    hide (direction) {
      this.transition = `SliderSlide--transition-${direction}`
      this.active = false
    },
    show (direction) {
      this.transition = `SliderSlide--transition-${direction}`
    }
  }
}
</script>

<style>
.SliderSlides {
  position: relative;
}
</style>
