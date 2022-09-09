<script>
export default {
  data: () => ({
    proyecto: "",
    actividad: "",
    urgente: false,
    proyectos: [],
  }),
  methods: {
    registrarProyecto() {
      this.proyectos.push({
        proyecto: this.proyecto,
        actividad: this.actividad,
        urgente: this.urgente,
      });
      this.proyecto = "";
      this.actividad = "";
      this.urgente = false;
      console.log(this.proyectos);
    },
  },
};
</script>
<template>
  <form @submit.prevent="registrarProyecto()">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Proyecto</label>
      <input
        type="text"
        v-model.trim="proyecto"
        class="form-control"
        required
      />
    </div>
    <div class="mb-3">
      <label for="" class="select-label">Actividad</label>
      <select class="form-select" v-model.trim="actividad" required>
        <option disabled selected>Seleccione un tipo</option>
        <option>Aplicacion Web con Vue.js</option>
        <option>Backend Service con Node.js</option>
        <option>App Movil con React Native</option>
      </select>
    </div>
    <div class="mb-3 form-check">
      <input
        type="checkbox"
        v-model.trim="urgente"
        class="form-check-input"
        id="exampleCheck1"
      />
      <label class="form-check-label" for="exampleCheck1">Urgente</label>
    </div>
    <button type="submit" class="btn btn-primary">Guardar</button>
  </form>
</template>
