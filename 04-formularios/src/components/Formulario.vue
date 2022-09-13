
<template>
  <div class="row">
    <div class="col-12 mb-4">
      <progress-bar :porcentaje="porcentaje" />
    </div>
    <div class="col-6 col-md-4">
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
    </div>

    <div class="col-12 col-md-8">
      <total-proyectos
        :numeroProyectos="numeroProyectos"
        :deleteData="deleteData"
      />
      <Tabla :proyectos="proyectos" :cambiarEstado="cambiarEstado" />
    </div>
  </div>
</template>
<script>
import ProgressBar from "./ProgressBar.vue";
import TotalProyectos from "./TotalProyectos.vue";
import Tabla from "./Tabla.vue";
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
        completado: false,
      });
      this.savedData();
      this.proyecto = "";
      this.actividad = "";
      this.urgente = false;
      console.log(this.proyectos);
    },
    cambiarEstado(proyecto, campo) {
      proyecto[campo] = !proyecto[campo];
      this.savedData();
    },
    savedData() {
      localStorage.setItem("proyectos", JSON.stringify(this.proyectos));
    },
    deleteData() {
      localStorage.clear();
      this.proyectos = [];
    },
  },
  computed: {
    numeroProyectos() {
      return this.proyectos.length;
    },
    porcentaje() {
      let completados = 0;
      this.proyectos.map((proyecto) => {
        if (proyecto.completado) {
          completados++;
        }
      });
      return (completados * 100) / this.numeroProyectos || 0;
    },
  },
  components: { ProgressBar, TotalProyectos, Tabla },
  mounted() {
    this.proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
  },
};
</script>