<template>
  <v-app>
    <v-main>
      <v-container class="grey lighten-5">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
