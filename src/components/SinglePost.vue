<template>
  <h2>{{ posts.title }}</h2>
  <p>{{ posts.body }}</p>
  <span v-for="tag in posts.tags" :key="tag">
    <router-link :to="{ name: 'Tag', params: { tag: tag } }"
      >#{{ tag }}</router-link
    ></span
  >
</template>

<script>
import { onMounted } from "vue";
import getPosts from "../composables/getPosts";
export default {
  props: ["id"],
  setup(props) {
    const { posts, getData } = getPosts(props.id);
    onMounted(getData);

    return { posts };
  },
};
</script>

<style></style>
