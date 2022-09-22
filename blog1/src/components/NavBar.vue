<template>
  <div>
    <div class="d-flex align-center">
      <router-link to="/newpost">Nuevo Post</router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn text>
      <span class="mr-2"
        ><router-link to="/newpost">Nuevo Post</router-link></span
      >
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    //
  }),
};
</script>