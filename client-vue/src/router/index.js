import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Ruffle",
    component: () => import("../views/Ruffle.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router

router.beforeEach(async (to, from, next) => {  
  await store.dispatch("getUserAuthState")
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.getAuthState) {
      console.log(!store.getters.getAuthState)
      next({
        path: "/auth",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

