import { computed } from "@vue/reactivity"
import { ref } from "vue"
interface CProps {
  start: number
  step: number
}
export default function (props: CProps) {
  const count = ref(props.start)
  function increment() {
    count.value += props.step
  }
  const double = computed(() => count.value * 2)
  return {
    count,
    increment,
    double,
  }
}
