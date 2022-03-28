import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeA from "@/views/home/index.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "/",
    component: HomeA,
    redirect: "home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/login.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
