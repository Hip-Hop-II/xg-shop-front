<template>
  <div class="flex flex-col h-screen bg-F5F8FF">
    <div class="flex-1 overflow-y-auto p-2.5">
      <address-item>
        <template #right>
          <navigator open-type="navigate" hover-class="none" url="/pages/address/details?id=1"
            class="text-1764FF text-sm">编辑</navigator>
        </template>
      </address-item>
    </div>
    <div class="safe-area p-5">
      <button class="bg-1764FF text-white text-xl leading-12.5 rounded-md" hover-class="none">添加新地址</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AddressItem from './components/AddressItem.vue';
</script>

<style lang="scss" scoped>
.address-item {
  :deep(.address) {
    font-size: 28rpx;
  }
}

.safe-area {
  padding-bottom: calc(env(safe-area-inset-bottom) + 40rpx);
}
</style>