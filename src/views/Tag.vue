<template>
  <div class="home">
    <div v-for="post in postMatchingTag" :key="post.id">
      <PostList :id="post.id" />
    </div>
  </div>
  <TagList />
</template>

<script>
import getPosts from "../composables/getPosts";
import { computed, toRefs } from "vue";
import PostList from "../components/PostList.vue";
import TagList from "../components/TagList.vue";
// import { useRoute } from "vue-router";

export default {
  name: "Tag",
  components: {
    PostList,
    TagList,
  },
  props: {
    tag: String,
  },
  setup(props) {
    const { posts } = getPosts();

    // we could use route.params.tag instead of passing a prop
    // const route = useRoute();
    // console.log(route.params.tag);

    // using `toRefs` to create a reactive reference to the `tag` property of props
    const { tag } = toRefs(props);
    const postMatchingTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(tag.value));
    });

    return { posts, postMatchingTag };
  },
};
</script>
