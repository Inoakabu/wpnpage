<template>
  <div class="SliderSlides">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SliderSlides'
}
</script>

<style>
  .SliderSlide--transition-left-enter-active,
  .SliderSlide--transition-left-leave-active,
  .SliderSlide--transition-right-enter-active,
  .SliderSlide--transition-right-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
  }

  .SliderSlide--transition-left-leave-active,
  .SliderSlide--transition-right-leave-active {
    top: 0;
    position: absolute;
  }

  .SliderSlide--transition-left-enter,
  .SliderSlide--transition-right-leave-active {
    opacity: 0;
    transform: translate(2em, 0);
  }

  .SliderSlide--transition-left-leave-active,
  .SliderSlide--transition-right-enter {
    opacity: 0;
    transform: translate(-2em, 0);
  }
</style>
