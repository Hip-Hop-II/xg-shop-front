<template>
  <navigator open-type="navigate" hover-class="none" url="/pages/order/details">
    <div class="flex items-stretch">
      <img src="http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=200&h=200"
        class="w-30 h-30" />
      <div class="flex-1 mx-5 flex flex-col py-0.5">
        <h3 class="text-base font-medium flex-1 line-clamp-3">1米加粗快充线1米加粗快充线1米加粗快充线</h3>
        <div>
          <p class="text-FF3333 text-xl font-medium">5.99</p>
          <p class="text-xs text-666666">{{ props.createTime }}</p>
        </div>
      </div>
      <span class="text-1A1A1A flex items-center">x1</span>
    </div>
  </navigator>
</template>

<script setup lang="ts">
const props = defineProps<{
  createTime?: string
}>();
</script>