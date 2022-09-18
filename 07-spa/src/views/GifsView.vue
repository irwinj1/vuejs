<template>
  <div>
    <h1>Search Gif</h1>
    <Search @gif-search="getGifs" />
    <Loading v-if="loading" />
    <div class="row">
      <div v-for="gif in gifs" class="col-12 col-md-4 g-3" :key="gif.id">
        <Card :gif="gif" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Search from "../components/Search.vue";
import Loading from "../components/Loading.vue";
import swal from "sweetalert2";
export default {
  components: { Card, Search, Loading },
  data: () => ({
    gifs: [],
    loading: true,
  }),
  created() {
    this.getGifs();
  },
  methods: {
    async getGifs(busqueda = "pokemon") {
      if (busqueda.trim() === "") {
        swal.fire({
          title: "Sin Busqueda",
          icon: "error",
          showConfirmButton: false,
          showCloseButton: true,
          timer: 3000,
          timerProgressBar: true,
        });
        return;
      }
      this.loading = true;
      this.gifs = [];
      const gifsAll = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=9mGUXtcxrZPOzx4t05xd6TONPxHXNFDf&q=${busqueda}`
      );
      const { data } = await gifsAll.json();
      this.gifs = data;
      this.loading = false;
    },
  },
};
</script>

<style>
</style>