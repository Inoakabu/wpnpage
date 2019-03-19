<template>
  <section class="impressum">
    <div>
      <h3>Impressum</h3> <br>
      <h4>{{ impressum.name }}</h4> <br>
      <div>
        {{ info.strasse }} <br>
        {{ info.plz }} <br>
        {{ info.ort }} <br>
        {{ info.land }} <br>
        Vertreten durch: {{ impressum.name_CO }} <br>
      </div>
      <br>
      <h4>Phone</h4>
      {{ info.tel }}<br><br>
      <h4>E-Mail</h4>
      {{ impressum.email }}<br><br>
      Umsatzsteuer-ID {{ impressum.umsatzsteuerID }} <br>
      Steuer Nr {{ impressum.steuerNR }}<br><br>
      {{ impressum.FA }}<br><br>
      <ul class="impressum-list">
        <li class="impressum-listitems" v-for="(item, index) in impressum[currentLang]" :key="index">
          <h3>{{ item.h }}</h3>
          {{ item.text }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import infoJson from '../../assets/json/info.json'

export default {
  data () {
    return {
      info: infoJson.info.contact,
      impressum: infoJson.impressum
    }
  },
  computed: {
    currentLang () {
        return this.$route.params.lang
      }
  }
}
</script>

<style>
  .impressum {
    text-align: center;
    padding: 2rem;
  }
  .impressum-listitems {
    list-style: none;
    padding-top: 2rem;
    padding-inline-end: 40px;
  }
</style>
