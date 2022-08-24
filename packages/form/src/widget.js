import WidgetBuilder from 'https://esm.sh/@scbd/self-embedding-component@3.0.8'
import Package       from '../package.json'

// load external css for dependant components
const css = [
  'https://cdn.cbd.int/@scbd-chm/icons@0.0.5/dist/style.css',
  'https://cdn.cbd.int/vue-advanced-cropper@2.8.1/dist/style.css',
  'https://cdn.cbd.int/vue-multiselect@3.0.0-alpha.2/dist/vue-multiselect.css'
]

// vite automagic global const replace TEST_WIDGET_BUILD TEST_WIDGET_MOUNT_BUILD
new WidgetBuilder({ Package, css }, { buildWidget: DB_WIDGET_BUILD, buildWidgetMount: DB_WIDGET_MOUNT_BUILD, buildWidgetTest: DB_WIDGET_TEST_BUILD })