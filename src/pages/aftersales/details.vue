<template>
  <div class="p-5 track">
    <div class="text-lg font-medium text-1A1A1A mb-3">填写物流信息</div>
    <uni-easyinput v-model="trackNum" :input-border="false" placeholder="请输入物流单号" :clearSize="20" />
  </div>
  <div class="h-5 bg-F7F7F7" />
  <div class="p-5">
    <div class="flex items-center justify-between text-lg mb-4">
      <div class="text-666666">退货数量</div>
      <div class="text-1A1A1A">1</div>
    </div>
    <div class="flex items-center justify-between text-lg mb-4">
      <div class="text-666666">退款金额</div>
      <div class="text-1A1A1A">10.08</div>
    </div>
    <div class="text-666666 text-lg mb-2">退款原因</div>
    <div class="text-999999 text-sm bg-F7F7F7 rounded-md py-2.5 px-4 mb-4">与客服沟通一致请退款</div>
    <div class="text-666666 text-lg mb-2">已上传图片</div>
    <div class="flex flex-wrap">
      <img src="http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=200&h=200"
        class="h-15 w-15 mr-2.5 mb-2.5" />
      <img src="http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=200&h=200"
        class="h-15 w-15 mr-2.5 mb-2.5" />
    </div>
    <button block class="mt-7 bg-1764FF text-white text-xl leading-12.5 rounded-md" hover-class="none">提交</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const trackNum = ref('');
</script>

<style lang="scss" scoped>
.track {
  :deep(.uni-easyinput__content) {
    border-radius: 12rpx;
    background-color: #f7f7f7 !important;

    input {
      height: 80rpx;
    }
  }
}
</style>