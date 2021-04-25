import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getPosts = (id = "") => {
  const posts = ref([]);
  const getData = async () => {
    if (id) {
      const res = await projectFirestore
        .collection("posts")
        .doc(id)
        .get();
      posts.value = { ...res.data(), id: res.id };
    } else {
      const res = await projectFirestore
        .collection("posts")
        .orderBy("createdAt", "desc")
        .get();
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    }
  };

  return { posts, getData };
};

export default getPosts;
