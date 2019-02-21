<template>
  <section>
    <iframe width="100%" height="700px" :src="link" frameborder="0" :allow="allow" allowfullscreen></iframe>
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
  width: 100%;
  height: 706px;
}
</style>
