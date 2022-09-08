

<template>
  <div>
    <h1>formularios</h1>
    <img width="100" :src="url" />
    <hr />
    <form @submit.prevent="addUser">
      <div>
        <label>
          Nombre:
          <input v-model="nombre" type="text" placeholder="Nombre" required />
        </label>
      </div>
      <div>
        <label>
          Edad:
          <input
            type="number"
            v-model="edad"
            min="15"
            max="100"
            placeholder="edad"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Correo:
          <input
            v-model="correo"
            type="email"
            placeholder="email@email.com"
            required
          />
        </label>
      </div>

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    url: "https://cdn.svgporn.com/logos/vue.svg?response-content-disposition=attachment%3Bfilename%3Dvue.svg",
    nombre: "",
    edad: 0,
    correo: "",
  }),
  methods: {
    addUser() {
      console.log(this.nombre, this.edad, this.correo);
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
  margin: 0px 2rem;
}
</style>