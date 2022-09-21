

export const idbAction  = import('./schemas/idb-action/idb-action.js')
export const idbMessage = import('./schemas/idb-message/idb-message.js')
export const aaAction = import ('./schemas/aa-action/aa-action.js') 

export default async (schemaName) => {
  // console.log("TESTING: In FORM_SCHEMAS currently") //testing..
  const schemaNames = ['idb-action', 'idb-message', 'aa-action']  //added aa-action

  if(!schemaNames.includes(schemaName)) return undefined

  if(schemaName === 'idb-action') return idbAction.then(returnDefaultModule)
  if(schemaName === 'idb-message') return idbMessage.then(returnDefaultModule)
  if(schemaName === 'aa-action') return aaAction.then(returnDefaultModule)  //added this
}


function returnDefaultModule({ default: d }){
  return d
}