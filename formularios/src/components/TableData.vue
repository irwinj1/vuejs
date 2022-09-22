<template>
  <v-data-table
    :headers="headers"
    :items="dataTables"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.active="{ item }">
      <div :class="item.active ? 'green' : 'red'" class="activos">
        {{ item.active ? "SI" : "NO" }}
      </div>
    </template>
  </v-data-table>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    headers: [
      {
        text: "Nombre del formulario",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Descripcion", value: "decription" },
      { text: "Titulo", value: "title" },
      { text: "Fecha de creacion", value: "dateCre" },
      { text: "activo", value: "active" },
      { text: "Acciones", value: "acciones" },
    ],
  }),
  computed: {
    ...mapState(["dataTables"]),
  },
  methods: {
    ...mapActions(["getData"]),
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.activos {
  width: 60px;
  padding-inline: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: aliceblue;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
}
</style>