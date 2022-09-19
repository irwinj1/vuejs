<template>
  <div>
    <h1>post</h1>
    <div class="row">
      <div class="col-12 col-sm-4" v-for="post in posts" :key="post.id">
        <Card :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  props: ["posts"],
  components: { Card },
};
</script>

<style>
</style>