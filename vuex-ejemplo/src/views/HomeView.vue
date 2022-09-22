<template>
  <div class="home container">
    <Cabera />
    <Listas />
  </div>
</template>

<script>
// @ is an alias to /src
import Cabera from "@/components/Cabera.vue";
import Listas from "@/components/Listas.vue";

export default {
  name: "HomeView",
  components: {
    Cabera,
    Listas,
  },
};
</script>
