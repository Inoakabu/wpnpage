<template>
  <section class="footer">
    <div class="sponsors">
      <Sponsors />
    </div>
  </section>
</template>

<script>
import Sponsors from './comp.sponsor'
export default {
  components: { Sponsors }
}
</script>

<style>
.footer {
  display: flex;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  position: relative;
}
@media (max-width: 960px) {
  .footer {
    justify-content: center;
    flex-direction: column;
  }
}
.footer::before {
  content: '';
  background-image: url('../../assets/images/dmed2019_web_bg_blank.jpg');
  display: block;
  max-width: 1600px;
  width: 100%;
  background-size: 100%;
  background-position-y: 5%;
  background-repeat: no-repeat;
  position: absolute;
  min-height: 320px;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.15;
}
@media (max-width: 960px) {
  .footer:before {
    background-size: 120%;
    background-position-y: 100%;
    background-position-x: 50%;
    min-width: 1000px;
  }
}
.sponsors {
  display: flex;
  margin: auto;
}
</style>
