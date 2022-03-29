import { defineComponent, createVNode, ref } from "vue"
const data = ref("hello ref")
export default defineComponent({
  render() {
    return createVNode("div", { id: "appaaa" }, [
      createVNode("h1", { class: "hello" }, data.value),
    ])
  },
})
