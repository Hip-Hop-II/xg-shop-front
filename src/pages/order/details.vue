<template>
  <div class="min-h-screen bg-F5F8FF p-2.5">
    <address-item />
    <div class="bg-white rounded-md px-2.5 py-4 mt-2.5">
      <goods-info />
      <ul class="mt-5">
        <li class="order-info-item">
          <span>商品金额</span>
          <span>¥5.99</span>
        </li>
        <li class="order-info-item">
          <span>运费</span>
          <span>¥5.99</span>
        </li>
        <li class="order-info-item">
          <span>积分抵扣</span>
          <span>-200</span>
        </li>
        <li class="order-info-item">
          <span>实付金额</span>
          <span>¥5.99</span>
        </li>
        <li class="order-info-item">
          <span>订单编号</span>
          <span>¥5.99</span>
        </li>
        <li class="order-info-item">
          <span>下单时间</span>
          <span>¥5.99</span>
        </li>
        <li class="order-info-item">
          <span>成交时间</span>
          <span>¥5.99</span>
        </li>
      </ul>
      <div class="flex justify-end">
        <button
          class="border border-999999 rounded-md text-base bg-white text-1A1A1A leading-10 w-20 p-0 m-0 mr-5">申请售后</button>
        <button
          class="border border-FF3333 rounded-md text-base bg-white text-FF3333 leading-10 w-20 p-0 m-0">再来一单</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AddressItem from '../address/components/AddressItem.vue';
import GoodsInfo from './components/GoodsInfo.vue';
</script>

<style lang="scss" scoped>
.order-info-item {
  display: flex;
  justify-content: space-between;
  color: #1A1A1A;
  margin-bottom: 40rpx;
}
</style>