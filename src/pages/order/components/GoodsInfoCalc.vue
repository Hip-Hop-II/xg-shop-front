<template>
  <div class="flex items-center">
    <navigator open-type="navigate" hover-class="none" url="/pages/order/details">
      <img src="http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=200&h=200"
        class="w-30 h-30" />
    </navigator>
    <div class="flex-1 mx-5">
      <navigator open-type="navigate" hover-class="none" url="/pages/order/details">
        <h3 class="text-base line-clamp-3 mb-2">1米加粗快充线1米加粗快充线1米加粗快充线1米加粗快充线</h3>
      </navigator>
      <div class="flex items-center justify-between">
        <p class="text-FF3333 text-xl font-medium">5.99</p>
        <amount-change v-model="product.amount" :max="product.max" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AmountChange from '@/components/AmountChange.vue';
import { ref } from 'vue';

const product = ref({
  amount: 1,
  max: 10
})
</script>