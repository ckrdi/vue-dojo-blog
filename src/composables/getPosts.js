import { onMounted, ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const getData = async () => {
    const res = await fetch("http://localhost:3000/posts");
    const data = await res.json();
    posts.value = data;
  };
  onMounted(getData);
  return { posts };
};

export default getPosts;
