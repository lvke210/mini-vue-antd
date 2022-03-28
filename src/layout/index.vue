<template>
  <a-layout class="layout-wrap">
    <a-layout-header>Header</a-layout-header>
    <a-layout>
      <a-layout-sider>Sider</a-layout-sider>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
    <!-- <a-layout-footer>Footer</a-layout-footer> -->
  </a-layout>
</template>
<style>
.layout-wrap {
  height: 100vh;
}
.ant-layout .code-box-demo {
  text-align: center;
}
.ant-layout .ant-layout-header,
.ant-layout .ant-layout-footer {
  color: rgb(255, 255, 255);
  background: #000000c7;
}
[data-theme="dark"] .ant-layout .ant-layout-header {
  background: #6aa0c7;
}
[data-theme="dark"] .ant-layout .ant-layout-footer {
  background: #6aa0c7;
}
.ant-layout .ant-layout-footer {
  line-height: 1.5;
}
.ant-layout .ant-layout-sider {
  color: rgb(0, 0, 0);
  background: #ffffff;
  padding: 10px;
}
[data-theme="dark"] .ant-layout .ant-layout-sider {
  background: #ffffff;
}
.ant-layout .ant-layout-content {
  min-height: 120px;
  color: rgb(0, 0, 0);
  background: rgb(238, 237, 237);
  padding: 10px;
}
[data-theme="dark"] .ant-layout .ant-layout-content {
  background: #ffffff;
}
.ant-layout > .code-box-demo > .ant-layout + .ant-layout {
  margin-top: 48px;
}
</style>
