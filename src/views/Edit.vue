<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input type="text" v-model="posts.title" required />
      <label>Content:</label>
      <textarea v-model="posts.body" required></textarea>
      <label>Tags: use comma to separate tag</label>
      <input type="text" v-model="posts.tags" />
      <button>Save Post</button>
    </form>
  </div>
</template>

<script>
import { onMounted, ref, toRefs } from "@vue/reactivity";
import { useRouter } from "vue-router";
import getPosts from "../composables/getPosts";
import { projectFirestore } from "../firebase/config";

export default {
  props: ["id"],
  setup(props) {
    // const { id } = toRefs(props);
    const { posts, getData } = getPosts(props.id);
    getData();

    const router = useRouter();

    const handleSubmit = async () => {
      const updatePost = {
        title: posts.value.title,
        body: posts.value.body,
        tags: posts.value.tags.split(","),
      };
      await projectFirestore
        .collection("posts")
        .doc(props.id)
        .update(updatePost);
      router.push({ name: "Home" });
    };

    return { posts, handleSubmit };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
