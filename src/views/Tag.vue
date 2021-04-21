<template>
  <div class="home">
    <div v-for="post in postMatchingTag" :key="post.id">
      <PostList :id="post.id" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, toRefs } from "vue";
import PostList from "../components/PostList.vue";
import { useRoute } from "vue-router";

export default {
  name: "Tag",
  components: {
    PostList,
  },
  props: {
    tag: String,
  },
  setup(props) {
    const posts = ref([]);
    const getPosts = async () => {
      const res = await fetch("http://localhost:3000/posts");
      const data = await res.json();
      posts.value = data;
    };
    onMounted(getPosts);

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
