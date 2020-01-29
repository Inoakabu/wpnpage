<template>
  <footer class="footer">
    <div class="sponsor">
      <Tile v-for="(sponsor, idx) in sponsors" :key="idx"
            :route="sponsor.url"
            :image="sponsor.image.path"
            external/>
    </div>
    <nav class="impressum">
      <router-link :to="link.route" v-for="(link,idx) in links" :key="idx" :alt="link.alt[currentLang]" :title="link.alt[currentLang]">
        {{link.name[currentLang]}}
      </router-link>
    </nav>
  </footer>
</template>

<script>
  import { links } from '@/assets/json/footer.json'
  import Tile from '@/components/tile/comp.tile'
  const cockpit = require('../../assets/conf/cpAPI.json')
  const fetcher = require('../../helpers/fetcher/fetcher')
  const collURL = JSON.stringify(cockpit.call.collURL).replace(/"/g, "") + 'sponsors' + cockpit.call.endStr + JSON.stringify(cockpit.call.token).replace(/"/g, "")

  export default {
    name: 'sponsors',
    components: { Tile },
    data () {
      return {
        links,
        sponsors: []
      }
    },
    computed: {
      currentLang () {
        return this.$route.params.lang
      }
    },
    methods: {
      getData: function() {
        fetcher.getData(collURL).then((res) => {
          this.sponsors = res.entries
        })
      }
    },
    created: function () {
      this.getData();
    }
  }
</script>

<style>
  .footer {
    display: flex;
    padding-top: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    position: relative;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
  .impressum:nth-child(2)::before {
    content: "|"
  }
  .impressum:nth-child(2)::after {
    content: "|"
  }

  @media (max-width: 960px) {
    .footer {
      justify-content: center;
      flex-direction: column;
    }
  }

  .footer:before {
    /*filter: invert(100%); !* Invert *!*/
    content: '';
    background-image: url('../../assets/images/background/bg.jpg');
    display: block;
    max-width: 1600px;
    width: 100%;
    background-size: 100%;
    background-position-y: 0;
    background-repeat: no-repeat;
    position: absolute;
    min-height: 100%;
    top: 0;
    left: 0;
    z-index: -1;

    opacity: 0.15;
  }

  @media (max-width: 960px) {
    .footer:before {
      background-size: 120%;
      /*background-position-y: 100%;*/
      background-position-x: 50%;
      /*min-height: 1000px;*/
    }
  }

  @media (max-width: 700px) {
    .footer:before {
      background-size: 275%;
    }
  }

  @media (max-width: 425px) {
    .footer:before {
      background-size: 240%;
    }
    .sponsor-item{
      max-width: 80%;
    }
  }

  @media (max-width: 320px) {
    .footer:before {
      background-size: 275%;
    }
    .sponsor-item{
      max-width: 40%;
    }
  }
  .sponsor {
    display: flex;
    padding-top: 5rem;
    margin: auto;
  }
  .sponsor-item {
    margin-right: 5px;
    max-width: 100%;
  }
  .sponsor-item:last-child {
    margin-right: 0
  }
</style>
