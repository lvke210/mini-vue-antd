<template>
  <div id="login_wrap">
    <div class="wrap">
      <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 18 }">
        <a-form-item label="name"><a-input></a-input></a-form-item>
        <a-form-item label="password"
          ><a-input type="password"></a-input
        ></a-form-item>
      </a-form>
      <div class="form_btn">
        <a-button type="primary" @click="login">登陆</a-button>
        <a-button>注册</a-button>
      </div>
    </div>
  </div>
  <a-modal :visible="visible" @cancel="cancel" @ok="cancel">
    hello modal
  </a-modal>
</template>
<script setup lang="ts">
import { ref } from "@vue/runtime-dom"

const visible = ref(false)
function login() {
  visible.value = true
}
function cancel() {
  visible.value = false
}
</script>
<style lang="scss">
#login_wrap {
  width: 100vw;
  height: 100vh;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgb(163, 191, 248);
  .wrap {
    height: 309px;
    width: 500px;
    padding: 50px 30px;
    background-color: rgb(206, 224, 255);
  }
  .form_btn {
    display: flex;
    justify-content: space-evenly;
    margin-top: 60px;
  }
}
</style>
