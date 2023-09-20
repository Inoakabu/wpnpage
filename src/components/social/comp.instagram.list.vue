<template>
  <section class="Instagram">
    <h2>Instagram</h2>
    <!-- <div class="list four">
      <Tile v-for="(item, idx) in parse" :key="idx" :route="instagramPost(item.node.shortcode)"
            :imageUrl="item.node.display_url" external sepia backgroundImg border/>
    </div> -->
    <a class="button" :href="instagramlink" target="_blank">{{
      content[currentLang]
    }}</a>
  </section>
</template>

<script>
// import axios from "axios";
// import Tile from "@/components/tile/comp.tile";
import content from "@/assets/json/content.json";

export default {
  name: "Instagram",
  // components: { Tile },
  data() {
    return {
      parse: [],
      user: "de_mortem_et_diabolum",
      content: content.social.instagram,
    };
  },
  computed: {
    instagramlink() {
      return `https://www.instagram.com/${this.user}/`;
    },
    posts() {
      return this.parse;
    },
    currentLang() {
      return this.$route.params.lang;
    },
  },
  methods: {
    // instagramPost(shortcode) {
    //   return `https://www.instagram.com/p/${shortcode}`;
    // },
  },
  // async created() {
  //   let regex =
  //     /<script type="text\/javascript">window\._sharedData = (.*)<\/script>/;
  //   let res = await axios.get(this.instagramlink);
  //   let data = res.data.match(regex)[1].slice(0, -1);
  //   let parse =
  //     JSON.parse(data).entry_data.ProfilePage[0].graphql.user
  //       .edge_owner_to_timeline_media.edges;
  //   this.parse = parse.slice(0, 4);
  // },
};
</script>

<style>
.Instagram {
  text-align: center;
  padding: 2rem;
}
</style>
