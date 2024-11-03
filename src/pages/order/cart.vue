<template>
  <div class="flex flex-col h-screen bg-F5F8FF">
    <div class="flex-1 overflow-y-auto p-2.5">
      <navigator open-type="navigate" hover-class="none" url="/pages/address/index">
        <address-item>
          <template #right>
            <uni-icons type="right" size="20" color="#999999" />
          </template>
        </address-item>
      </navigator>
      <div>
        <h1 class="text-xl font-medium mt-6">订单1</h1>
        <div class="bg-white rounded-md px-2.5 py-4 mt-2.5">
          <goods-info />
          <ul>
            <li class="order-info-item">
              <span>商品金额</span>
              <span>¥5.99</span>
            </li>
            <li class="order-info-item">
              <span>运费</span>
              <span>¥5.99</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between px-5 py-3 bg-white border-t border-E6E6E6 safe-area">
      <div class="flex-1 flex items-center">
        <span class="text-1A1A1A">合计</span>
        <span class="text-FF3333 text-xl font-medium ml-2 mr-6">¥0.00</span>
      </div>
      <button class="m-0 bg-FF3333 rounded-full text-base text-white leading-8 px-5" hover-class="none">结算</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AddressItem from '../address/components/AddressItem.vue';
import GoodsInfo from './components/GoodsInfo.vue';
</script>

<style lang="scss" scoped>
.safe-area {
  padding-bottom: calc(env(safe-area-inset-bottom) + 24rpx);
}

.order-info-item {
  display: flex;
  justify-content: space-between;
  color: #1A1A1A;
  margin-top: 40rpx;
}
</style>