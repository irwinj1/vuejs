<template>
  <div class="card">
    <img :src="post.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">
        {{ post.description }}
      </p>
      <RouterLink :to="`/edit/${post._id}`" class="btn btn-primary"
        >Editar</RouterLink
      >
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: { RouterLink },
  props: ["post"],

  methods: {},
};
</script>

<style>
</style>