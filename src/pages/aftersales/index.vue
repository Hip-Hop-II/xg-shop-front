<template>
  <div class="p-4">
    <goods-info />
  </div>
  <div class="h-5 bg-F7F7F7" />
  <div class="px-5 mt-4">
    <navigator open-type="navigate" hover-class="none" url="/pages/aftersales/exchange">
      <div class="flex items-center">
        <div class="flex-1">
          <div class="text-1A1A1A font-medium mb-1">仅退款(无需退货)</div>
          <div class="text-666666 text-xs">未收到/已拒收，或与商家协商一致不用退货只退款</div>
        </div>
        <uni-icons type="right" size="16" color="#999999" />
      </div>
    </navigator>
    <navigator open-type="navigate" hover-class="none" url="/pages/aftersales/exchange">
      <div class="flex items-center my-5">
        <div class="flex-1">
          <div class="text-1A1A1A font-medium mb-1">退货退款</div>
          <div class="text-666666 text-xs">已收到货，需退还收到的货物</div>
        </div>
        <uni-icons type="right" size="16" color="#999999" />
      </div>
    </navigator>
    <navigator open-type="navigate" hover-class="none" url="/pages/aftersales/exchange">
      <div class="flex items-center">
        <div class="flex-1">
          <div class="text-1A1A1A font-medium mb-1">换货</div>
          <div class="text-666666 text-xs">已收到货，需更换收到的货物</div>
        </div>
        <uni-icons type="right" size="16" color="#999999" />
      </div>
    </navigator>
  </div>
</template>

<script setup lang="ts">
import GoodsInfo from '../order/components/GoodsInfo.vue';
</script>