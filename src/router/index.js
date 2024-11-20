import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/SelectTable",
    },
    {
      path: "/SelectTable",
      name: "SelectTable",
      component: () => import("@/views/SelectTable.vue"),
    },
    {
      path: "/Camera",
      name: "Camera",
      component: () => import("@/views/Camera.vue"),
    },
    {
      path: "/Order/:id",
      name: "order",
      component: () => import("@/views/order.vue"),
    },
    {
      path: "/CheckOut/:id",
      name: "CheckOut",
      component: () => import("@/views/CheckOut.vue"),
    },
    {
      path: "/Details/:id",
      name: "Details",
      component: () => import("@/views/Details.vue"),
    },
  ],
});

export default router;
