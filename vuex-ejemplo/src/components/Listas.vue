<template>
  <div>
    <ol class="list-group list-group-numbered">
      <li
        v-for="(item, index) of mostrarFutas"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-start"
        @click="aumentarCantidad(index)"
      >
        <div class="ms-2 me-auto">{{ item.nombre }}</div>
        <span class="badge bg-primary rounded-pill">{{ item.cantidad }}</span>
      </li>
    </ol>
    <div class="d-grid gap-2">
      <button class="btn btn-danger btn-block" @click="reiniciarcontador">
        reiniciar contador
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Listas",
  computed: {
    ...mapGetters(["mostrarFutas"]),
  },
  methods: {
    ...mapActions(["aumentarCantidad", "reiniciarcontador"]),
  },
};
</script>

