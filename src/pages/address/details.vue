<template>
  <div class="address-form">
    <uni-forms ref="formRef" validateTrigger="blur" :rules="rules" :modelValue="formData">
      <uni-forms-item label="收货人" name="name">
        <uni-easyinput v-model="formData.name" :input-border="false" placeholder="请输入收货人" :clearSize="20" />
      </uni-forms-item>
      <uni-forms-item label="手机号" name="phone">
        <uni-easyinput v-model="formData.phone" :maxlength="11" :input-border="false" type="number" placeholder="请输入手机号"
          :clearSize="20" />
      </uni-forms-item>
      <uni-forms-item label="所在地区" name="areaCode">
        <uni-data-picker placeholder="请选择所在地区" :input-border="false" popup-title="请选择所在地区" :localdata="dataTree"
          v-model="formData.areaCode" />
      </uni-forms-item>
      <uni-forms-item label="详细地址" class="addr" name="address">
        <uni-easyinput type="textarea" :input-border="false" v-model="formData.address" placeholder="具体到门牌号"
          :clearSize="20" />
      </uni-forms-item>
    </uni-forms>
    <button class="bg-1764FF text-white text-xl leading-12.5 rounded-md" hover-class="none"
      @click="onSubmit">提交</button>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { phoneNumReg } from '../../static/js/utils';

const formRef = ref<any>(null);
const formData = ref({
  name: '',
  phone: '',
  provinceCode: '',
  cityCode: '',
  areaCode: '',
  address: ''
});
const dataTree = ref([{
  id: "1",
  text: "河北省",
  value: "1-0",
  children: [{
    id: "1-1",
    text: "石家庄市",
    value: "1-1",
    children: [{
      id: "1-1-1",
      text: "长安区",
      value: "1-1-1",
    },]
  }]
}]);
const rules = shallowRef({
  name: {
    rules: [{
      required: true,
      errorMessage: '收货人不能为空'
    }]
  },
  phone: {
    rules: [{
      required: true,
      errorMessage: '手机号不能为空'
    }, {
      pattern: phoneNumReg,
      errorMessage: '手机号格式不正确'
    }]
  },
  areaCode: {
    rules: [{
      required: true,
      errorMessage: '请选择所在地址'
    }]
  },
  address: {
    rules: [{
      required: true,
      errorMessage: '详细地址不能为空'
    }]
  }
})
const onSubmit = () => {
  formRef.value?.validate().then((res: any) => {
    console.log(res);
  }).catch((err: any) => {
    console.log(err);
  });
}
</script>

<style lang="scss" scoped>
.address-form {
  padding: 50rpx;

  :deep(.uni-easyinput__content) {
    border-radius: 12rpx;
    background-color: #f7f7f7 !important;

    input {
      height: 80rpx;
    }

    textarea {
      padding-left: 10rpx;
    }
  }

  :deep(.uni-data-tree) {
    .input-value {
      height: 80rpx;
      border: none;
      background-color: #f7f7f7 !important;
    }
  }
}

.addr {
  display: block;
}
</style>