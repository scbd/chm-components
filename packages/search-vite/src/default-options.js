import { getUnLocale } from '@houlagins/locale';

const opts = { 
  basePath: '/', hostname: 'cbd.int', 
  api: 'https://api.cbd.int/api/v2013/index/select', 
  locale: '', 
  smTop: '0',
  lgTop: "0",
  locale: getUnLocale().startsWith('en')? 'en' : getUnLocale(),
  mdTop: "0",
  show: true,
  smTop: "0",
}

export  default () =>opts
