<template>
  <div class="card">
    <img :src="post.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">
        {{ post.description }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
</style>