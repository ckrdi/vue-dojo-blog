<template>
  <div class="home">
    <router-link :to="{ name: 'Create' }">New Post</router-link>
    <div v-for="post in posts" :key="post.id">
      <PostList :id="post.id" />
    </div>
  </div>
  <!-- <InputForm v-model="pageTitle" />
  <input type="text" v-model="pageTitle" /> -->
  <TagList />
</template>

<script>
import getPosts from "../composables/getPosts";
import PostList from "../components/PostList.vue";
import InputForm from "../components/InputForm.vue";
import TagList from "../components/TagList.vue";

export default {
  name: "Home",
  components: {
    PostList,
    InputForm,
    TagList,
  },
  setup() {
    const { posts } = getPosts();
    // const pageTitle = ref("hello");
    return { posts };
  },
};
</script>
