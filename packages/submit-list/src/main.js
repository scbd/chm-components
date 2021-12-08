import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./index.vue";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import './assets/css/styles.css';

const i18n =
  createI18n <
  false >
  {
    legacy: false,
    locale: "en",
    messages: {},
  };

createApp(App).use(i18n).mount("#app");
