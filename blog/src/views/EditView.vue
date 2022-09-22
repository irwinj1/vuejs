<template>
  <h1>{{ this.$route.params }}</h1>
</template>
<script>
export default {
  setup() {},
  created() {
    console.log(this.$route.params.id);
  },
};
</script>