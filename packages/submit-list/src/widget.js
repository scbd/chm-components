import WidgetBuilder from '@scbd/self-embedding-component'
import Package       from '../package.json'

// vite automagic global const replace TEST_WIDGET_BUILD TEST_WIDGET_MOUNT_BUILD

new WidgetBuilder({ Package }, { buildWidget: DB_WIDGET_BUILD, buildWidgetMount: DB_WIDGET_MOUNT_BUILD, buildWidgetTest: DB_WIDGET_TEST_BUILD })