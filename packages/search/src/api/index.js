import { initializeApiStore } from '@action-agenda/cached-apis/dist/legacy/cjs/index.common';
import { initializeOptions  } from './query/options';
import { clearCache         } from './query/cache';

import { list, countryList, feed } from './query/list';

export const getCapacityBuildingFeed = feed;
export const getList = list;
export const getCountryStats = countryList;
export const resetCache = clearCache;

export const initializeApi = (opts) => {
  initializeApiStore(opts);
  initializeOptions(opts);
};

export { updateOptions } from  './query/options' // eslint-disable-line