import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n';
import messages from './locales/index'
const i18n = createI18n(false, { legacy: false, locale: 'en', messages, global: true });

createApp(App).use(i18n).mount('#app')
