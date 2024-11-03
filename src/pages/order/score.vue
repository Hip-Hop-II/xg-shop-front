<template>
  <section class="bg-F7F7F7 h-screen pb-8">
    <div class="pt-8 px-7 pb-4 bg-white">
      <p class="text-sm mb-4">使用积分</p>
      <div class="flex items-baseline border-E6E6E6 border-b">
        <span class="text-sm mr-4">¥</span>
        <uni-easyinput type="number" v-model="scores" class="score-amount" focus :input-border="false"
          :clearSize="20" />
      </div>
      <p class="text-sm mt-2 text-999999">可使用积分200</p>
    </div>
    <div class="mt-6 px-7">
      <h1 class="text-xl font-medium text-1A1A1A">积分规则</h1>
      <p class="text-xs text-666666 mt-3">1、购物积分有效期至少为1年，即从获得开始至次年年底，逾期自动作废（如若交易在使用的积分有效期之外发生退款，该部分积分不予退还）。</p>
      <p class="text-xs text-666666 mt-3">2、活动积分以天猫官方活动的具体发放时间及发放方法为准。</p>
      <p class="text-xs text-666666 mt-3">3、购物积分、活动积分等均可累积合并使用。用户在使用积分时，优先消耗临近到期积分。</p>
      <p class="text-xs text-666666 mt-3">4、如用户获得购物积分的交易订单在确认收货后发生全部退款的，系统将直接扣除通过该笔订单所获取的全部购物积分。</p>
      <p class="text-xs text-666666 mt-3">5、如用户获得购物积分的交易订单在确认收货后发生部分退款的，系统按照会员申请的退款金额占订单总金额的比例扣除相应的购物积分。</p>
      <p class="text-xs text-666666 mt-3">6、用户通过积分抵扣功能实现其积分权益的，当超过积分有效期后会员消耗积分的相关交易订单发生退款的，会员所消耗的积分将无法予以退还。</p>
    </div>
    <button class="bg-1764FF text-white text-xl leading-12.5 rounded-md mx-7 mt-9" hover-class="none">确定</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const scores = ref('');
</script>

<style lang="scss" scoped>
.score-amount {
  :deep(input) {
    font-size: 68rpx;
  }
}
</style>