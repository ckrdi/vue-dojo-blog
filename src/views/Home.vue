<template>
  <div class="home">
    <router-link :to="{ name: 'Create' }">New Post</router-link>
    <div v-for="post in posts" :key="post.id">
      <PostList :id="post.id" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";

export default {
  name: "Home",
  components: {
    PostList,
  },
  setup() {
    const posts = ref("");

    const getPosts = async () => {
      const res = await fetch("http://localhost:3000/posts");
      const data = await res.json();
      posts.value = data;
    };
    getPosts();
    return { posts };
  },
};
</script>
