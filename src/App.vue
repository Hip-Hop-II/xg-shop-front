<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>

<style lang="scss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

#app {
  max-width: 960rpx;
  margin: 0 auto;
}

uni-page-head {
  display: none;
}

uni-button,
button {
  font-size: 32rpx;

  &::after {
    display: none;
  }
}
</style>
