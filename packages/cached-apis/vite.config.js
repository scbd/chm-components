import  DistBuilder from '@scbd/dist-builder'

const { viteConfig, getPackageVersion, external } = DistBuilder
const debug   =  true
const minify  =  true
const globals = { vue: 'Vue', 'vue-i18n': 'VueI18n ', '@houlagins/locale':'@houlagins/locale', 'localforage':'localforage','lodash.isnil':'lodash.isnil', 'lodash.omitby':'lodash.omitby', 'axios':'axios'}

const umd     = true
const cjs     = true
const legacy  = { umd, cjs }

const browser = true
const ssr     = true
const modern  = { browser, ssr }

const cdnUrl  = 'https://cdn.cbd.int'

const  imports = {
  'vue'               : `${cdnUrl}/vue@${getPackageVersion('vue')}/dist/vue.esm-browser.prod.js`,
  'vue-i18n'          : `${cdnUrl}/vue-i18n@${getPackageVersion('vue-i18n')}/dist/vue-i18n.esm-browser.prod.js`,
  '@houlagins/locale' : `${cdnUrl}/@houlagins/locale@1.0.0/dist/browser/index.min.js`,
  'localforage'       : `${cdnUrl}/localforage@1.9.0/dist/localforage.min.js`,
  'lodash.isnil'      : `${cdnUrl}/lodash.isnil@4.0.0/index.js`,
  'lodash.omitby'     : `${cdnUrl}/lodash.omitby@4.6.0/index.js`,
  'axios'             : `${cdnUrl}/axios@0.26.0/dist/axios.min.js`,
}

const widget     = false
const testWidget = false

export const distBuilderConfig = {
  legacy, modern, widget, testWidget, cdnUrl, external, debug, minify, globals, imports
}

export default viteConfig(distBuilderConfig)

