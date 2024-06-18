import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./components/HomeView.vue";
import AboutView from "./components/AboutView.vue";

const routes = [
  { path: "/home", component: HomeView },
  { path: "/about", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(BASE_PATH),
  routes,
});

export default router;
