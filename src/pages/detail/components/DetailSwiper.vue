<template>
  <swiper :style="`height: ${scaleHeight}px;`" circular :indicator-dots="true" :autoplay="true"
    indicator-color="#ffffff">
    <swiper-item>
      <image src="https://gips2.baidu.com/it/u=207216414,2485641185&fm=3028&app=3028&f=JPEG&fmt=auto?w=375&h=250"
        class="w-full" :style="`height: ${scaleHeight}px;`" />
    </swiper-item>
    <swiper-item>
      <image src="https://gips0.baidu.com/it/u=1490237218,4115737545&fm=3028&app=3028&f=JPEG&fmt=auto?w=375&h=250"
        class="w-full" :style="`height: ${scaleHeight}px;`" />
    </swiper-item>
  </swiper>
</template>

<script setup lang="ts">
const scaleHeight = Math.min(uni.getSystemInfoSync().windowWidth, 480);
</script>