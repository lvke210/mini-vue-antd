import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeA from "../views/login/login.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeA,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
