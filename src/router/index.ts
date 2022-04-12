import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
// import Layout from "@/views/layout/index.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/",
    name: "/nav",
    component: () => import("@/layout/index.vue"),
    redirect: "nav1",
    children: [
      {
        path: "/nav1",
        name: "nav1",
        component: () => import("@/views/nav1/index.vue"),
        redirect: "/nav1/item1",
        children: [
          {
            path: "/nav1/item1",
            name: "item1",
            component: () => import("@/views/nav1/item1/index.vue"),
          },
          {
            path: "/nav1/item2",
            name: "item2",
            component: () => import("@/views/nav1/item2/index.vue"),
          },
          {
            path: "/nav1/item3",
            name: "item3",
            component: () => import("@/views/nav1/item3/index.vue"),
          },
        ],
      },
      {
        path: "/nav2",
        name: "nav2",
        component: () => import("@/views/nav2/index.vue"),
      },
      {
        path: "/nav3",
        name: "nav3",
        component: () => import("@/views/nav3/index.vue"),
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/login/page404.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
