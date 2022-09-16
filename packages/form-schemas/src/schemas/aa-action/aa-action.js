import { countrySanitizer } from '../../util/sanitizers'
import   getMessages                from './locales/index'

export default {
  id         : 'aa-action-form',
  apiUrl     : 'https://api.cbd.int/api/v2019/actions',
  accountsUrl: 'https://accounts.cbd.int',
  admins     : [ 'Administrator', 'aa-admin' ],
  sitekey    : '6LdG-SAUAAAAAEZVfb_sezzzPxMnctkpwha6t8fS',
  debug      : false,
  rows: [
    //Organization Info
    {  columns: [ 
      { name: 'actor.name',                 is: 'TextInput',   options: { rules: {required: true, max:200}} }]},
    {  columns: [ 
      { name: 'actor.website',              is: 'TextInput',   options: {rules: {required: true}}},
      { name: 'actor.logo',                 is: 'Attachments', options: { type: 'both', multiple: true} }]
    },
    {  columns: [ 
      { name: 'actor.location',             is: 'ChmSelect',   options: { type: 'countries',  rules: { required: true } }  },
      { name: 'actor.type',                 is: 'ChmSelect',   options: { type: 'orgTypes',  rules: { required: true } }  }  ] 
    },
    
    //Commitment Info (Name/Description)
    {  columns: [ { name: 'action.name',                is: 'LString',     options: { rules: { required: true, max: 300 } } } ] },
    {  columns: [ { name: 'action.description',         is: 'LStringArea', options: { rows: 3, rules: { required: true, max: 1000 } } } ] },
    {  columns: [ { name: 'action.attachment',          is: 'Attachments', options: { type: 'both', multiple: true} }]},

    //Commitment Details
    {  columns: [ 
      { name: 'actionDetails.actionCategories', is: 'ChmSelect',   options: { type: 'actionCategories', multiple: true,  rules: { required: true } } },//ARRAY?
      { name: 'actionDetails.operationalAreas', is: 'ChmSelect',   options: { type: 'geoLocations', multiple: true,  rules: { required: true } }  }  ] 
    },
    {  columns: [ 
      { name: 'actionDetails.sdgs',             is: 'ChmSelect',   options: { type: 'sdgs', multiple: true,  rules: { required: true } }  },
      { name: 'actionDetails.aichiTargets',     is: 'ChmSelect',   options: { type: 'aichis', multiple: true,  rules: { required: true } }  }  ] 
    },
  
    //Thematic Areas NOT SHOWING
    // {  columns: [ { name: 'actionDetails.thematicAreas',    is: 'ChmSelect',   options: { type: 'all',  rules: { required: true } }  }  ] },

    //Focal Point Contact
    {  columns: [ { name: 'creator.@type',                       is: 'TextInput',   options: { type: 'hidden',    rules: { required: true } },  value: 'Person'  }  ]},
    {  columns: [ 
      { name: 'creator.name',               is: 'LString',     options: { rules: { required: true, max: 100 } } },
      { name: 'creator.email',              is: 'TextInput',   options: { type: 'email', rules: { format: 'email', required: true } } } ] 
    },

    //Partners
    
    // {  columns: [ { name: 'creator.@type',                       is: 'TextInput',   options: { type: 'hidden',    rules: { required: true } },  value: 'Person'  }  ]},
    // {  columns: [ { name: 'creator.email',              is: 'TextInput',   options: { type: 'email', rules: { format: 'email', required: true } } }  ] },
    // {  columns: [ { name: 'creator.name',               is: 'LString',     options: { rules: { required: true, max: 100 } } } ] },
    // {  columns: [ { name: 'creator.worksFor.name',      is: 'LString',     options: { rules: { max: 100 } } } ] },
    // {  columns: [ { name: 'creator.jobTitle',           is: 'LString',     options: { rules: { max: 100 } } } ] },
    // {  columns: [ { name: 'creator.worksFor.location',  is: 'ChmSelect',   options: { type: 'countries',  rules: { required: true } }  }  ] },
    // {  columns: [ { name: 'creator.worksFor.@type',     is: 'TextInput',   options: { type: 'hidden',    rules: { required: true } },  value: 'Organization'  }  ]},
    // {  columns: [ { name: 'commentText',                is: 'LStringArea', options: { rows: 3, rules: { required: true, max: 300 } } } ] },
    // {  columns: [ { name: 'image',                      is: 'Attachments', options: { type: 'both', multiple: false, imageOnly: true  } } ] },
    // {  columns: [ { name: 'subjectOf',                  is: 'Attachments', options: { type: 'both', multiple: true } } ] }
  ],
  getMessages, sanitizers: { 'creator.worksFor.location': countrySanitizer }
}
