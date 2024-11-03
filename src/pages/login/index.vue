<template>
  <img src="../../static/imgs/login.png" class="w-32 h-32 m-auto my-16" alt="登录" />
  <div class="p-5" :modelValue="formData">
    <h2 class="text-xl font-medium mb-2">手机号</h2>
    <uni-easyinput type="number" class="login-input" :input-border="false" placeholder="请输入手机号" :maxlength="11"
      v-model="formData.phone" :clearSize="20" />
    <h2 class="text-xl font-medium mt-6 mb-2">验证码</h2>
    <uni-easyinput type="number" class="login-input" :input-border="false" placeholder="请输入验证码" :maxlength="6"
      v-model="formData.code" :clearSize="20">
      <template #right>
        <send-verify-code :submit="getVerifyCode" v-model:disabled="disabled" />
      </template>
    </uni-easyinput>
    <button block class="mt-7 bg-1764FF text-white text-xl leading-12.5 rounded-md" @click="onSubmit"
      hover-class="none">登录</button>
  </div>
</template>

<script setup lang="ts">
import SendVerifyCode from '../../components/SendVerifyCode.vue';
import { phoneNumReg } from '../../static/js/utils';
import { onBeforeUnmount, reactive, ref, watch } from 'vue';

const formData = reactive({
  phone: '',
  code: ''
});
const disabled = ref(true);
const unwatch = watch(() => formData.phone, (v: string) => {
  disabled.value = !phoneNumReg.test(v);
})
const getVerifyCode = async () => {
  return true;
}
const onSubmit = () => {

}
onBeforeUnmount(unwatch);
</script>

<style lang="scss" scoped>
.login-input {
  :deep(.uni-easyinput__content) {
    border-radius: 12rpx;
    background-color: #f7f7f7 !important;

    input {
      height: 100rpx;
    }
  }
}
</style>