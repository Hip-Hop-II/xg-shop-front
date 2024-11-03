export const whiteList = [
  "/pages/index/index",
  "/pages/detail/index",
  "/pages/login/index",
];

export const hasPermission = (path: string) => {
  if (whiteList.some((item) => path.startsWith(item))) {
    return true;
  }
  return !!uni.getStorageSync("token");
};

export const phoneNumReg = /^1[3-9]\d{9}$/;
