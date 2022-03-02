import { createApp  } from 'vue';
import { createI18n } from 'vue-i18n';
import   component    from '@scbd-chm/submit-list';

const i18n = createI18n ( false, { legacy: false, locale: 'en', messages: {} });

const { rootProps } = window?.chm?.ChmSubmitList || {}

createApp(component, rootProps).use(i18n).mount('#mount-scbd-chm-submit-list');