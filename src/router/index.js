import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SinglePost from "../components/SinglePost.vue";
import Create from "../views/Create.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/post/:id",
    name: "SinglePost",
    component: SinglePost,
    props: true,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
