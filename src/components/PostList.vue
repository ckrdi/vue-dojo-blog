<template>
  <router-link :to="{ name: 'SinglePost', params: { id: id } }"
    ><h2>{{ post.title }}</h2></router-link
  >
  <p>{{ snippet }}</p>
  <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    id: Number,
  },
  setup(props) {
    const post = ref("");
    const snippet = ref("");

    const getPost = async () => {
      const res = await fetch(`http://localhost:3000/posts/${props.id}`);
      const data = await res.json();
      post.value = data;
      snippet.value = post.value.body.substring(0, 50) + "...";
    };
    getPost();

    return { post, snippet };
  },
};
</script>

<style></style>
