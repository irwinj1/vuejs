<template>
  <form @submit.prevent="getData" class="row g-3">
    <div class="col-auto">
      <label class="col-form-label">Search: </label>
    </div>
    <div class="col-auto">
      <input class="form-control" v-model.trim="busqueda" type="text" />
    </div>
    <div class="col-auto">
      <button class="btn btn-warning fw-bold" type="submit">Search</button>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    busqueda: "",
  }),
  methods: {
    getData() {
      this.$emit("gifSearch", this.busqueda);
      this.busqueda = "";
    },
  },
};
</script>