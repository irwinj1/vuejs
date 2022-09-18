<template>
  <div class="card">
    <img
      height="250"
      :src="gif.images.original.url"
      class="card-img-top"
      :alt="gif.id"
      loading="lazy"
    />
    <div class="card-body">
      <h5 class="card-title">{{ gif.title }}</h5>

      <!--a :href="gif.images.original.url" class="btn btn-primary" download>
              Download
            </a-->
    </div>
  </div>
</template>

<script>
export default {
  props: ["gif"],
};
</script>

<style>
</style>