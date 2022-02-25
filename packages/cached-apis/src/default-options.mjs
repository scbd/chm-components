import { name, version                                } from '../package.json'

const libName     = name.replace('https://cdn.cbd.int/', '') // replace is a hack alack for browser build

const expiry      = 30

// #region apisUrls
const apisUrls = {
  regions      : 'https://api.cbd.int/api/v2013/thesaurus/domains/regions/terms',
  countries    : 'https://api.cbd.int/api/v2013/thesaurus/domains/countries/terms',
  orgTypes     : 'https://api.cbd.int/api/v2013/thesaurus/domains/Organization%20Types/terms',
  govTypes     : 'https://api.cbd.int/api/v2013/thesaurus/domains/Organization%20Types/terms',
  aichis       : 'https://api.cbd.int/api/v2013/thesaurus/domains/AICHI-TARGETS/terms',
  subjects     : 'https://api.cbd.int/api/v2013/thesaurus/domains/CBD-SUBJECTS/terms',
  jurisdictions: 'https://api.cbd.int/api/v2013/thesaurus/domains/50AC1489-92B8-4D99-965A-AAE97A80F38E/terms',
  sdgs         : 'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false'
}
// #endregion apisUrls

// #region dataSources
const dataSources = [ ...Object.keys(apisUrls), 'geoLocations', 'actionCategories', 'all', 'documentStates', 'schemas' ]
// #endregion dataSources

const dev           = { name: libName, expiry, apisUrls, dataSources, version   }
const stg           = { ...dev }
const prod          = { ...stg }

const environments  = { prod, stg, dev }

const globalDefaultOptions = {}

// #region options
const validationMap = { expiry: Number, name: String, apisUrls: Object, dataSources: Array, version: String }
// #endregion options

const setDefaultOptions = ({ environments, validationMap, forceEnv, name }, nameSpace = name) => {
  if(!nameSpace) throw new Error(' no name/nameSpace passed to setDefaultOptions')

  globalDefaultOptions[nameSpace] = new DefaultOptions({ environments, validationMap, forceEnv, name })
}

const getDefaultOptionsFunction = (nameSpace) => (userOpts={}, forceEnv) => globalDefaultOptions[nameSpace].get(userOpts, forceEnv)

setDefaultOptions({ environments, validationMap, name: libName }, libName)

export  default getDefaultOptionsFunction(libName)