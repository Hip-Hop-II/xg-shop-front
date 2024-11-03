<template>
  <div class="flex flex-col max-h-60vh pt-5">
    <div class="text-xl font-medium relative mx-5">{{ props.title }}<img src="../../../static/imgs/close.png"
        class="w-6 h-6 absolute -top-2 -right-2" @click="onClose" />
    </div>
    <div class="flex-1 overflow-y-auto p-5">
      <radio-group @change="onChange">
        <div class="flex items-center mb-6">
          <label for="a" class="flex-1 text-sm text-333333">与客服沟通一致</label>
          <radio value="1" id="a" class="popup-radio" :checked="selected === '1'" />
        </div>
        <div class="flex items-center mb-6">
          <label for="b" class="flex-1 text-sm text-333333">商品质量问题</label>
          <radio value="2" id="b" class="popup-radio" :checked="selected === '2'" />
        </div>
        <div class="flex items-center mb-6">
          <label for="c" class="flex-1 text-sm text-333333">其他</label>
          <radio value="3" id="c" class="popup-radio" :checked="selected === '3'" />
        </div>
      </radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  title: string;
  data: any[];
  defaultValue: string;
}>();
const selected = ref(props.defaultValue);
const emit = defineEmits<{
  onClose: [];
  onChange: [value: string];
}>();

const onClose = () => {
  emit('onClose');
}
const onChange = (e: any) => {
  selected.value = e.detail.value;
  emit('onChange', e.detail.value);
}
</script>

<style lang="scss" scoped>
.popup-radio {
  :deep(.uni-radio-input) {
    width: 32rpx;
    height: 32rpx;
    margin: 0;
  }
}
</style>