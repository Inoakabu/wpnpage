<template>
    <div>
      <iframe width="1280" height="720" :src="link" frameborder="0"
              :allow="allow" allowfullscreen
      ></iframe>
    </div>
</template>

<script>
  export default {
    name: 'youtube-embedded',
    props: { link: String },
    computed: {
      allow () {
        let data = ['accelerometer', 'autoplay', 'encrypted-media', 'gyroscope', 'picture-in-picture'];
        return data.join(';')
      }
    }
  }
</script>

<style>

</style>
