import  DistBuilder from '@scbd/dist-builder'

const { viteConfig, getPackageVersion, external } = DistBuilder
const debug   =  true
const minify  =  true
const globals = { }

const umd     = false
const cjs     = true
const legacy  = { umd, cjs }

const browser = true
const ssr     = true
const modern  = { browser, ssr }

const cdnUrl  = 'https://cdn.cbd.int'

const  imports = { 'yup' : `https://esm.sh/yup@${getPackageVersion('yup')}` }

const widget     = false
const testWidget = false

export const distBuilderConfig = {
  legacy, modern, widget, testWidget, cdnUrl, external, debug, minify, globals, imports
}

export default viteConfig(distBuilderConfig)

