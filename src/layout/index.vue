<template>
  <div class="layout-wrap">
    <Header />
    <div class="content_wrap">
      <Sider />
      <Content />
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from "./header.vue"
import Sider from "./sider.vue"
import Content from "./content.vue"
</script>
<style scoped>
.content_wrap {
  display: flex;
  height: calc(100vh - 64px);
}
.layout-wrap {
  height: 100vh;
}
.code-box-demo {
  text-align: center;
}
.ant-layout-header,
.ant-layout-footer {
  color: rgb(255, 255, 255);
  background: #0399c7a9;
}
[data-theme="dark"] .ant-layout-header {
  background: #6aa0c7;
}
[data-theme="dark"] .ant-layout-footer {
  background: #6aa0c7;
}
.ant-layout-footer {
  line-height: 1.5;
}
.ant-layout-sider {
  color: rgb(0, 0, 0);
  background: #ffffff !important;
  padding: 10px;
}
[data-theme="dark"] .ant-layout .ant-layout-sider {
  background: #ffffff;
}
.ant-layout-content {
  min-height: 120px;
  color: rgb(0, 0, 0);
  background: rgb(238, 237, 237);
  padding: 10px;
}
[data-theme="dark"] .ant-layout-content {
  background: #ffffff;
}
.code-box-demo > .ant-layout + .ant-layout {
  margin-top: 48px;
}
</style>
