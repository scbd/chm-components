import  DistBuilder from '@scbd/dist-builder'

const { viteConfig, getPackageVersion, external } = DistBuilder
const debug   =  true
const minify  =  true
const globals = { vue: 'Vue', 'vue-i18n': 'VueI18n'}

const umd     = false
const cjs     = false
const legacy  = { umd, cjs }

const browser = true
const ssr     = true
const modern  = { browser, ssr }

const cdnUrl  = 'https://cdn.cbd.int'

const  imports = {
  'vue'                            : `${cdnUrl}/vue@${                                getPackageVersion('vue'                           )}/dist/vue.esm-browser.prod.js`,
  'vue-i18n'                       : `${cdnUrl}/vue-i18n@${                           getPackageVersion('vue-i18n'                      )}/dist/vue-i18n.esm-browser.prod.js`,
  'vue-multiselect'                : `https://esm.sh/vue-multiselect@${               getPackageVersion('vue-multiselect'               )}`,
  'yup'                            : `https://esm.sh/yup@${                           getPackageVersion('yup'                           )}`,
  'vue-upload-component'           : `https://esm.sh/vue-upload-component@${          getPackageVersion('vue-upload-component'          )}`,
  'vue-recaptcha'                  : `https://esm.sh/vue-recaptcha@${                 getPackageVersion('vue-recaptcha'                 )}`,
  'vue-advanced-cropper'           : `https://esm.sh/vue-advanced-cropper@${          getPackageVersion('vue-advanced-cropper'          )}`,
  'vee-validate'                   : `https://esm.sh/vee-validate@${                  getPackageVersion('vee-validate'                  )}`,
  'pinia'                          : `https://esm.sh/pinia@${                         getPackageVersion('pinia'                         )}`,
  'luxon'                          : `https://esm.sh/luxon@${                         getPackageVersion('luxon'                         )}`,
  'lodash.set'                     : `https://esm.sh/lodash.set@${                    getPackageVersion('lodash.set'                    )}`,
  'lodash.isplainobject'           : `https://esm.sh/lodash.isplainobject@${          getPackageVersion('lodash.isplainobject'          )}`,
  'lodash.isnil'                   : `https://esm.sh/lodash.isnil@${                  getPackageVersion('lodash.isnil'                  )}`,
  'lodash.isfunction'              : `https://esm.sh/lodash.isfunction@${             getPackageVersion('lodash.isfunction'             )}`,
  'lodash.isempty'                 : `https://esm.sh/lodash.isempty@${                getPackageVersion('lodash.isempty'                )}`,
  'lodash.intersection'            : `https://esm.sh/lodash.intersection@${           getPackageVersion('lodash.intersection'           )}`,
  'lodash.get'                     : `https://esm.sh/lodash.get@${                    getPackageVersion('lodash.get'                    )}`,
  'lodash.clonedeep'               : `https://esm.sh/lodash.clonedeep@${              getPackageVersion('lodash.clonedeep'              )}`,
  'change-case'                    : `https://esm.sh/change-case@${                   getPackageVersion('change-case'                   )}`,
  'axios'                          : `https://esm.sh/axios@${                         getPackageVersion('axios'                         )}`,
  '@scbd/self-embedding-component' : `https://esm.sh/@scbd/self-embedding-component@${getPackageVersion('@scbd/self-embedding-component')}`,
  '@scbd-chm/icons'                : `https://esm.sh/@scbd-chm/icons@${               getPackageVersion('@scbd-chm/icons'               )}`,
  '@scbd-chm/form-schemas'         : `https://esm.sh/@scbd-chm/form-schemas@${        getPackageVersion('@scbd-chm/form-schemas'        )}`,
  '@scbd-chm/cached-apis'          : `https://esm.sh/@scbd-chm/cached-apis@${         getPackageVersion('@scbd-chm/cached-apis'         )}`
}

const widget         = true
const testWidget     = true
const includeInBuild = ['vee-validate']//, 'vue-upload-component'

const externalFiltered = external.filter((item)=>!includeInBuild.includes(item))
export const distBuilderConfig = {
  legacy, modern, widget, testWidget, cdnUrl, external:externalFiltered, debug, minify, globals, imports
}

export default viteConfig(distBuilderConfig)

