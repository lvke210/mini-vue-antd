import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.less"
console.log(App, "App", App.render, App.setup)

createApp(App).use(router).use(Antd).mount("#app")
