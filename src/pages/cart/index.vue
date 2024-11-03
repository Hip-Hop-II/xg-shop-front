<template>
  <div class="flex flex-col h-screen">
    <div class="flex items-center justify-between px-4 py-2.5 text-333333">
      <span>购物车管理</span>
      <span class="text-sm border rounded-full px-3 py-1" @click="onManageModeChange">{{ isManageMode ? '完成' : '管理'
        }}</span>
    </div>
    <ul class="flex-1 overflow-y-auto bg-F5F8FF pb-2.5">
      <li class="flex items-stretch bg-white mt-2.5">
        <div class="px-3 flex items-center">
          <uni-icons type="checkbox-filled" color="#1764FF" size="20" />
        </div>
        <img src="http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=200&h=200"
          class="h-30" @click="toDetail" />
        <div class="flex flex-col py-2.5 px-4">
          <navigator open-type="navigate" hover-class="none" url="/pages/detail/index" class="flex-1">1米加粗快充线6用适用于各个手机品牌
          </navigator>
          <div class="flex items-center justify-between">
            <h2 class="text-FF3333 text-xl font-medium"><span class="text-xs mr-1">¥</span>5.99</h2>
            <amount-change v-model="product.amount" :max="product.max" />
          </div>
        </div>
      </li>
      <li class="flex items-stretch bg-white mt-2.5">
        <div class="px-3 flex items-center">
          <uni-icons type="circle" color="#C4C4C4" size="20" />
        </div>
        <img src="http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=200&h=200"
          class="h-30" @click="toDetail" />
        <div class="flex flex-col py-2.5 px-4">
          <navigator open-type="navigate" hover-class="none" url="/pages/detail/index" class="flex-1">1米加粗快充线6用适用于各个手机品牌
          </navigator>
          <div class="flex items-center justify-between">
            <h2 class="text-FF3333 text-xl font-medium"><span class="text-xs mr-1">¥</span>5.99</h2>
            <amount-change v-model="product.amount" :max="product.max" />
          </div>
        </div>
      </li>
    </ul>
    <div class="flex items-center justify-between px-5 py-3 safe-area">
      <div class="flex items-center">
        <uni-icons type="checkbox-filled" color="#1764FF" size="20" />
        <span class="text-1A1A1A ml-1">全选</span>
      </div>
      <button v-if="isManageMode" class="m-0 bg-FF3333 rounded-full text-base text-white leading-8 px-5"
        hover-class="none">删除</button>
      <div v-else class="flex items-center">
        <span class="text-1A1A1A">合计</span>
        <span class="text-FF3333 text-xl font-medium ml-2 mr-6">¥0.00</span>
        <button class="m-0 bg-FF3333 rounded-full text-base text-white leading-8 px-5" hover-class="none"
          @click="toOrder">去结算</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AmountChange from '../../components/AmountChange.vue';

const isManageMode = ref(false);
const product = ref({
  amount: 2,
  max: 9
});

const onManageModeChange = () => {
  isManageMode.value = !isManageMode.value;
}
const toDetail = () => {
  uni.navigateTo({
    url: '/pages/detail/index'
  })
}
const toOrder = () => {
  uni.navigateTo({
    url: '/pages/order/cart'
  })
}
</script>

<style lang="scss" scoped>
.safe-area {
  padding-bottom: calc(env(safe-area-inset-bottom) + 24rpx);
}
</style>