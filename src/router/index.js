import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SinglePost from "../views/SinglePost.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";
import Tag from "../views/Tag.vue";

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
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
    props: true,
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: Tag,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
