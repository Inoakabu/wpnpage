<template>
  <section class="bands">
    <h2>Running Order</h2>
    <div class="list four">
      <runningorderListComp/>
    </div>
    
  </section>
</template>

<script>
import runningorderListComp from '../runningorder/comp.runningorder.list'
export default {
  components: {
    runningorderListComp
  }
}
</script>

<style>

</style>