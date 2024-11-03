<template>
  <div class="min-h-screen bg-F5F8FF p-2.5 pt-28">
    <div class="bg-white rounded-md flex items-center justify-between p-5 fixed top-2.5 left-2.5 right-2.5">
      <div>
        <img src="../../static/imgs/all.png" class="h-5 m-auto" />
        <p class="text-sm text-1A1A1A mt-2">全部</p>
      </div>
      <div class="relative">
        <span
          class="absolute -top-2 right-0 text-white bg-FF3333 rounded-full text-xs leading-4 px-1 min-w-4 h-4 text-center">1</span>
        <img src="../../static/imgs/release.png" class="h-5 m-auto" />
        <p class="text-sm text-1A1A1A mt-2">已发货</p>
      </div>
      <div class="relative">
        <span
          class="absolute -top-2 right-0 text-white bg-FF3333 rounded-full text-xs leading-4 px-1 min-w-4 h-4 text-center">9</span>
        <img src="../../static/imgs/express.png" class="h-5 m-auto" />
        <p class="text-sm text-1A1A1A mt-2">待发货</p>
      </div>
      <div class="relative">
        <span
          class="absolute -top-2 right-0 text-white bg-FF3333 rounded-full text-xs leading-4 px-1 min-w-4 h-4 text-center">9</span>
        <img src="../../static/imgs/money.png" class="h-5 m-auto" />
        <p class="text-sm text-1A1A1A mt-2">退款</p>
      </div>
    </div>
    <div class="bg-white rounded-md px-2.5 py-5">
      <navigator open-type="navigate" hover-class="none" url="/pages/index/index">
        <div class="flex items-center mb-4">
          <div class="text-1C1C1C mr-1">商品中心</div>
          <uni-icons type="right" size="16" color="#999999" />
          <div class="flex-1 text-666666 text-right">交易完成</div>
        </div>
      </navigator>
      <goods-info :create-time="'下单时间2024-10-17'" />
      <div class="py-5 border-t mt-4 border-E6E6E6">
        <div>物流信息</div>
        <div>上海快递：132456789</div>
      </div>
      <div class="flex justify-end">
        <button
          class="border border-999999 rounded-md text-base bg-white text-1A1A1A leading-10 w-20 p-0 m-0">申请售后</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GoodsInfo from './components/GoodsInfo.vue';
</script>