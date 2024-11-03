import { hasPermission } from "./utils";

export const authInterceptor = () => {
  ["navigateTo", "redirectTo", "reLaunch", "switchTab"].forEach((item) => {
    uni.addInterceptor(item, {
      invoke(args) {
        if (!hasPermission(args.url)) {
          uni.redirectTo({
            url: `/pages/login/index?redirect=${encodeURIComponent(args.url)}`,
          });
        }
      },
    });
  });
};
