<template>
  <section>
    <iframe class="iframe" :src="link" frameborder="0" :allow="allow" allowfullscreen></iframe>
  </section>
</template>

<script>
  export default {
    name: 'youtube-embedded',
    props: { link: String },
    computed: {
      allow () {
        let data = ['accelerometer', 'autoplay', 'encrypted-media', 'gyroscope', 'picture-in-picture']
        return data.join(';')
      }
    }
  }
</script>

<style>
.iframe {
  width: 680px;
  height: 450px;
}

@media (max-width: 960px) {
  .iframe {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 560px) {
  .iframe {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 411px) {
  .iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
