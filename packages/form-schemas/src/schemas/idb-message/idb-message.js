import { countrySanitizer } from '../../util/sanitizers'
import   getMessages                from './locales/index'

export default {
  id         : 'idb-message-form',
  apiUrl     : 'https://api.cbd.int/api/v2022/user-comments',
  accountsUrl: 'https://accounts.cbd.int',
  admins     : [ 'Administrator', 'idb-admin' ],
  sitekey    : '6LdG-SAUAAAAAEZVfb_sezzzPxMnctkpwha6t8fS',
  debug      : false,
  rows: [
    {  columns: [ { name: 'creator.@type',                       is: 'TextInput',   options: { type: 'hidden',    rules: { required: true } },  value: 'Person'  }  ]},
    {  columns: [ { name: 'creator.email',              is: 'TextInput',   options: { type: 'email', rules: { format: 'email', required: true } } }  ] },
    {  columns: [ { name: 'creator.name',               is: 'LString',     options: { rules: { required: true, max: 100 } } } ] },
    {  columns: [ { name: 'creator.worksFor.name',      is: 'LString',     options: { rules: { max: 100 } } } ] },
    {  columns: [ { name: 'creator.jobTitle',           is: 'LString',     options: { rules: { max: 100 } } } ] },
    {  columns: [ { name: 'creator.worksFor.location',  is: 'ChmSelect',   options: { type: 'countries',  rules: { required: true } }  }  ] },
    {  columns: [ { name: 'creator.worksFor.@type',     is: 'TextInput',   options: { type: 'hidden',    rules: { required: true } },  value: 'Organization'  }  ]},
    {  columns: [ { name: 'commentText',                is: 'LStringArea', options: { rows: 3, rules: { required: true, max: 300 } } } ] },
    {  columns: [ { name: 'image',                      is: 'Attachments', options: { type: 'both', multiple: false, imageOnly: true  } } ] },
    {  columns: [ { name: 'subjectOf',                  is: 'Attachments', options: { type: 'both', multiple: true } } ] }
  ],
  getMessages, sanitizers: { 'creator.worksFor.location': countrySanitizer }
}

