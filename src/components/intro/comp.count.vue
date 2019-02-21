<template>
  <section class="intro">
    <countComp/>
  </section>
</template>

<script>
import countComp from './comp.count'

export default {
  name: 'Intro',
  components: { countComp }
}
</script>

<style>
  .intro {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
