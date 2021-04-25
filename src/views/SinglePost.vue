<template>
  <h2>{{ posts.title }}</h2>
  <p>{{ posts.body }}</p>
  <span v-for="tag in posts.tags" :key="tag">
    <router-link :to="{ name: 'Tag', params: { tag: tag } }"
      >#{{ tag }}</router-link
    ></span
  >
  <button @click="handleClick">Delete Post</button>
  <router-link :to="{ name: 'Edit', params: { id: posts.id } }">
    <button>Edit Post</button>
  </router-link>
</template>

<script>
import { onMounted } from "vue";
import getPosts from "../composables/getPosts";
import { projectFirestore } from "../firebase/config";
import { useRouter } from "vue-router";
export default {
  props: ["id"],
  setup(props) {
    const { posts, getData } = getPosts(props.id);
    onMounted(getData);

    const router = useRouter();
    const handleClick = async () => {
      await projectFirestore
        .collection("posts")
        .doc(props.id)
        .delete();
      router.push("/");
    };

    return { posts, handleClick };
  },
};
</script>

<style></style>
