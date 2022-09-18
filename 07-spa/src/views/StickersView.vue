<template>
  <div>
    <h1>Search Stickers</h1>
    <Search @gif-search="getStickers" />
    <Loading v-show="loading" />
    <div class="row">
      <div
        v-for="stiker in stikers"
        class="col-12 col-md-4 g-3"
        :key="stiker.id"
      >
        <Card :gif="stiker" />
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
  data: () => ({
    stikers: [],
    loading: true,
  }),
  created() {
    this.getStickers();
  },
  methods: {
    async getStickers(busqueda = "pokemon") {
      if (busqueda.trim() === "") {
        swal.fire({
          title: "Sin busqueda",
          icon: "error",
          showConfirmButton: false,
          showCloseButton: true,
          timer: 3000,
          timerProgressBar: true,
        });
        return;
      }
      this.loading = true;
      this.stikers = [];
      const res = await fetch(
        `https://api.giphy.com/v1/stickers/search?api_key=9mGUXtcxrZPOzx4t05xd6TONPxHXNFDf&q=${busqueda}`
      );
      const { data } = await res.json();
      this.stikers = data;
      this.loading = false;
    },
  },
  components: { Card, Search, Loading },
};
</script>

