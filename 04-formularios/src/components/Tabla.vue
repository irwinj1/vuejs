<template>
  <div class="table-responsive">
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Proyecto</th>
          <th>Actividad</th>
          <th>Urgente</th>
          <th>Completado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(proyecto, index) in proyectos" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ proyecto.proyecto }}</td>
          <td>{{ proyecto.actividad }}</td>
          <td
            @click="cambiarEstado(proyecto, 'urgente')"
            :class="proyecto.urgente ? 'bg-success' : 'bg-danger'"
          >
            {{ proyecto.urgente ? "Si" : "No" }}
          </td>
          <td
            @click="cambiarEstado(proyecto, 'completado')"
            :class="proyecto.completado ? 'bg-success' : 'bg-danger'"
          >
            {{ proyecto.completado ? "Completado" : "No Completado" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["proyectos", "cambiarEstado"],
};
</script>
