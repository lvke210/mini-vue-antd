<template>
  <div>home</div>
</template>
<script setup lang="ts">
import { getUser } from "@/api"
import { onMounted, reactive } from "vue"
const state = reactive<any>({
  userList: [],
})
onMounted(async () => {
  state.userList = await getUser()
  console.log(state.userList)
})
</script>
