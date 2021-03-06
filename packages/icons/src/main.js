import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from "vue-i18n";

  const i18n = createI18n({
    legacy: true,
    locale: 'en',
    messages: {
    }
  })

createApp(App).use(i18n).mount('#app')
