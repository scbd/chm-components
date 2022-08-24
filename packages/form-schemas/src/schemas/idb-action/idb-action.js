import { countrySanitizer } from '../../util/sanitizers'
import   getMessages                from './locales/index'

const world =    { "@context": "https://schema.org", "@type": "Place", identifier: [{ propertyID:'scbd', value:'5D13EC43-F3E0-415E-AF67-62CCC85899AF'}], name: { "en": "Global", "es": "Mundo", "ar": "عالمي", "ru": "Глобальный уровень"} }

export default {
  id         : 'idb-action-form',
  apiUrl     : 'https://api.cbd.int/api/v2022/events',
  accountsUrl: 'https://accounts.cbd.int',
  admins     : [ 'Administrator', 'idb-admin' ],
  sitekey    : '6LdG-SAUAAAAAEZVfb_sezzzPxMnctkpwha6t8fS',
  debug      : false,
  rows: [
    {  columns: [ { name: 'startDate',                           is: 'TextInput',   options: { type: 'date',      rules: { type: 'date', required: true } }  }  ] },
    {  columns: [ { name: 'endDate',                             is: 'TextInput',   options: { type: 'date',      rules: { type: 'date', startLessThanEndByDay: 'startDate' } }  }  ] },
    {  columns: [ { name: 'location[0]',                         is: 'ChmSelect',   options: { type: 'countries', rules: { required: true } }  }  ] },
    {  columns: [ { name: 'location[2]',                         is: 'CheckBox',   options: { adminOnly: true, checkedValue: world , uncheckedValue: undefined  } }  ] },
    {  columns: [ { name: 'location[1].name',   is: 'LString',     options: { } } ] },
    {  columns: [ { name: 'location[1].@type',  is: 'TextInput',   options: { type: 'hidden',    rules: { required: true } },  value: 'City'  }  ]},
    {  columns: [ { name: 'creator.worksFor.name',               is: 'LString',     options: { rules: { max: 100 } } } ] },
    {  columns: [ { name: 'creator.worksFor.@type',              is: 'TextInput',   options: { type: 'hidden',    rules: { required: true } },  value: 'Organization'  }  ]},
    {  columns: [ { name: 'location[1].hasMap', is: 'Attachments', options: { type: 'url', multiple: false, nonImageOnly: true, forceAtType:'Map' } } ] },
    {  columns: [ { name: 'name',                                is: 'LString',     options: { rules: { required: true, max: 100 } } } ] },
    {  columns: [ { name: 'disambiguatingDescription',           is: 'LStringArea', options: { rows: 3, rules: { required: true, max: 500 } } } ] },
    // {  columns: [ { name: 'sameAs',                              is: 'Attachments', options: { type: 'both', multiple: true } }] },
    {  columns: [ { name: 'subjectOf',                           is: 'Attachments', options: { type: 'both', multiple: true } }] },
    {  columns: [ { name: 'creator.email',                       is: 'TextInput',   options: { type: 'email', rules: { format: 'email', required: true } } }  ] },
    {  columns: [ { name: 'creator.name',                        is: 'LString',     options: { rules: { required: true, max: 100 } } } ] },
    {  columns: [ { name: 'creator.@type',                       is: 'TextInput',   options: { type: 'hidden',    rules: { required: true } },  value: 'Person'  }  ]},
    {  columns: [ { name: 'image',                               is: 'Attachments', options: { type: 'both', multiple: false, imageOnly: true  } } ] },

  ],
  getMessages, sanitizers: { 'location': countrySanitizer }
}

