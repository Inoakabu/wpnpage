<template>
  <section class="bands">
    <h2>Running Order</h2>
    <div class="runningorder">
      <img class="col" src="../../assets/images/runningorder/RO_Friday.jpg" alt="">
      <img class="col" src="../../assets/images/runningorder/RO_Saturday.jpg" alt="">
    </div>
    
  </section>
</template>

<script>
// import runningorderListComp from '../runningorder/comp.runningorder.list'
export default {
  // components: {
  //   runningorderListComp
  // }
  data () {
    return {
      roFriday: require('../../assets/images/runningorder/RO_Friday.jpg'),
      roSaturday: require('../../assets/images/runningorder/RO_Saturday.jpg')
    }
  }
}
</script>

<style>
.col {
  float: left;
  width: 50%;
}
/* Clear floats after the columns */
.runningorder:after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 600px) {
  .col {
    width: 100%;
  }
}
</style>