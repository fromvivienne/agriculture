import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/member",
    name: "Member",
    component: () =>
      import("../views/Member.vue"),
  },
  {
    path: "/campfire",
    name: "Campfire",
    component: () =>
      import("../views/Campfire.vue"),
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: () =>
      import("../views/Calendar.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
