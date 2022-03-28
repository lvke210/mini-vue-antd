<template>
  <a-layout-sider>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
    >
      <a-sub-menu
        v-for="item in routeList"
        :key="item.name"
        :title="item.name"
        @click="subMenuClick(item)"
      >
        <a-menu-item
          v-for="val in item.children"
          :key="val.name"
          @click.stop="subMenuClick(val)"
          >{{ val.name }}</a-menu-item
        >
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
import { ref } from "vue"

const selectedKeys = ref<string[]>(["1"])
const openKeys = ref<string[]>(["sub1"])

const route = useRoute()
const router = useRouter()
const routeList = route.matched[0].children
console.log(routeList, "route")

function subMenuClick(item: any) {
  console.log(item)

  router.push({
    path: item.path,
  })
}
</script>
<style>
.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
  border-right: none;
}
</style>
