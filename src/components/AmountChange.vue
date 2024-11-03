<template>
  <div class="flex items-center">
    <button class="ac-btn border-none p-0 m-0 w-8 leading-8 bg-transparent" @click="decrease" :disabled="amount < 2"
      hover-class="none">-</button>
    <input type="number" v-model="amount" class="flex-1 text-sm bg-F5F5F5 w-15 h-7 text-center rounded-md" />
    <button class="ac-btn border-none p-0 m-0 w-8 leading-8 bg-transparent" @click="increase"
      :disabled="amount >= props.max" hover-class="none">+</button>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  max: number
}>(), {
  max: 999999
});
const amount = defineModel({ default: 1, type: Number });
const decrease = () => {
  amount.value = Math.max(1, amount.value - 1);
}
const increase = () => {
  amount.value = Math.min(props.max, amount.value + 1);
}
</script>

<style scoped lang="scss">
.ac-btn[disabled] {
  background-color: transparent;
}
</style>