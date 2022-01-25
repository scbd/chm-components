import { createApp  } from 'vue'        ;
import { createI18n } from 'vue-i18n'   ;
import   App          from './index.vue';


const i18n = createI18n ( false, { legacy: false, locale: 'en', messages: {} });

createApp(App).use(i18n).mount('#app');
