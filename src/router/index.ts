import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeA from "@/views/home/index.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeA,
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
