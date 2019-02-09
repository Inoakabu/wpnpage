<template>
  <section class="history">
    <h2>History</h2>
    <ul class="history-list">
      <HistorySub
        v-for="history in history"
        :key="history.yId"
        :image="history.image"
      />
    </ul>
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
.history-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  list-style: none;
  padding: 0;
}
</style>
