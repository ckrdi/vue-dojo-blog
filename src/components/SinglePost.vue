<template>
  <h2>{{ post.title }}</h2>
  <p>{{ post.body }}</p>
  <span v-for="tag in post.tags" :key="tag">
    <router-link :to="{ name: 'Tag', params: { tag: tag } }"
      >#{{ tag }}</router-link
    ></span
  >
</template>

<script>
import { ref } from "vue";
export default {
  props: ["id"],
  setup(props) {
    const post = ref("");

    const getPost = async () => {
      const res = await fetch(`http://localhost:3000/posts/${props.id}`);
      const data = await res.json();
      post.value = data;
    };
    getPost();

    return { post };
  },
};
</script>

<style></style>
