<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <NavBar />
    </v-app-bar>

    <v-main>
      <v-container class="grey lighten-5">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { NavBar },
};
</script>
