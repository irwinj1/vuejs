<template>
  <v-app>
    <Cabecera />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Cabecera from "./components/Cabecera.vue";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { Cabecera },
};
</script>
