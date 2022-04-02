<template>
  {{ count }}
  <a-button @click="increment">increment</a-button>
  <a-button>{{ double }}</a-button>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import useCounter from "@/components/use/useCounter"
export default defineComponent({
  name: "useCompositionApiDemo",
  setup() {
    const obj = { start: 2, step: 2 }
    const { count, double, increment } = useCounter(obj)
    return {
      count,
      double,
      increment,
    }
  },
})
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #fff;
}
</style>
