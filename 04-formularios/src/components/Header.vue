<template>
  <div>
    <div class="row mt-3">
      <div class="col-12 col-md-4">
        <h1>formularios</h1>
      </div>
      <div class="col-12 col-md-4">
        <img :src="url" width="100" />
      </div>

      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    url: "https://cdn.svgporn.com/logos/vue.svg?response-content-disposition=attachment%3Bfilename%3Dvue.svg",
  }),
};
</script>
    