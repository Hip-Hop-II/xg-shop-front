<template>
  <div class="px-7.5 py-5">
    <div class="flex items-center mb-4 text-lg text-1A1A1A">
      <div class="flex-1">货物状态</div>
      <div class="font-medium mr-5">已收到货</div>
      <uni-icons type="right" size="16" color="#999999" />
    </div>
    <div class="flex items-center mb-4 text-lg text-1A1A1A">
      <div class="flex-1">退款原因</div>
      <div class="font-medium mr-5" @click="showRefundPopup">请选择</div>
      <uni-icons type="right" size="16" color="#999999" />
    </div>
    <div class="flex items-center text-lg text-1A1A1A">
      <div class="flex-1">退货数量</div>
      <amount-change v-model="product.amount" :max="product.max" />
    </div>
    <div class="flex items-center mb-4 text-lg text-1A1A1A">
      <div class="flex-1">换货原因</div>
      <div class="font-medium mr-5" @click="showRefundPopup">请选择</div>
      <uni-icons type="right" size="16" color="#999999" />
    </div>
    <div class="flex items-center mb-4 text-lg text-1A1A1A">
      <div class="flex-1">换货数量</div>
      <amount-change v-model="product.amount" :max="product.max" />
    </div>
    <div class="flex items-center text-lg text-1A1A1A">
      <div class="flex-1">换货商品</div>
      <div class="font-medium mr-5" @click="showRefundPopup">请选择</div>
      <uni-icons type="right" size="16" color="#999999" />
    </div>
  </div>
  <div class="h-5 bg-F7F7F7" />
  <div class="px-7.5 py-5">
    <div class="text-lg text-1A1A1A font-medium mb-2.5">申请退款金额</div>
    <div class="flex items-center mb-2.5">
      <div class="flex-1 text-lg text-1A1A1A">¥ 10.25</div>
      <img src="../../static/imgs/edit.png" class="w-3 h-3" />
      <div class="pl-2.5 text-xs text-666666">修改金额</div>
    </div>
    <div class="flex mb-2.5 input-refund">
      <uni-easyinput type="digit" class="flex-1" v-model="refundAmount" focus placeholder="请输入退款金额" :clearSize="20"
        :input-border="false" />
      <button class="bg-1764FF text-white text-xs h-8 ml-2 leading-8 px-3 rounded-md">确定</button>
    </div>
    <div class="text-FF3333 text-sm bg-F7F7F7 rounded-md p-2.5">本次最多可申请￥10.58</div>
  </div>
  <div class="h-5 bg-F7F7F7" />
  <div class="px-7.5 py-5 input-refund">
    <div class="text-lg text-1A1A1A font-medium mb-2.5">仅退款原因</div>
    <uni-easyinput type="textarea" placeholder="请输入退款原因" :maxlength="100" :clearSize="20" :input-border="false" />
  </div>
  <div class="px-7.5 py-5 input-refund">
    <div class="text-lg text-1A1A1A font-medium mb-2.5">退款原因</div>
    <uni-easyinput type="textarea" placeholder="请输入退款原因" :maxlength="100" :clearSize="20" :input-border="false" />
  </div>
  <div class="px-7.5 py-5 input-refund">
    <div class="text-lg text-1A1A1A font-medium mb-2.5">寄件信息</div>
    <uni-easyinput placeholder="请输入物流单号" :clearSize="20" :maxlength="50" :input-border="false" />
  </div>
  <div class="h-5 bg-F7F7F7" />
  <div class="px-7.5 py-5">
    <div class="text-lg text-1A1A1A font-medium mb-2.5">收货地址</div>
    <address-item class="address-item">
      <template #right>
        <uni-icons type="right" size="20" color="#999999" />
      </template>
    </address-item>
  </div>
  <div class="h-5 bg-F7F7F7" />
  <div class="px-7.5 py-5 input-refund">
    <div class="text-lg text-1A1A1A font-medium mb-2.5">补充说明</div>
    <uni-easyinput type="textarea" placeholder="请输入补充说明" :maxlength="100" :clearSize="20" :input-border="false" />
  </div>
  <div class="h-5 bg-F7F7F7" />
  <div class="px-7.5 py-5">
    <div class="text-lg text-1A1A1A font-medium mb-2.5">上传图片<span class="text-FF3333 text-sm">最多上传3张</span></div>
    <div class="flex flex-wrap">
      <uni-file-picker limit="3" :imageStyles="{
        width: 70,
        height: 70,
        border: false
      }" :listStyles="{ border: false }" :auto-upload="false">
        <img src="../../static/imgs/upload.png" class="h-15 w-15" />
      </uni-file-picker>
    </div>
  </div>
  <div class="px-7.5 py-5 safe-area">
    <button block class="bg-1764FF text-white text-xl leading-12.5 rounded-md" hover-class="none">提交</button>
  </div>
  <uni-popup ref="refundRef" background-color="#fff" :is-mask-click="false">
    <popup :key="Date.now()" :data="[]" title="退款原因" default-value="2" @on-close="popupClose"
      @on-change="popupChange" />
  </uni-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AmountChange from '../../components/AmountChange.vue';
import popup from './components/popup.vue';
import AddressItem from '../address/components/AddressItem.vue';

const refundRef = ref<any>(null);
const product = ref({
  amount: 1,
  max: 10
});
const refundAmount = ref('10.58');

const showRefundPopup = () => {
  refundRef.value?.open('bottom');
}
const popupClose = () => {
  refundRef.value?.close();
}
const popupChange = (value: string) => {
  console.log(value);
  popupClose();
}
</script>

<style lang="scss" scoped>
.safe-area {
  padding-bottom: calc(env(safe-area-inset-bottom) + 40rpx);
}

.input-refund {
  :deep(.uni-easyinput__content) {
    border-radius: 12rpx;
    background-color: #f7f7f7 !important;

    textarea {
      padding-left: 20rpx;
    }
  }
}

.address-item {
  :deep(.wrapper) {
    padding: 0;
  }

  :deep(.right) {
    padding: 0;
  }
}
</style>