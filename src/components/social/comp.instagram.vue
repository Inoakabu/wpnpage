<template>
  <section class="Instagram">
    <h2>Instagram</h2>
    <ul class="instagram-list">
      <instaPost
        v-for="(item, idx) in parse"
        :key="idx"
        :shortcode="item.node ? item.node.shortcode : undefined"
        :imgsrc="item.node ? item.node.display_url : undefined"
      />
    </ul>
    <a class="button" :href="instalink" target="_blank">Weiter zu Instagram</a>
  </section>
</template>

<script>
import axios from 'axios'
import instaPost from './comp.instagram.post'

export default {
  name: 'Instagram',
  components: { instaPost },
  data () {
    return {
      parse: [{}, {}, {}], // 3 default images
      user: 'de_mortem_et_diabolum'
    }
  },
  computed: {
    instalink () {
      return `https://www.instagram.com/${this.user}/`
    }
  },
  async created () {
    let regex = /<script type="text\/javascript">window\._sharedData = (.*)<\/script>/
    let res = await axios.get(this.instalink)
    let data = res.data.match(regex)[1].slice(0, -1)
    let parse = JSON.parse(data).entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges
    this.parse = parse.slice(0, 3)
  }
}
</script>

<style>
.Instagram {
  text-align: center;
  padding: 2rem;
}
.instagram-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  list-style: none;
  padding: 0;
  margin-bottom: 3rem;
}

@media (max-width: 960px) {
  .instagram-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .instagram-list {
    grid-template-columns: 1fr;
  }
}
</style>
