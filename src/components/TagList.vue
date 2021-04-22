<template>
  <span v-for="tag in tags" :key="tag">
    <router-link :to="{ name: 'Tag', params: { tag: tag } }">
      #{{ tag }}
    </router-link>
  </span>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const tags = ref([]);
    const tagSet = new Set();
    const getTags = () => {
      posts.value.forEach((post) => {
        post.tags.forEach((tag) => {
          tagSet.add(tag);
        });
      });
      tags.value = [...tagSet];
    };

    const posts = ref([]);
    const getPosts = async () => {
      const res = await fetch("http://localhost:3000/posts");
      const data = await res.json();
      posts.value = data;
      getTags();
    };
    onMounted(getPosts);
    return { posts, tags };
  },
};
</script>

<style></style>
