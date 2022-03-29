<template>
  {{ count }}
  <a-button @click="increment">increment</a-button>
  <a-button>{{ double }}</a-button>
</template>
<script setup lang="ts">
import useCounter from "@/components/use/useCounter"
const obj = { start: 2, step: 2 }
const { count, double, increment } = useCounter(obj)
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #fff;
}
</style>
