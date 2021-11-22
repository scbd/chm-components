import { getOptions                           } from './options';
import { getPage, getNextPage } from './paging';

export const getSearchParams = async (next) => {
  const filters = await readSearchParams();
  const   page  = next ? getNextPage() : getPage();

  return defaultQuery({ filters, page });
};

export default (next) => Promise.all([ getApi(),  getSearchParams(next) ]);

export const countryQuery = countryQueryFunc;
export const feedQuery = feedQueryFunc;

export const getApi = async () => {
  const { api } = await getOptions();

  return `${api}`;
};

async function readSearchParams() {
  const params = (new URL(document.location)).searchParams;
  return params.getAll('filter');
}

function feedQueryFunc(filters) {
  const hasFilters  = filters && Array.isArray(filters) && filters.length;
  const scbdSchemas = [ 'sideEvent', 'meetings', 'event', 'announcement', 'meetingDocument', 'pressRelease', 'news', 'new ', 'statement',  'meeting', 'notification', 'decision ', 'recommendation' ]; // eslint-disable-line max-len
  const schemasQ    = hasFilters ?  filters : scbdSchemas;

  const start = 0;
  const rows  = 8;

  const urlSearchParams =  getBaseUrlSearchParams();

  const defaultQ = 'NOT version_s:* AND ( realm_ss:chm ) AND ';

  const scbd = `(schema_s:(${schemasQ.join(' ')}) AND (${baseTextQueries()}))`;

  const sort = 'updatedDate_dt desc, startDate_dt desc, endDate_dt desc, endDate_dt desc, createdDate_dt desc';

  urlSearchParams.set('q', `(${defaultQ}(${scbd}))`);

  urlSearchParams.set('rows', rows);
  urlSearchParams.set('start', start);
  urlSearchParams.set('sort', sort);
  return urlSearchParams;
}

function defaultQuery ({ filters, page }){ // eslint-disable-line
  const { start, rows } = page || { start: 0, rows: 10 };

  const urlSearchParams =  getBaseUrlSearchParams();

  const defaultQ = 'NOT version_s:* AND ( realm_ss:chm ) ';

  const textQueries = getTextQueries(filters) ? ` AND (${getTextQueries(filters)})` : '';
  const termFilters = filters ? filters.filter((identifier) => !identifier.startsWith('FREETEXT-')) : '';

  const filterQ =   termFilters && termFilters.length
    ? Array.isArray(termFilters) ? ` AND (all_terms_ss:(${termFilters.join(' AND ')}))`
      : ` AND (all_terms_ss:${termFilters})` : '';

  const schemaQ = `${filterQ}${textQueries}`;

  const params     = (new URL(document.location)).searchParams;
  const sortFilter = params.get('sort') ? params.get('sort') : 'updatedDate_dt desc';

  const sort = sortFilter;
  urlSearchParams.set('q', `(${defaultQ}${schemaQ})`);

  urlSearchParams.set('rows', rows);
  urlSearchParams.set('start', start);
  urlSearchParams.set('sort', sort);

  return urlSearchParams;
}

function getBaseUrlSearchParams() {
  const facetFieldsQS   = 'facet.field=schema_s&facet.field=all_terms_ss';
  const urlSearchParams = new URLSearchParams(facetFieldsQS);

  urlSearchParams.set('facet', 'true');
  urlSearchParams.set('facet.limit', 999999);
  urlSearchParams.set('facet.mincount', 1);

  urlSearchParams.set('sort', 'createdDate_dt desc');
  urlSearchParams.set('t', 'json');

  return urlSearchParams;
}

function baseTextQueries() {
  let textQuery = '';

  const texts = [ 'learning*', 'biocap*', 'capacity development*',
    'capacity*', 'bio-bridge*', 'bio bridge*', 'bbi*', 'TSC*',
    'technical and scientific cooperation*', 'capacity building*',
    'capacity-building*', 'building capacity*' ];
  // eslint-disable-next-line no-restricted-syntax
  for (const aText of texts) { textQuery += `title_t:"${aText}" OR summary_t:"${aText}" OR description_t:"${aText}" OR text_EN_txt:"${aText}" OR`; }

  const { length } = textQuery;

  return textQuery.slice(0, length - 3);
}

function getTextFilters(filters) {
  if (!filters || !filters?.length) return undefined;

  return filters.filter((identifier) => identifier.startsWith('FREETEXT-')).map((identifier) => identifier.replace('FREETEXT-', ''));
}

function getTextQueries(filters) {
  const textFilters = getTextFilters(filters);

  if (!textFilters) return '';

  let textQuery = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const aText of textFilters) { textQuery += `title_t:"${aText}*" OR summary_t:"${aText}*" OR description_t:"${aText}*" OR text_EN_txt:"${aText}*" OR`; }

  const { length } = textQuery;

  return textQuery.slice(0, length - 3);
}

function countryQueryFunc(filter) {
  const page = { start: 0, rows: 0 };

  return defaultQuery({ filters: [ filter ], page });
}
