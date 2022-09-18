<template>
  <div>
    <h1 class="text-center">Gifs Router</h1>
    <div class="text-center">
      <img :src="img" :alt="name" class="img-fluid" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    img: "",
    name: "",
  }),
  created() {
    this.getRandomGifs();
  },
  methods: {
    async getRandomGifs() {
      const gifs = await fetch(
        "https://api.giphy.com/v1/gifs/random?api_key=9mGUXtcxrZPOzx4t05xd6TONPxHXNFDf"
      );
      const { data } = await gifs.json();
      const {
        images: {
          original: { url },
        },
        title,
      } = data;
      this.img = url;
      this.name = title;
    },
  },
};
</script>

<style>
</style>