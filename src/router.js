import { createWebHistory, createRouter } from "vue-router";

const routes = [];

const router = createRouter({
  history: createWebHistory(BASE_PATH),
  routes,
});

export default router;
