import { ref } from "vue";

const getPosts = (id = "") => {
  const posts = ref([]);
  const getData = async () => {
    const res = await fetch(`http://localhost:3000/posts/${id}`);
    const data = await res.json();
    posts.value = data;
  };

  return { posts, getData };
};

export default getPosts;
