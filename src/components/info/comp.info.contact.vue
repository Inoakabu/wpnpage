<template>
  <section>
    <h3>Contact</h3><br>
    <h4>{{ info.name }}</h4><br>
        <div>
          {{ info.strasse }}<br>
          {{ info.plz }}<br>
          {{ info.ort }}<br>
          {{ info.land }}<br>
        </div><br>
      <h4>Phone</h4>
        {{ info.tel }}<br><br>
      <h4>E-Mail</h4>
        {{ info.email }}<br><br>
  </section>
</template>

<script>
import infoJson from '../../assets/info/info.json'
export default {
  data () {
    return {
      info: infoJson.info.contact
    }
  }
}
</script>

<style>

</style>
