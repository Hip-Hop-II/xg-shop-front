<template>
  <div class="bg-F5F8FF min-h-screen px-2.5 py-5">
    <div class="grid grid-cols-2 gap-2.5">
      <goods-item />
    </div>
    <div class="fixed right-2.5 top-1/2 bg-white rounded-full p-3" @click="toCart">
      <div class="absolute top-1 right-1 bg-FF3333 text-xs text-white rounded-full min-w-4 px-0.5 text-center">
        0
      </div>
      <img src="../../static/imgs/cart-checked.png" class="w-6 h-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import GoodsItem from '../../components/GoodsItem.vue';

const toCart = () => {
  uni.navigateTo({
    url: '/pages/cart/index'
  })
}
</script>