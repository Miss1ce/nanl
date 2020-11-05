import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 下注释解除eslint的警告
// eslint-disable-next-line 
import  'amfe-flexible';

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
