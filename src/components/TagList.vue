<template>
  <span v-for="tag in tags" :key="tag">
    <router-link :to="{ name: 'Tag', params: { tag: tag } }">
      #{{ tag }}
    </router-link>
  </span>
</template>

<script>
import { ref } from "vue";
import getPosts from "../composables/getPosts";

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

    const { posts, getData } = getPosts();
    getData().then(() => getTags());

    return { posts, tags };
  },
};
</script>

<style></style>
