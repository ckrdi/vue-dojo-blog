<template>
  <router-link :to="{ name: 'SinglePost', params: { id: id } }">
    <h2>{{ posts.title }}</h2>
  </router-link>
  <p>{{ snippet }}</p>
  <span v-for="tag in posts.tags" :key="tag">
    <router-link :to="{ name: 'Tag', params: { tag: tag } }"
      >#{{ tag }}
    </router-link>
  </span>
</template>

<script>
import { ref } from "vue";
import getPosts from "../composables/getPosts";
export default {
  props: ["id"],
  setup(props) {
    const snippet = ref("");

    const { posts, getData } = getPosts(props.id);
    getData().then(() => {
      snippet.value = posts.value.body.substring(0, 50) + "...";
    });

    return { posts, snippet };
  },
};
</script>

<style></style>
