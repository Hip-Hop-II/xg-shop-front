<template>
  <div class="flex flex-col h-screen">
    <div class="flex-1 overflow-y-auto">
      <detail-swiper />
    </div>
    <footer class="p-5 flex items-center">
      <div>
        <img src="../../static/imgs/headphones.png" class="w-5 h-5 m-auto" />
        <p class="text-1A1A1A">客服</p>
      </div>
      <div class="flex-1"></div>
      <button class="bg-FF8812 w-30 h-10 leading-10 text-center text-white rounded-full mr-5">加入购物车</button>
      <button class="bg-FF3333 w-30 h-10 leading-10 text-center text-white rounded-full" @click="toDetail">立即购买</button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import DetailSwiper from './components/DetailSwiper.vue';

const toDetail = () => {
  uni.navigateTo({
    url: '/pages/order/index'
  })
}
</script>

<style scoped lang="scss">
footer {
  padding-bottom: calc(env(safe-area-inset-bottom) + 40rpx);
}
</style>