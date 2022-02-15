

const template = '<div>{{all}}</div>'

import * as CachedApis from '../../dist/browser/index.min.js'
import   component    from '@chm/cached-apis';
export default {
  name      : 'App',
  data,
  components: { component },
  template,
  mounted
}

async function mounted(){
  this.all = await CachedApis.getAll()
}

function data(){
  return { all: [] }
}
