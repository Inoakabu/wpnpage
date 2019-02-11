<template>
  <section class="band-single">
    <div class="band-wrapper" v-for="band in bands" :key="band.bId">
      <div class="band-inner-single" v-if="bId == band.bId">
        <h1>{{ band.name }}</h1>
        <div>{{ band.text }}</div>
        <div class="yt-embed">
          <!-- <ytEmbed /> -->
          <iframe
            width="1280"
            height="720"
            :src="band.ytembed"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="social-bar" v-for="link in band.links" :class="link.name" :key="link.name">
            <a class="social-link" :href="link.url" target="_blank"> {{ firstLetter(link.name) }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import ytEmbed from '../YTembed/ytembed'
import bandJson from '../../assets/bandSinglePageJson/bands.json'
export default {
  name: 'Band',
  data () {
    return {
      bId: this.$route.params.bId,
      bands: bandJson.bands
    }
  },
  methods: {
    firstLetter (s) {
      return s[0]
    }
  }
}
</script>

<style>

.social-bar {
  display: inline-flex;
  padding: 1rem;
  align-self: center;
}

.social-link {
  display: inline-block;
  text-align: center;
  padding: 0.5rem;
  margin: 0 0.5rem;
  min-width: 1rem;
  max-height: 1rem;
  border-radius: 100%;
  border: 2px solid var(--beige);
  background-color: transparent;
  color: var(--mittelgrau);
  font-weight: bold;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  text-transform: uppercase;
}
.social-link:hover {
  color: var(--background);
  border-color: transparent;
  background-color: var(--gold);
}
.social-link.facebook:hover {
  background-color: #3b5998;
}
.social-link.youtube:hover {
  background-color: #ff0000;
}
.social-link.twitter:hover {
  background-color: #1da1f2;
}
.social-link.instagram:hover {
  background: #e1306c;
}
</style>
