<template>
  <div>
    <h1>formulario</h1>
    <Formulario @data-form="getData" />
  </div>
</template>

<script>
import Formulario from "../components/Formulario.vue";
import axios from "axios";
export default {
  components: { Formulario },
  data: () => ({ title: "", description: "", img: "" }),
  methods: {
    async getData(title, description, img) {
      const formData = new FormData();
      formData.append("file", img[0]);
      formData.append("fileName", img[0].name);
      formData.append("title", title);
      formData.append("description", description);
      const res = await axios.post(
        "http://127.0.0.1:4000/api/posts/image",
        formData
      );
      console.log(res);
    },
  },
};
</script>

<style>
</style>