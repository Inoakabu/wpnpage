<template>
  <section class="history">
    <h2>History</h2>
      <HistorySub />
  </section>
</template>

<script>
import HistorySub from './comp.history.sub'
import historyJson from '../../assets/history/history.json'

export default {
  name: 'History',
  components: { HistorySub },
  data () {
    return {
      history: historyJson.history
    }
  }
}
</script>

<style>
.history {
  text-align: center;
  padding: 2rem;
}
</style>
