import { createRouter, createWebHistory } from "vue-router";
import MainBlock from "../views/MainBlock.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainBlock,
  },
  {
    path: "/favourites",
    name: "favourites",
    component: () => import("../views/FavouritesBlock.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
