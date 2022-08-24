import { createApp   } from 'vue'
import { createI18n  } from 'vue-i18n'
import { createPinia } from 'pinia'
import   component, { i18n }   from '@scbd-chm/form'

const { rootProps } = window?.chm?.scbdChmForm || {}

createApp(component, rootProps)
.use(createI18n(i18n))
.use(createPinia())
.mount('#mount-scbd-chm-form')