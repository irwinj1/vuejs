<template>
  <div>
    <PostsView :posts="posts" />
  </div>
</template>
posts
<script>
import PostsView from "./PostsView.vue";
import axios from "axios";
export default {
  components: { PostsView },
  data: () => ({
    posts: [],
  }),
  created() {
    this.getPost();
  },
  methods: {
    async getPost() {
      const res = await axios.get("http://127.0.0.1:4000/api/posts");
      this.posts = res.data;
    },
  },
};
</script>

<style>
</style>