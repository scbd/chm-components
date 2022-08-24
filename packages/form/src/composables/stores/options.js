import { defineStore } from 'pinia'
import   useSchema     from '@scbd-chm/form-schemas'

const actions = { loadSchema }


export const useOptionsStore = defineStore('options', { state, actions })

const initState = { 
  mode        : 'production',
  id          : '',
  apiUrl      : '',
  accountsUrl : '',
  admins      : undefined,
  rows        : undefined,
  sanitizers  : undefined,
  getMessages : undefined,
  sitekey     : '',
  debug       : false
}

function state(){ return initState }

async function loadSchema(identifier, options = {}){
  if(!identifier) throw new Error('No schema identifier passed to load form from')
  
  console.log('schema identifier', identifier)
  const remoteSchema = (await useSchema( identifier ))
  const schema       = { ...(await useSchema( identifier )), ...options.value }

  this.$patch({ ...schema })

  return this
}

function reactiveState(){
  const { mode, id, apiUrl, accountsUrl, admins, rows, debug, sitekey } = storeToRefs(this)

  return { mode, id, apiUrl, accountsUrl, admins, rows, debug, sitekey }
}
