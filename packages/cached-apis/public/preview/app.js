

const template = `<div>{{all.length}}</div>`

import   component, { getData }    from '@chm/cached-apis';
export default {
  name      : 'App',
  components: { component },
  template,
  mounted,
  data
}

async function mounted(){
  this.all = await getData('all');
}

function data(){
  return { all: [] }
}
