<template>
  <footer class="footer">
    <div class="content">
      <div class="sponsors">
        <Sponsors/>
      </div>
      <div class="impressum">
        <a class="imp-link" href="/Impressum">Impressum</a>
      </div>
    </div>
  </footer>
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
    position: relative;
    padding-top: 4rem;
    justify-content: center
  }

  @media (max-width: 960px) {
    .footer {
      justify-content: center;
      flex-direction: column;
    }
  }

  .footer::before {
    content: '';
    background-image: url('../../assets/images/background/bg.jpg');
    display: block;
    max-width: 1600px;
    width: 100%;
    background-size: 100%;
    background-position-y: 5%;
    background-repeat: no-repeat;
    position: absolute;
    min-height: 450px;
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

  .content {
    display: grid;
    position: relative;
  }

  .sponsors {
    display: flex;
    margin: auto;
  }

  .impressum {
    display: flex;
    margin: auto;
  }

  .imp-link {
    background-color: var(--beige);
    color: var(--mittelgrau);
    text-align: center;
    padding: 10px 20px;
    display: inline-block;
    text-decoration: none;
    border-radius: 5px
  }

  .imp-link:hover,
  .imp-link:active {
    background-color: var(--gold);
    transition: all 250ms ease-in-out
  }
</style>
