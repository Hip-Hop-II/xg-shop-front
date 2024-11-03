import { createSSRApp } from "vue";
import App from "./App.vue";
import { authInterceptor } from "./static/js/interceptors";

export function createApp() {
  // authInterceptor();
  const app = createSSRApp(App);
  return {
    app,
  };
}
