<template>
   <div class="nav-wrapper">
    <nav class="nav-bar">
      <div v-for="item in navigation" :key="item.name">
        <router-link :to="`/${item.name}`"
        class="nav-item"
        :class="{ 'nav-item--big': item.big }"
        v-if="!item.url">{{ item.name }}
        </router-link>
        <a v-else
        :href="item.url"
        class="nav-item"
        :class="{ 'nav-item--big': item.big }"
        target="_blank">{{ item.name  }}
        </a>
      </div>
    </nav>
    <nav class="social-bar">
      <a :href="item.url" class="social-item" v-for="item in socials" :class="item.name" :key="item.name" target="_blank">{{
        firstLetter(item.name)
      }}</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      navigation: [
        { name: 'Tickets', big: true, url: 'https://www.folter666shop.de/de/Tickets/eTicket/de-mortem-et-diabolum-vol-v-early-bird-eticket-fuer-60-00-anstatt-68-00.html' },
        { name: 'Bands', big: true },
        {
          name: 'Shop',
          big: false,
          url: 'https://www.folter666shop.de/de/'
        },
        { name: 'News', big: false },
        { name: 'Info', big: false }
      ],
      socials: [
        { name: 'facebook', url: 'https://www.facebook.com/dmed666/' },
        {
          name: 'instagram',
          url: 'https://www.instagram.com/de_mortem_et_diabolum/'
        },
        {
          name: 'youtube',
          url: 'https://www.youtube.com/channel/UCCbEhQrfkHZyS6Jl178Uusg'
        }
      ]
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
.nav-bar {
  display: flex;
  padding: 1rem;
  flex-wrap: nowrap;
  align-items: center
}

.nav-item {
  margin: 0.5rem;
  line-height: 1.3rem;
  font-size: 1.3rem;
  color: var(--mittelgrau);
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 200ms ease-in-out;
  align-self: center;
}

.nav-item:hover {
  color: var(--gold);
}

.nav-item--big {
  font-size: 1.8rem;
  line-height: 1.8rem;
}

.social-bar {
  display: inline-flex;
  padding: 1rem;
  align-self: center;
}

.social-item {
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
.social-item:hover {
  color: var(--background);
  border-color: transparent;
  background-color: var(--gold);
}
.social-item.facebook:hover {
  background-color: #3b5998;
}
.social-item.youtube:hover {
  background-color: #ff0000;
}
.social-item.twitter:hover {
  background-color: #1da1f2;
}
.social-item.instagram:hover {
  background: #e1306c;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center
}
@media (max-width: 960px) {
  .nav-bar,
  .nav-wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .nav-item--big:nth-child(2) {
    margin-bottom: 1rem;
  }
}
</style>
