import   Icons        from './components/index.vue'
import   IconComp     from './components/Icon.vue'

const NAME =  'CHM-Icons'

// #region snippet
export const iconNames = [ 'search', 'filter' ]
// #endregion snippet

export function install(Vue){
  if (install.installed) return
  
  install.installed = true
  
  Vue.component(NAME, Icons)
  Vue.component('CHM-Icon', IconComp)
}

export const plugin = { install, NAME }
export const Icon   = IconComp

export default Icons
