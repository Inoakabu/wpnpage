<template>
  <section class="bands">
    <h2>Running Order</h2>
    <div class="runningorder">
      
    </div>
    
  </section>
</template>

<script>
// import runningorderListComp from '../runningorder/comp.runningorder.list'
import roPictures from ''
export default {
  // components: {
  //   runningorderListComp
  // }
  data () {
    return {
      roFriday: require('../../assets/images/runningorder/RO_Friday.jpg'),
      roSaturday: require('../../assets/images/runningorder/RO_Saturday.jpg')
    }
  },
  methods: {
    test () {
      console.log(roPictures)
    }
  },
}
</script>

<style>

</style>