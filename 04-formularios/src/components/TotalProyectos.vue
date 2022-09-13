<template>
  <div class="row my-3">
    <div class="col-6">
      <h3>Total de proyectos: {{ numeroProyectos }}</h3>
    </div>
    <div class="col-6 text-end">
      <button class="btn btn-danger" @click="deleteData">
        Limpiar Proyectos
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["numeroProyectos", "deleteData"],
};
</script>
