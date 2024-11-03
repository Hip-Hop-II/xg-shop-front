<template>
  <div>
    <div class="bg-white rounded-md py-2.5 pl-5 flex items-center wrapper">
      <div class="flex-1">
        <p class="text-sm text-666666">朝阳区街道</p>
        <h1 class="text-sm my-2.5 address">成都平原东北部云顶中心A座2层7楼201</h1>
        <p class="text-sm text-666666">沐沐 139****5641</p>
      </div>
      <div class="px-5 right">
        <slot name="right">
        </slot>
      </div>
    </div>
  </div>
</template>