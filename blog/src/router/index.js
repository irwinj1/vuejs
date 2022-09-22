import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/newpost",
      name: "newpost",
      component: () => import("../views/NewPostView.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("../views/EditView.vue"),
    },
  ],
});

export default router;
