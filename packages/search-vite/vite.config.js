// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [ vue() ]
// })

import  DistBuilder from '@scbd/dist-builder'

const { viteConfig, getPackageVersion, external } = DistBuilder
const debug   =  true
const minify  =  true
const globals = { vue: 'Vue', 'vue-i18n': 'VueI18n ' }

const umd     = true
const cjs     = true
const legacy  = { umd, cjs }

const browser = true
const ssr     = true
const modern  = { browser, ssr }

const cdnUrl  = 'https://cdn.cbd.int'

const css = [ 'https://cdn.cbd.int/@action-agenda/icons/dist/esm/index.min.css' ]

const  imports = {
  vue                             : `${cdnUrl}/vue@${getPackageVersion('vue')}/dist/vue.esm-browser.prod.js`,
  'vue-i18n'                      : `${cdnUrl}/vue-i18n@${getPackageVersion('vue-i18n')}/dist/vue-i18n.esm-browser.prod.js`,
  '@scbd/self-embedding-component': `${cdnUrl}/@scbd/self-embedding-component@${getPackageVersion('@scbd/self-embedding-component')}`
}

const widget     = true
const testWidget = false

export const distBuilderConfig = {
  legacy, modern, widget, testWidget, cdnUrl, external, debug, minify, globals, imports, css
}

export default viteConfig(distBuilderConfig)


