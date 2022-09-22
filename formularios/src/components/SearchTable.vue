<template>
  <v-row>
    <v-col cols="12" sm="6" md="4">
      <v-text-field
        v-model.trim="search"
        height="60px"
        outlined
        label="Buscar formulario"
        append-icon="mdi-magnify"
        @keyup="filterData(search)"
      ></v-text-field>
    </v-col>
    <v-col cols="6" md="8" class="text-end">
      <v-btn depressed color="indigo darken-4" dark height="60px">
        Crear Formulario
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    search: "",
  }),

  methods: {
    ...mapActions(["filterData"]),
  },
};
</script>

<style>
</style>