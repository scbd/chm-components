const __defProp = Object.defineProperty;
const __defProps = Object.defineProperties;
const __getOwnPropDescs = Object.getOwnPropertyDescriptors;
const __getOwnPropSymbols = Object.getOwnPropertySymbols;
const __hasOwnProp = Object.prototype.hasOwnProperty;
const __propIsEnum = Object.prototype.propertyIsEnumerable;
const __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
const __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    
  return a;
};
const __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

/*!
* @chm/search 0.0.0
*
* @copyright (c) 2022
* @license undefined
*
* published: Fri Feb 18 2022 22:16:30 GMT+0530 (India Standard Time)
*/
import Icons, { Icon } from '@scbd-chm/icons';
import { initializeApiStore, lookUp, getData } from '@scbd-chm/cached-apis';
import axios from 'axios';
import { openBlock, createElementBlock, createElementVNode, toDisplayString, resolveComponent, createVNode, normalizeProps, guardReactiveProps, Fragment, renderList, createBlock, mergeProps, normalizeClass, withKeys, withModifiers, renderSlot, withDirectives, vShow, createCommentVNode, Transition, withCtx, normalizeStyle, createTextVNode, pushScopeId, popScopeId, vModelSelect, setBlockTracking } from 'vue';
const i18n = {
  messages: {
    en: {
      showing                   : 'showing',
      to                        : 'to',
      of                        : 'of',
      filters                   : 'Filters',
      View                      : 'View',
      'Text Search'             : 'Text Search',
      Search                    : 'Search',
      'Free Text Searches'      : 'Free Text Searches',
      close                     : 'close',
      help                      : 'help',
      earth                     : 'earth',
      delete                    : 'delete',
      file                      : 'file',
      down                      : 'down',
      search                    : 'search',
      filter                    : 'filter',
      page                      : 'page',
      decision                  : 'Decision | SCBD',
      notification              : 'Notification | SCBD',
      Recommendation            : 'Recommendation | SCBD',
      statement                 : 'Statement | SCBD',
      meetingDocument           : 'Meeting Document | SCBD',
      meeting                   : 'Meeting | SCBD',
      sideEvent                 : 'Side Event | SCBD',
      event                     : 'Event | SCBD',
      new                       : 'New | SCBD',
      announcement              : 'Announcement | SCBD',
      pressRelease              : 'Press Release | SCBD',
      news                      : 'News | SCBD',
      bbiProfile                : 'Provider of Assistance',
      bbiOpportunity            : 'Opportunity',
      capacityBuildingInitiative: 'Initiative',
      bbiRequest                : 'Request for Assistance',
      resource                  : 'Resource'
    }
  }
};
const globalProps$1 = { options: { api: 'https://api.cbd.int/api/v2013/index/select' } };
const getOptions = () => new Promise(loadingIntervalOptions);
const updateOptions = (options) => {
  globalProps$1.options = __spreadValues(__spreadValues({}, globalProps$1.options), options);
};
const initializeOptions = (options = globalProps$1.options) => {
  globalProps$1.options = options;
};

function loadingIntervalOptions(resolve, reject){
  const timeOut = setTimeout(() => {
    clearInterval(getTimer());
    reject('Error loading api- globalProps.options not set via initializeApi');
  }, 5e3);
  const timer = setInterval(() => {
    const { options } = globalProps$1;

    if (!options)
      return;
    const { api } = options;

    clearInterval(getTimer());
    clearTimeout(getTimeOut());
    if (!api)
      throw new Error('api: you must pass an \'api\' param too initializeApi');
    return resolve(Object.freeze(options));
  }, 100);

  function getTimer(){
    return timer;
  }
  function getTimeOut(){
    return timeOut;
  }
}
const cache = /* @__PURE__ */ new Map();

init();
const hasCache = (urlSearchParams) => {
  cache.has(urlSearchParams.toString());
};
const setCache = (urlSearchParams, value) => cache.set(urlSearchParams.toString(), value);
const getCache = (urlSearchParams) => cache.get(urlSearchParams.toString());
const clearCache = () => cache.clear();

function init(){
  setInterval(() => {
    clearCache();
  }, 1e3 * 60 * 5);
}
const globalProps = { page: { start: 0, rows: 10 } };
const clone = (obj) => JSON.parse(JSON.stringify(obj));
const getIsPageZero = () => globalProps.page.start < globalProps.page.rows;
const resetPaging = () => {
  globalProps.page = { start: 0, rows: 10 };
};
const getPage = () => Object.freeze(clone(globalProps.page));
const getNextPage = () => {
  globalProps.page.start = globalProps.page.rows + globalProps.page.start;
  return getPage();
};
const getSearchParams = async (next) => {
  const filters = await readSearchParams$1();
  const page = next ? getNextPage() : getPage();

  return defaultQuery({ filters, page });
};
const getQuery = (next) => Promise.all([ getApi(), getSearchParams(next) ]);
const getApi = async () => {
  const { api } = await getOptions();

  return `${api}`;
};

async function readSearchParams$1(){
  const params = new URL(document.location).searchParams;

  return params.getAll('filter');
}
function defaultQuery({ filters, page }){
  const { start, rows } = page || { start: 0, rows: 10 };
  const urlSearchParams = getBaseUrlSearchParams();
  const defaultQ = 'NOT version_s:* AND ( realm_ss:chm ) ';
  const textQueries = getTextQueries(filters) ? ` AND (${getTextQueries(filters)})` : '';
  const termFilters = filters ? filters.filter((identifier) => !identifier.startsWith('FREETEXT-')) : '';
  const filterQ = termFilters && termFilters.length ? Array.isArray(termFilters) ? ` AND (all_terms_ss:(${termFilters.join(' AND ')}))` : ` AND (all_terms_ss:${termFilters})` : '';
  const schemaQ = `${filterQ}${textQueries}`;
  const params = new URL(document.location).searchParams;
  const sortFilter = params.get('sort') ? params.get('sort') : 'updatedDate_dt desc';
  const sort2 = sortFilter;

  urlSearchParams.set('q', `(${defaultQ}${schemaQ})`);
  urlSearchParams.set('rows', rows);
  urlSearchParams.set('start', start);
  urlSearchParams.set('sort', sort2);
  return urlSearchParams;
}
function getBaseUrlSearchParams(){
  const facetFieldsQS = 'facet.field=schema_s&facet.field=all_terms_ss';
  const urlSearchParams = new URLSearchParams(facetFieldsQS);

  urlSearchParams.set('facet', 'true');
  urlSearchParams.set('facet.limit', 999999);
  urlSearchParams.set('facet.mincount', 1);
  urlSearchParams.set('sort', 'createdDate_dt desc');
  urlSearchParams.set('t', 'json');
  return urlSearchParams;
}
function getTextFilters(filters){
  if (!filters || !(filters == null ? void 0 : filters.length))
    return void 0;
  return filters.filter((identifier) => identifier.startsWith('FREETEXT-')).map((identifier) => identifier.replace('FREETEXT-', ''));
}
function getTextQueries(filters){
  const textFilters = getTextFilters(filters);

  if (!textFilters)
    return '';
  let textQuery = '';

  for (const aText of textFilters)
    textQuery += `title_t:"${aText}*" OR summary_t:"${aText}*" OR description_t:"${aText}*" OR text_EN_txt:"${aText}*" OR`;
  
  const { length } = textQuery;

  return textQuery.slice(0, length - 3);
}
const list = async (next = false) => {
  try {
    const isNewQuery = !next && !getIsPageZero();

    if (isNewQuery)
      resetPaging();
    const [ api, params ] = await getQuery(next);
    const rows = hasCache(params) ? getCache(params) : await axios.get(api, { params }).then(calculateCounts);

    if (!hasCache(params))
      setCache(params, rows);
    if (next)
      setTimeout(() => emitNextPageLoaded(), 250);
    return rows;
  }
  catch (e){
    const msg = e.response ? e.response.status : '';

    if (msg)
      return console.error(msg, e);
    return console.error(e);
  }
};

async function emitNextPageLoaded(){
  const { $el } = await getOptions();

  if (!$el)
    throw new Error('api->list->emitNextPageLoaded: error $el not set vie actions-api->options->');
  const event = new Event('$nextPageLoaded', { bubbles: true });

  event.$page = getNextPage();
  $el.dispatchEvent(event);
}
function calculateCounts({ data: data2 }){
  const { response, facet_counts: facetCounts } = data2;
  const { numFound: total, docs: rows } = response;
  const filterCounts = getFilterCounts(facetCounts.facet_fields);

  return { total, filterCounts, rows: rows.map(normalizeData) };
}
function getFilterCounts(facets){
  const filterCounts = {};

  for (const solrField in facets)
    if ({}.hasOwnProperty.call(facets, solrField))
      for (let index = 0; index < facets[solrField].length; index += 2)
        filterCounts[facets[solrField][index]] = facets[solrField][index + 1];
    
  
  return filterCounts;
}
function normalizeData({ id, schema_s: schema, summary_EN_t, description_EN_t, title_EN_t, url_ss, updatedDate_dt: modifiedOn, startDate_dt: startDate }){
  const description = description_EN_t || summary_EN_t;
  const name2 = title_EN_t;
  const url = url_ss ? url_ss[0] : '';
  const dateTime = startDate || modifiedOn;

  return {
    id,
    name: name2,
    description,
    url,
    dateTime,
    schema
  };
}
const getList = list;
const initializeApi = (opts2) => {
  initializeApiStore(opts2);
  initializeOptions(opts2);
};
const CardBody_vue_vue_type_style_index_0_scoped_true_lang = '';
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;

  for (const [ key, val ] of props)
    target[key] = val;
  
  return target;
};
const _sfc_main$a = {
  name : 'CardBody',
  props: {
    name       : { type: String, required: true },
    description: { type: String }
  }
};
const _hoisted_1$9 = { class: 'container-fluid' };
const _hoisted_2$8 = { class: 'row no-gutters' };
const _hoisted_3$6 = { class: 'col-sm-12' };
const _hoisted_4$5 = { class: 'card-body' };
const _hoisted_5$5 = { class: 'card-title' };
const _hoisted_6$5 = { class: 'card-text desc description' };

function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options){
  return openBlock(), createElementBlock('div', _hoisted_1$9, [
    createElementVNode('div', _hoisted_2$8, [
      createElementVNode('div', _hoisted_3$6, [
        createElementVNode('div', _hoisted_4$5, [
          createElementVNode('h5', _hoisted_5$5, toDisplayString($props.name || ''), 1),
          createElementVNode('p', _hoisted_6$5, toDisplayString($props.description || ''), 1)
        ])
      ])
    ])
  ]);
}
const HorzCardAction = /* @__PURE__ */ _export_sfc(_sfc_main$a, [ [ 'render', _sfc_render$a ], [ '__scopeId', 'data-v-093999b6' ] ]);
const index_vue_vue_type_style_index_0_scoped_true_lang$1 = '';
const _sfc_main$9 = {
  name      : 'SearchListCard',
  components: { HorzCardAction },
  props     : {
    id         : { type: String, required: true },
    name       : { type: String, required: true },
    description: { type: String, required: false },
    dateTime   : { type: String, required: false },
    schema     : { type: String, required: false },
    url        : { type: String, required: true },
    options    : { type: Object, required: true }
  },
  computed: { status },
  methods : { loadIcons },
  filters : { dateFormat },
  data    : data$3,
  created : created$2,
  updated,
  i18n
};

function data$3(){
  return { icons: [] };
}
async function updated(){
  await this.loadIcons();
}
async function created$2(){
  await this.loadIcons();
}
function status(){
  return this.meta.status;
}
function dateFormat(date){
  const d = new Date(date);

  return `${d.getUTCFullYear()}-${monthFormat(d.getUTCMonth())}-${dayFormat(d.getUTCDate())}  `;
}
function monthFormat(month){
  if (month < 10)
    return `0${month + 1}`;
  return month + 1;
}
function dayFormat(day){
  if (day < 10)
    return `0${day}`;
  return day;
}
function loadIcons(){
  const iconData = [ ...(this.actionDetails || {}).actionCategories || [] ];

  if (!iconData.length)
    return;
  for (const [ index, { identifier } = {} ] of iconData.entries())
    if (identifier){
      iconData[index] = lookUp('all', identifier, true);
      if (!iconData[index]){
        console.error('id', this._id);
        console.error('iconData', iconData);
        throw new Error('identifier not found');
      }
    }
  this.icons = iconData;
}
const _hoisted_1$8 = { class: 'card card-row mb-5' };
const _hoisted_2$7 = { class: 'card-header' };
const _hoisted_3$5 = { class: 'row' };
const _hoisted_4$4 = { class: 'col-12 text-right' };
const _hoisted_5$4 = { class: 'text-muted' };
const _hoisted_6$4 = { class: 'card-footer' };
const _hoisted_7$4 = {
  class       : 'btn-group',
  role        : 'group',
  'aria-label': 'Card actions, view, edit publish, reject'
};
const _hoisted_8$3 = [ 'href' ];
const _hoisted_9$3 = { class: 'text-muted float-right' };

function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options){
  const _component_HorzCardAction = resolveComponent('HorzCardAction');

  return openBlock(), createElementBlock('div', _hoisted_1$8, [
    createElementVNode('div', _hoisted_2$7, [
      createElementVNode('div', _hoisted_3$5, [
        createElementVNode('div', _hoisted_4$4, [
          createElementVNode('span', _hoisted_5$4, toDisplayString(_ctx.$t($props.schema)), 1)
        ])
      ])
    ]),
    createVNode(_component_HorzCardAction, normalizeProps(guardReactiveProps(_ctx.$props)), null, 16),
    createElementVNode('div', _hoisted_6$4, [
      createElementVNode('div', _hoisted_7$4, [
        createElementVNode('a', {
          href  : $props.url,
          target: '_blank',
          rel   : 'nopener noreferrer',
          type  : 'button',
          class : 'btn btn-primary btn-sm'
        }, toDisplayString(_ctx.$t('View record')), 9, _hoisted_8$3)
      ]),
      createElementVNode('small', _hoisted_9$3, toDisplayString($props.dateTime || _ctx.dateFormat), 1)
    ])
  ]);
}
const Card = /* @__PURE__ */ _export_sfc(_sfc_main$9, [ [ 'render', _sfc_render$9 ], [ '__scopeId', 'data-v-17a9a23e' ] ]);
const index_vue_vue_type_style_index_0_scoped_true_lang = '';
const _sfc_main$8 = {
  name      : 'SearchList',
  components: { Card },
  props     : {
    rows    : { type: Array, required: true },
    options : { type: Object, required: true },
    onScroll: { type: Function, required: true }
  },
  methods: { cardProps },
  mounted: mounted$2,
  beforeDestroy
};

function mounted$2(){
  window.addEventListener('scroll', this.onScroll(this.$el));
}
function beforeDestroy(){
  window.removeEventListener('scroll', this.onScroll(this.$el));
}
function cardProps(action = {}){
  return __spreadProps(__spreadValues({}, action), { options: this.options });
}
const _hoisted_1$7 = {
  class: 'list',
  ref  : 'list'
};

function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options){
  const _component_card = resolveComponent('card');

  return openBlock(), createElementBlock('div', _hoisted_1$7, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.rows, (action, index) => (openBlock(), createBlock(_component_card, mergeProps({ key: index }, $options.cardProps(action)), null, 16))), 128))
  ], 512);
}
const List = /* @__PURE__ */ _export_sfc(_sfc_main$8, [ [ 'render', _sfc_render$8 ], [ '__scopeId', 'data-v-6f58f77a' ] ]);
const dev$1 = { basePath: '/' };
const stg$1 = __spreadValues({}, dev$1);
const prod$1 = __spreadValues({}, stg$1);
const ENVS = { dev: dev$1, stg: stg$1, prod: prod$1 };
const V_MAP = { basePath: String };
const globalDefaultOptions = {};

class DefaultOptions{
  constructor({ environments: environments2, validationMap: validationMap2, forceEnv, name: name2 }){
    environments2 = assignEnvironments(environments2);
    validationMap2 = Object.assign(V_MAP, validationMap2);
    this.props = { environments: environments2, validationMap: validationMap2, forceEnv, name: name2 };
  }
  get(userOpts = {}, env = this.env){
    const { environments: environments2 } = this.props;

    for (const propName in userOpts)
      environments2[env][propName] = userOpts[propName];
    this.validate(environments2[env]);
    return environments2[env];
  }
  get env(){
    if (this.props.forceEnv)
      return this.props.forceEnv;
    if (isServer() && (typeof process !== 'undefined' && process.env))
      return 'production';
    return getEnvClient();
  }
  validate(opts2){
    return validate(opts2, this.props.validationMap);
  }
}
const setDefaultOptions = ({ environments: environments2, validationMap: validationMap2, forceEnv, name: name2 }, nameSpace = name2) => {
  if (!nameSpace)
    throw new Error(' @houlagins/default-options.setDefaultOptions: no name/nameSpace passed to setDefaultOptions');
  globalDefaultOptions[nameSpace] = new DefaultOptions({ environments: environments2, validationMap: validationMap2, forceEnv, name: name2 });
};
const getDefaultOptionsFunction = (nameSpace) => (userOpts = {}, forceEnv) => globalDefaultOptions[nameSpace].get(userOpts, forceEnv);

function getEnvClient(){
  const thisHost = window.location.href;

  if (stg$1.hostname && thisHost.includes(stg$1.hostname))
    return 'stg';
  if (dev$1.hostname && thisHost.includes(dev$1.hostname))
    return 'dev';
  if (prod$1.hostname && thisHost.includes(prod$1.hostname))
    return 'prod';
  return 'prod';
}
function isServer(){
  return typeof window === 'undefined';
}
function validate(opts2, vMap){
  for (const key in opts2){
    const rType = opts2[key].constructor ? opts2[key].constructor : typeof opts2[key] === 'object' ? Object : void 0;
    const eType = vMap[key];

    if (!Object.keys(vMap).includes(key))
      unknownKeyError(opts2, key);
    if (rType !== eType)
      errorUnknownType(key, rType.name, eType.name);
  }
}
function unknownKeyError(options, key){
  throw new Error(`${key} not permitted in  component: options`);
}
function errorUnknownType(key, rType, eType){
  throw new Error(`${key} has incorrect type.  Received: ${rType} Expected: ${eType}`);
}
function assignEnvironments(environments2){
  const dev2 = Object.assign({}, ENVS.dev, environments2.dev || environments2.development || {});
  const stg2 = Object.assign({}, ENVS.stg, environments2.stg || environments2.staging || {});
  const prod2 = Object.assign({}, ENVS.prod, environments2.prod || environments2.production || {});
  const development = dev2;
  const staging = stg2;
  const production = prod2;

  return { development, dev: dev2, staging, stg: stg2, production, prod: prod2 };
}
const name$1 = '@action-agenda/search';
const basePath = '/';
const locale = '';
const smTop = '0';
const mdTop = '0';
const lgTop = '0';
const dev = {
  hostname: 'cbddev.xyz',
  api     : 'https://api.cbd.int/api/v2013/index/select',
  basePath,
  locale,
  smTop,
  mdTop,
  lgTop,
  show    : true
};
const stg = __spreadValues({ hostname: 'staging.cbd.int' }, dev);
const prod = __spreadProps(__spreadValues({ hostname: 'cbd.int' }, stg), { api: 'https://api.cbd.int/api/v2013/index/select' });
const environments = { prod, stg, dev };
const validationMap = {
  forceEnv        : String,
  basePath        : String,
  locale          : String,
  api             : String,
  hostname        : String,
  listenExternally: Boolean,
  preLoadFilter   : Object,
  smTop           : String,
  mdTop           : String,
  lgTop           : String,
  show            : Boolean
};

setDefaultOptions({ environments, validationMap, name: name$1 }, name$1);
const getDefaultOptions = getDefaultOptionsFunction(name$1);

function isEmpty(opt){
  if (opt === 0)
    return false;
  if (Array.isArray(opt) && opt.length === 0)
    return true;
  return !opt;
}
function not(fun){
  return (...params) => !fun(...params);
}
function includes(str, query){
  let stringTemp = str;

  if (str === void 0)
    stringTemp = 'undefined';
  if (str === null)
    stringTemp = 'null';
  if (str === false)
    stringTemp = 'false';
  const text = stringTemp.toString().toLowerCase();

  return text.indexOf(query.trim()) !== -1;
}
function filterOptions(options, search, label, customLabel){
  return options.filter((option) => includes(customLabel(option, label), search));
}
function stripGroups(options){
  return options.filter((option) => !option.$isLabel);
}
function flattenOptions(values, label){
  return (options) => options.reduce((prev, curr) => {
    if (curr[values] && curr[values].length){
      prev.push({
        $groupLabel: curr[label],
        $isLabel   : true
      });
      return prev.concat(curr[values]);
    }
    return prev;
  }, []);
}
function filterGroups(search, label, values, groupLabel, customLabel){
  return (groups) => groups.map((group) => {
    if (!group[values]){
      console.warn('Options passed to vue-multiselect do not contain groups, despite the config.');
      return [];
    }
    const groupOptions = filterOptions(group[values], search, label, customLabel);

    return groupOptions.length ? {
      [groupLabel]: group[groupLabel],
      [values]    : groupOptions
    } : [];
  });
}
const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const multiselectMixin = {
  data(){
    return {
      search                : '',
      isOpen                : false,
      preferredOpenDirection: 'below',
      optimizedHeight       : this.maxHeight
    };
  },
  props: {
    internalSearch: {
      type   : Boolean,
      default: true
    },
    options: {
      type    : Array,
      required: true
    },
    multiple: {
      type   : Boolean,
      default: false
    },
    value: {
      type: null,
      default(){
        return [];
      }
    },
    trackBy: {
      type: String
    },
    label: {
      type: String
    },
    searchable: {
      type   : Boolean,
      default: true
    },
    clearOnSelect: {
      type   : Boolean,
      default: true
    },
    hideSelected: {
      type   : Boolean,
      default: false
    },
    placeholder: {
      type   : String,
      default: 'Select option'
    },
    allowEmpty: {
      type   : Boolean,
      default: true
    },
    resetAfter: {
      type   : Boolean,
      default: false
    },
    closeOnSelect: {
      type   : Boolean,
      default: true
    },
    customLabel: {
      type: Function,
      default(option, label){
        if (isEmpty(option))
          return '';
        return label ? option[label] : option;
      }
    },
    taggable: {
      type   : Boolean,
      default: false
    },
    tagPlaceholder: {
      type   : String,
      default: 'Press enter to create a tag'
    },
    tagPosition: {
      type   : String,
      default: 'top'
    },
    max: {
      type   : [ Number, Boolean ],
      default: false
    },
    id: {
      default: null
    },
    optionsLimit: {
      type   : Number,
      default: 1e3
    },
    groupValues: {
      type: String
    },
    groupLabel: {
      type: String
    },
    groupSelect: {
      type   : Boolean,
      default: false
    },
    blockKeys: {
      type: Array,
      default(){
        return [];
      }
    },
    preserveSearch: {
      type   : Boolean,
      default: false
    },
    preselectFirst: {
      type   : Boolean,
      default: false
    }
  },
  mounted(){
    if (!this.multiple && this.max)
      console.warn('[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.');
    
    if (this.preselectFirst && !this.internalValue.length && this.options.length)
      this.select(this.filteredOptions[0]);
  },
  computed: {
    internalValue(){
      return this.value || this.value === 0 ? Array.isArray(this.value) ? this.value : [ this.value ] : [];
    },
    filteredOptions(){
      const search = this.search || '';
      const normalizedSearch = search.toLowerCase().trim();
      let options = this.options.concat();

      if (this.internalSearch)
        options = this.groupValues ? this.filterAndFlat(options, normalizedSearch, this.label) : filterOptions(options, normalizedSearch, this.label, this.customLabel);
      
      else
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      
      options = this.hideSelected ? options.filter(not(this.isSelected)) : options;
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch))
        if (this.tagPosition === 'bottom')
          options.push({ isTag: true, label: search });
        
        else
          options.unshift({ isTag: true, label: search });
        
      
      return options.slice(0, this.optionsLimit);
    },
    valueKeys(){
      if (this.trackBy)
        return this.internalValue.map((element) => element[this.trackBy]);
      
      return this.internalValue;
    },
    optionKeys(){
      const options = this.groupValues ? this.flatAndStrip(this.options) : this.options;

      return options.map((element) => this.customLabel(element, this.label).toString().toLowerCase());
    },
    currentOptionLabel(){
      return this.multiple ? this.searchable ? '' : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? '' : this.placeholder;
    }
  },
  watch: {
    internalValue(){
      if (this.resetAfter && this.internalValue.length){
        this.search = '';
        this.$emit('input', this.multiple ? [] : null);
      }
    },
    search(){
      this.$emit('search-change', this.search, this.id);
    }
  },
  methods: {
    getValue(){
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    filterAndFlat(options, search, label){
      return flow(filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel), flattenOptions(this.groupValues, this.groupLabel))(options);
    },
    flatAndStrip(options){
      return flow(flattenOptions(this.groupValues, this.groupLabel), stripGroups)(options);
    },
    updateSearch(query){
      this.search = query;
    },
    isExistingOption(query){
      return !this.options ? false : this.optionKeys.indexOf(query) > -1;
    },
    isSelected(option){
      const opt = this.trackBy ? option[this.trackBy] : option;

      return this.valueKeys.indexOf(opt) > -1;
    },
    isOptionDisabled(option){
      return !!option.$isDisabled;
    },
    getOptionLabel(option){
      if (isEmpty(option))
        return '';
      if (option.isTag)
        return option.label;
      if (option.$isLabel)
        return option.$groupLabel;
      const label = this.customLabel(option, this.label);

      if (isEmpty(label))
        return '';
      return label;
    },
    select(option, key){
      if (option.$isLabel && this.groupSelect){
        this.selectGroup(option);
        return;
      }
      if (this.blockKeys.indexOf(key) !== -1 || this.disabled || option.$isDisabled || option.$isLabel)
        return;
      if (this.max && this.multiple && this.internalValue.length === this.max)
        return;
      if (key === 'Tab' && !this.pointerDirty)
        return;
      if (option.isTag){
        this.$emit('tag', option.label, this.id);
        this.search = '';
        if (this.closeOnSelect && !this.multiple)
          this.deactivate();
      }
      else {
        const isSelected = this.isSelected(option);

        if (isSelected){
          if (key !== 'Tab')
            this.removeElement(option);
          return;
        }
        this.$emit('select', option, this.id);
        if (this.multiple)
          this.$emit('input', this.internalValue.concat([ option ]), this.id);
        
        else
          this.$emit('input', option, this.id);
        
        if (this.clearOnSelect)
          this.search = '';
      }
      if (this.closeOnSelect)
        this.deactivate();
    },
    selectGroup(selectedGroup){
      const group = this.options.find((option) => option[this.groupLabel] === selectedGroup.$groupLabel);

      if (!group)
        return;
      if (this.wholeGroupSelected(group)){
        this.$emit('remove', group[this.groupValues], this.id);
        const newValue = this.internalValue.filter((option) => group[this.groupValues].indexOf(option) === -1);

        this.$emit('input', newValue, this.id);
      }
      else {
        const optionsToAdd = group[this.groupValues].filter((option) => !(this.isOptionDisabled(option) || this.isSelected(option)));

        this.$emit('select', optionsToAdd, this.id);
        this.$emit('input', this.internalValue.concat(optionsToAdd), this.id);
      }
    },
    wholeGroupSelected(group){
      return group[this.groupValues].every((option) => this.isSelected(option) || this.isOptionDisabled(option));
    },
    wholeGroupDisabled(group){
      return group[this.groupValues].every(this.isOptionDisabled);
    },
    removeElement(option, shouldClose = true){
      if (this.disabled)
        return;
      if (option.$isDisabled)
        return;
      if (!this.allowEmpty && this.internalValue.length <= 1){
        this.deactivate();
        return;
      }
      const index = typeof option === 'object' ? this.valueKeys.indexOf(option[this.trackBy]) : this.valueKeys.indexOf(option);

      this.$emit('remove', option, this.id);
      if (this.multiple){
        const newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1));

        this.$emit('input', newValue, this.id);
      }
      else {
        this.$emit('input', null, this.id);
      }
      if (this.closeOnSelect && shouldClose)
        this.deactivate();
    },
    removeLastElement(){
      if (this.blockKeys.indexOf('Delete') !== -1)
        return;
      if (this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length)
        this.removeElement(this.internalValue[this.internalValue.length - 1], false);
    },
    activate(){
      if (this.isOpen || this.disabled)
        return;
      this.adjustPosition();
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length)
        this.pointer = 1;
      
      this.isOpen = true;
      if (this.searchable){
        if (!this.preserveSearch)
          this.search = '';
        this.$nextTick(() => this.$refs.search.focus());
      }
      else {
        this.$el.focus();
      }
      this.$emit('open', this.id);
    },
    deactivate(){
      if (this.isOpen){
        this.isOpen = false;
        if (this.searchable)
          this.$refs.search.blur();
        
        else
          this.$el.blur();
        
        if (!this.preserveSearch)
          this.search = '';
        this.$emit('close', this.getValue(), this.id);
      }
    },
    toggle(){
      if (this.isOpen)
        this.deactivate();
      
      else
        this.activate();
    },
    adjustPosition(){
      if (typeof window === 'undefined')
        return;
      const spaceAbove = this.$el.getBoundingClientRect().top;
      const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      const hasEnoughSpaceBelow = spaceBelow > this.maxHeight;

      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === 'below' || this.openDirection === 'bottom'){
        this.preferredOpenDirection = 'below';
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight);
      }
      else {
        this.preferredOpenDirection = 'above';
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight);
      }
    }
  }
};
const pointerMixin = {
  data(){
    return {
      pointer     : 0,
      pointerDirty: false
    };
  },
  props: {
    showPointer: {
      type   : Boolean,
      default: true
    },
    optionHeight: {
      type   : Number,
      default: 40
    }
  },
  computed: {
    pointerPosition(){
      return this.pointer * this.optionHeight;
    },
    visibleElements(){
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions(){
      this.pointerAdjust();
    },
    isOpen(){
      this.pointerDirty = false;
    }
  },
  methods: {
    optionHighlight(index, option){
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected' : this.isSelected(option)
      };
    },
    groupHighlight(index, selectedGroup){
      if (!this.groupSelect)
        return [ 'multiselect__option--group', 'multiselect__option--disabled' ];
      
      const group = this.options.find((option) => option[this.groupLabel] === selectedGroup.$groupLabel);

      return group && !this.wholeGroupDisabled(group) ? [
        'multiselect__option--group',
        { 'multiselect__option--highlight': index === this.pointer && this.showPointer },
        { 'multiselect__option--group-selected': this.wholeGroupSelected(group) }
      ] : 'multiselect__option--disabled';
    },
    addPointerElement({ key } = 'Enter'){
      if (this.filteredOptions.length > 0)
        this.select(this.filteredOptions[this.pointer], key);
      
      this.pointerReset();
    },
    pointerForward(){
      if (this.pointer < this.filteredOptions.length - 1){
        this.pointer++;
        const position = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;

        if (this.$refs.list.scrollTop <= position)
          this.$refs.list.scrollTop = position;
        
        if (this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect)
          this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerBackward(){
      if (this.pointer > 0){
        this.pointer--;
        if (this.$refs.list.scrollTop >= this.pointerPosition)
          this.$refs.list.scrollTop = this.pointerPosition;
        
        if (this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect)
          this.pointerBackward();
      }
      else if (this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect){
        this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerReset(){
      if (!this.closeOnSelect)
        return;
      this.pointer = 0;
      if (this.$refs.list)
        this.$refs.list.scrollTop = 0;
    },
    pointerAdjust(){
      if (this.pointer >= this.filteredOptions.length - 1)
        this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0;
      
      if (this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect)
        this.pointerForward();
    },
    pointerSet(index){
      this.pointer = index;
      this.pointerDirty = true;
    }
  }
};
const Multiselect_vue_vue_type_style_index_0_scoped_true_lang = '';
const _sfc_main$7 = {
  name  : 'vue-multiselect',
  mixins: [ multiselectMixin, pointerMixin ],
  props : {
    name: {
      type   : String,
      default: ''
    },
    selectLabel: {
      type   : String,
      default: 'Press enter to select'
    },
    selectGroupLabel: {
      type   : String,
      default: 'Press enter to select group'
    },
    selectedLabel: {
      type   : String,
      default: 'Selected'
    },
    deselectLabel: {
      type   : String,
      default: 'Press enter to remove'
    },
    deselectGroupLabel: {
      type   : String,
      default: 'Press enter to deselect group'
    },
    showLabels: {
      type   : Boolean,
      default: true
    },
    limit: {
      type   : Number,
      default: 99999
    },
    maxHeight: {
      type   : Number,
      default: 300
    },
    limitText: {
      type   : Function,
      default: (count) => `and ${count} more`
    },
    loading: {
      type   : Boolean,
      default: false
    },
    disabled: {
      type   : Boolean,
      default: false
    },
    openDirection: {
      type   : String,
      default: ''
    },
    showNoOptions: {
      type   : Boolean,
      default: true
    },
    showNoResults: {
      type   : Boolean,
      default: true
    },
    tabindex: {
      type   : Number,
      default: 0
    }
  },
  computed: {
    isSingleLabelVisible(){
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible(){
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues(){
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue(){
      return this.internalValue[0];
    },
    deselectLabelText(){
      return this.showLabels ? this.deselectLabel : '';
    },
    deselectGroupLabelText(){
      return this.showLabels ? this.deselectGroupLabel : '';
    },
    selectLabelText(){
      return this.showLabels ? this.selectLabel : '';
    },
    selectGroupLabelText(){
      return this.showLabels ? this.selectGroupLabel : '';
    },
    selectedLabelText(){
      return this.showLabels ? this.selectedLabel : '';
    },
    inputStyle(){
      if (this.searchable || this.multiple && this.value && this.value.length)
        return this.isOpen ? { width: '100%' } : { width: '0', position: 'absolute', padding: '0' };
      
      return { width: '100%' };
    },
    contentStyle(){
      return this.options.length ? { display: 'inline-block' } : { display: 'block' };
    },
    isAbove(){
      if (this.openDirection === 'above' || this.openDirection === 'top')
        return true;
      
      if (this.openDirection === 'below' || this.openDirection === 'bottom')
        return false;
      
      return this.preferredOpenDirection === 'above';
    },
    showSearchInput(){
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : true);
    }
  }
};
const _hoisted_1$6 = [ 'tabindex' ];
const _hoisted_2$6 = {
  ref  : 'tags',
  class: 'multiselect__tags'
};
const _hoisted_3$4 = { class: 'multiselect__tags-wrap' };
const _hoisted_4$3 = [ 'textContent' ];
const _hoisted_5$3 = [ 'onKeypress', 'onMousedown' ];
const _hoisted_6$3 = [ 'textContent' ];
const _hoisted_7$3 = { class: 'multiselect__spinner' };
const _hoisted_8$2 = [ 'name', 'id', 'placeholder', 'value', 'disabled', 'tabindex' ];
const _hoisted_9$2 = { key: 0 };
const _hoisted_10$2 = { class: 'multiselect__option' };
const _hoisted_11$2 = [ 'onClick', 'onMouseenter', 'data-select', 'data-selected', 'data-deselect' ];
const _hoisted_12$2 = [ 'data-select', 'data-deselect', 'onMouseenter', 'onMousedown' ];
const _hoisted_13$2 = { class: 'multiselect__option' };
const _hoisted_14$1 = /* @__PURE__ */ createTextVNode('No elements found. Consider changing the search query.');
const _hoisted_15$1 = { class: 'multiselect__option' };
const _hoisted_16$1 = /* @__PURE__ */ createTextVNode('List is empty.');

function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options){
  return openBlock(), createElementBlock('div', {
    tabindex : _ctx.searchable ? -1 : $props.tabindex,
    class    : normalizeClass([ { 'multiselect--active': _ctx.isOpen, 'multiselect--disabled': $props.disabled, 'multiselect--above': $options.isAbove }, 'multiselect' ]),
    onFocus  : _cache[13] || (_cache[13] = ($event) => _ctx.activate()),
    onBlur   : _cache[14] || (_cache[14] = ($event) => _ctx.searchable ? false : _ctx.deactivate()),
    onKeydown: [
      _cache[15] || (_cache[15] = withKeys(withModifiers(($event) => _ctx.pointerForward(), [ 'self', 'prevent' ]), [ 'down' ])),
      _cache[16] || (_cache[16] = withKeys(withModifiers(($event) => _ctx.pointerBackward(), [ 'self', 'prevent' ]), [ 'up' ]))
    ],
    onKeypress: _cache[17] || (_cache[17] = withKeys(withModifiers(($event) => _ctx.addPointerElement($event), [ 'stop', 'self' ]), [ 'enter', 'tab' ])),
    onKeyup   : _cache[18] || (_cache[18] = withKeys(($event) => _ctx.deactivate(), [ 'esc' ]))
  }, [
    renderSlot(_ctx.$slots, 'caret', { toggle: _ctx.toggle }, () => [
      createElementVNode('div', {
        onMousedown: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.toggle(), [ 'prevent', 'stop' ])),
        class      : 'multiselect__select'
      }, null, 32)
    ], true),
    renderSlot(_ctx.$slots, 'clear', { search: _ctx.search }, void 0, true),
    createElementVNode('div', _hoisted_2$6, [
      renderSlot(_ctx.$slots, 'selection', {
        search: _ctx.search,
        remove: _ctx.removeElement,
        values: $options.visibleValues,
        isOpen: _ctx.isOpen
      }, () => [
        withDirectives(createElementVNode('div', _hoisted_3$4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.visibleValues, (option, index) => renderSlot(_ctx.$slots, 'tag', {
            option,
            search: _ctx.search,
            remove: _ctx.removeElement
          }, () => [
            (openBlock(), createElementBlock('span', {
              class: 'multiselect__tag',
              key  : index
            }, [
              createElementVNode('span', {
                textContent: toDisplayString(_ctx.getOptionLabel(option))
              }, null, 8, _hoisted_4$3),
              createElementVNode('i', {
                'aria-hidden': 'true',
                tabindex     : '1',
                onKeypress   : withKeys(withModifiers(($event) => _ctx.removeElement(option), [ 'prevent' ]), [ 'enter' ]),
                onMousedown  : withModifiers(($event) => _ctx.removeElement(option), [ 'prevent' ]),
                class        : 'multiselect__tag-icon'
              }, null, 40, _hoisted_5$3)
            ]))
          ], true)), 256))
        ], 512), [
          [ vShow, $options.visibleValues.length > 0 ]
        ]),
        _ctx.internalValue && _ctx.internalValue.length > $props.limit ? renderSlot(_ctx.$slots, 'limit', { key: 0 }, () => [
          createElementVNode('strong', {
            class      : 'multiselect__strong',
            textContent: toDisplayString($props.limitText(_ctx.internalValue.length - $props.limit))
          }, null, 8, _hoisted_6$3)
        ], true) : createCommentVNode('', true)
      ], true),
      createVNode(Transition, { name: 'multiselect__loading' }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, 'loading', {}, () => [
            withDirectives(createElementVNode('div', _hoisted_7$3, null, 512), [
              [ vShow, $props.loading ]
            ])
          ], true)
        ]),
        _: 3
      }),
      _ctx.searchable ? (openBlock(), createElementBlock('input', {
        key         : 0,
        ref         : 'search',
        name        : $props.name,
        id          : _ctx.id,
        type        : 'text',
        autocomplete: 'nope',
        placeholder : _ctx.placeholder,
        style       : normalizeStyle($options.inputStyle),
        value       : _ctx.search,
        disabled    : $props.disabled,
        tabindex    : $props.tabindex,
        onInput     : _cache[1] || (_cache[1] = ($event) => _ctx.updateSearch($event.target.value)),
        onFocus     : _cache[2] || (_cache[2] = withModifiers(($event) => _ctx.activate(), [ 'prevent' ])),
        onBlur      : _cache[3] || (_cache[3] = withModifiers(($event) => _ctx.deactivate(), [ 'prevent' ])),
        onKeyup     : _cache[4] || (_cache[4] = withKeys(($event) => _ctx.deactivate(), [ 'esc' ])),
        onKeydown   : [
          _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => _ctx.pointerForward(), [ 'prevent' ]), [ 'down' ])),
          _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.pointerBackward(), [ 'prevent' ]), [ 'up' ])),
          _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => _ctx.removeLastElement(), [ 'stop' ]), [ 'delete' ]))
        ],
        onKeypress: _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => _ctx.addPointerElement($event), [ 'prevent', 'stop', 'self' ]), [ 'enter' ])),
        class     : 'multiselect__input'
      }, null, 44, _hoisted_8$2)) : createCommentVNode('', true),
      $options.isSingleLabelVisible ? (openBlock(), createElementBlock('span', {
        key        : 1,
        class      : 'multiselect__single',
        onMousedown: _cache[9] || (_cache[9] = withModifiers((...args) => _ctx.toggle && _ctx.toggle(...args), [ 'prevent' ]))
      }, [
        renderSlot(_ctx.$slots, 'singleLabel', { option: $options.singleValue }, () => [
          createElementVNode('template', null, [
            createTextVNode(toDisplayString(_ctx.currentOptionLabel), 1)
          ])
        ], true)
      ], 32)) : createCommentVNode('', true),
      $options.isPlaceholderVisible ? (openBlock(), createElementBlock('span', {
        key        : 2,
        class      : 'multiselect__placeholder',
        onMousedown: _cache[10] || (_cache[10] = withModifiers((...args) => _ctx.toggle && _ctx.toggle(...args), [ 'prevent' ]))
      }, [
        renderSlot(_ctx.$slots, 'placeholder', {}, () => [
          createTextVNode(toDisplayString(_ctx.placeholder), 1)
        ], true)
      ], 32)) : createCommentVNode('', true)
    ], 512),
    createVNode(Transition, { name: 'multiselect' }, {
      default: withCtx(() => [
        withDirectives(createElementVNode('div', {
          class      : 'multiselect__content-wrapper',
          onFocus    : _cache[11] || (_cache[11] = (...args) => _ctx.activate && _ctx.activate(...args)),
          tabindex   : '-1',
          onMousedown: _cache[12] || (_cache[12] = withModifiers(() => {
          }, [ 'prevent' ])),
          style: normalizeStyle({ maxHeight: _ctx.optimizedHeight + 'px' }),
          ref  : 'list'
        }, [
          createElementVNode('ul', {
            class: 'multiselect__content',
            style: normalizeStyle($options.contentStyle)
          }, [
            renderSlot(_ctx.$slots, 'beforeList', {}, void 0, true),
            _ctx.multiple && _ctx.max === _ctx.internalValue.length ? (openBlock(), createElementBlock('li', _hoisted_9$2, [
              createElementVNode('span', _hoisted_10$2, [
                renderSlot(_ctx.$slots, 'maxElements', {}, () => [
                  createTextVNode('Maximum of ' + toDisplayString(_ctx.max) + ' options selected. First remove a selected option to select another.', 1)
                ], true)
              ])
            ])) : createCommentVNode('', true),
            !_ctx.max || _ctx.internalValue.length < _ctx.max ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.filteredOptions, (option, index) => (openBlock(), createElementBlock('li', {
              class: 'multiselect__element',
              key  : index
            }, [
              !(option && (option.$isLabel || option.$isDisabled)) ? (openBlock(), createElementBlock('span', {
                key            : 0,
                class          : normalizeClass([ _ctx.optionHighlight(index, option), 'multiselect__option' ]),
                onClick        : withModifiers(($event) => _ctx.select(option), [ 'stop' ]),
                onMouseenter   : withModifiers(($event) => _ctx.pointerSet(index), [ 'self' ]),
                'data-select'  : option && option.isTag ? _ctx.tagPlaceholder : $options.selectLabelText,
                'data-selected': $options.selectedLabelText,
                'data-deselect': $options.deselectLabelText
              }, [
                renderSlot(_ctx.$slots, 'option', {
                  option,
                  search: _ctx.search
                }, () => [
                  createElementVNode('span', null, toDisplayString(_ctx.getOptionLabel(option)), 1)
                ], true)
              ], 42, _hoisted_11$2)) : createCommentVNode('', true),
              option && (option.$isLabel || option.$isDisabled) ? (openBlock(), createElementBlock('span', {
                key            : 1,
                'data-select'  : _ctx.groupSelect && $options.selectGroupLabelText,
                'data-deselect': _ctx.groupSelect && $options.deselectGroupLabelText,
                class          : normalizeClass([ _ctx.groupHighlight(index, option), 'multiselect__option' ]),
                onMouseenter   : withModifiers(($event) => _ctx.groupSelect && _ctx.pointerSet(index), [ 'self' ]),
                onMousedown    : withModifiers(($event) => _ctx.selectGroup(option), [ 'prevent' ])
              }, [
                renderSlot(_ctx.$slots, 'option', {
                  option,
                  search: _ctx.search
                }, () => [
                  createElementVNode('span', null, toDisplayString(_ctx.getOptionLabel(option)), 1)
                ], true)
              ], 42, _hoisted_12$2)) : createCommentVNode('', true)
            ]))), 128)) : createCommentVNode('', true),
            withDirectives(createElementVNode('li', null, [
              createElementVNode('span', _hoisted_13$2, [
                renderSlot(_ctx.$slots, 'noResult', { search: _ctx.search }, () => [
                  _hoisted_14$1
                ], true)
              ])
            ], 512), [
              [ vShow, $props.showNoResults && (_ctx.filteredOptions.length === 0 && _ctx.search && !$props.loading) ]
            ]),
            withDirectives(createElementVNode('li', null, [
              createElementVNode('span', _hoisted_15$1, [
                renderSlot(_ctx.$slots, 'noOptions', {}, () => [
                  _hoisted_16$1
                ], true)
              ])
            ], 512), [
              [ vShow, $props.showNoOptions && (_ctx.options.length === 0 && !_ctx.search && !$props.loading) ]
            ]),
            renderSlot(_ctx.$slots, 'afterList', {}, void 0, true)
          ], 4)
        ], 36), [
          [ vShow, _ctx.isOpen ]
        ])
      ]),
      _: 3
    })
  ], 42, _hoisted_1$6);
}
const Multiselect = /* @__PURE__ */ _export_sfc(_sfc_main$7, [ [ 'render', _sfc_render$7 ], [ '__scopeId', 'data-v-366eaf78' ] ]);
const AllFiltersSelect_vue_vue_type_style_index_0_scoped_true_lang = '';
const _sfc_main$6 = {
  name      : 'SCBDSelect',
  components: { Multiselect, Icon },
  props     : {
    name         : {},
    id           : { type: String, required: true },
    value        : { type: [ Array, Object, String ], required: true },
    placeholder  : { type: Array },
    options      : { type: Array, required: true },
    addTextSearch: { type: Function, required: true },
    onChange     : { type: Function, required: true },
    countsMap    : { type: Object }
  },
  methods : { update, highLight, onClose },
  computed: { counts },
  data    : data$2
};

function counts(){
  return ({ identifier }) => {
    if (!this.countsMap)
      return 'ZERO';
    return this.countsMap[identifier];
  };
}
function data$2(){
  return {
    values          : this.value,
    isLoading       : false,
    latestSearchText: ''
  };
}
function update(){
  this.$emit('input', this.values);
}
function onClose(){
  this.latestSearchText = '';
}
function highLight({ search, option }){
  if (search)
    this.latestSearchText = search;
  if (!search || !option.name)
    return option.name;
  const regEx = new RegExp(search, 'ig');

  return option.name.replace(regEx, `<span style="font-weight: 900;">${search}</span>`);
}
const _hoisted_1$5 = { key: 0 };
const _hoisted_2$5 = {
  key  : 0,
  class: 'row'
};
const _hoisted_3$3 = { class: 'col-12' };
const _hoisted_4$2 = { class: 'filter-label' };
const _hoisted_5$2 = {
  key  : 1,
  class: 'row'
};
const _hoisted_6$2 = { class: 'col-1 text-center' };
const _hoisted_7$2 = { key: 0 };
const _hoisted_8$1 = [ 'src', 'alt' ];
const _hoisted_9$1 = { class: 'col-11' };
const _hoisted_10$1 = [ 'innerHTML' ];
const _hoisted_11$1 = {
  key  : 0,
  class: 'small muted'
};
const _hoisted_12$1 = /* @__PURE__ */ createTextVNode('\xA0\xA0\xA0\xA0\xA0');
const _hoisted_13$1 = { class: 'badge badge-secondary' };

function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options){
  const _component_Icon = resolveComponent('Icon');
  const _component_multiselect = resolveComponent('multiselect');

  return openBlock(), createBlock(_component_multiselect, {
    id                   : $props.id,
    modelValue           : _ctx.values,
    'onUpdate:modelValue': _cache[1] || (_cache[1] = ($event) => _ctx.values = $event),
    placeholder          : $props.placeholder.join(' '),
    'track-by'           : 'identifier',
    label                : 'name',
    options              : $props.options,
    multiple             : true,
    taggable             : true,
    onTag                : $props.addTextSearch,
    'group-values'       : 'data',
    'group-label'        : 'filter',
    'group-select'       : false,
    onInput              : $options.update,
    onSelect             : $props.onChange,
    onClose              : $options.onClose,
    onRemove             : $props.onChange,
    searchable           : true,
    class                : 'fix',
    'tag-placeholder'    : 'Press enter to apply free text search or click the Search button',
    'hide-selected'      : true,
    ref                  : 'multiSelect'
  }, {
    beforeList: withCtx(() => [
      _ctx.latestSearchText ? (openBlock(), createElementBlock('div', _hoisted_1$5, [
        createElementVNode('button', {
          class  : 'btn btn-outline-info my-3 mx-3',
          type   : 'button',
          onClick: _cache[0] || (_cache[0] = ($event) => {
            $props.addTextSearch(_ctx.latestSearchText);
            _ctx.$refs.multiSelect.deactivate();
          })
        }, toDisplayString(_ctx.$t('Text Search')), 1)
      ])) : createCommentVNode('', true)
    ]),
    placeholder: withCtx(() => [
      createVNode(_component_Icon, {
        height: '16',
        width : '16',
        name  : 'search'
      }),
      createTextVNode(' ' + toDisplayString($props.placeholder[0]) + ' ' + toDisplayString($props.placeholder[1]) + ' ', 1),
      createVNode(_component_Icon, {
        height: '16',
        width : '16',
        name  : 'filter'
      }),
      createTextVNode(' ' + toDisplayString($props.placeholder[2]), 1)
    ]),
    props: withCtx(() => [
      _ctx.props.option.$groupLabel ? (openBlock(), createElementBlock('div', _hoisted_2$5, [
        createElementVNode('div', _hoisted_3$3, [
          createElementVNode('span', _hoisted_4$2, toDisplayString(_ctx.props.option.$groupLabel), 1)
        ])
      ])) : createCommentVNode('', true),
      !_ctx.props.option.$groupLabel ? (openBlock(), createElementBlock('div', _hoisted_5$2, [
        createElementVNode('div', _hoisted_6$2, [
          !_ctx.props.option.image ? (openBlock(), createElementBlock('span', _hoisted_7$2, '\xA0')) : createCommentVNode('', true),
          _ctx.props.option.image ? (openBlock(), createElementBlock('img', {
            key  : 1,
            class: 'option-image',
            src  : _ctx.props.option.image,
            alt  : _ctx.props.option.name
          }, null, 8, _hoisted_8$1)) : createCommentVNode('', true)
        ]),
        createElementVNode('div', _hoisted_9$1, [
          createElementVNode('span', {
            innerHTML: $options.highLight(_ctx.props)
          }, null, 8, _hoisted_10$1),
          _ctx.props.option.desc ? (openBlock(), createElementBlock('span', _hoisted_11$1, toDisplayString(_ctx.props.option.description), 1)) : createCommentVNode('', true),
          createElementVNode('span', null, [
            _hoisted_12$1,
            createElementVNode('span', _hoisted_13$1, toDisplayString($options.counts(_ctx.props.option)), 1)
          ])
        ])
      ])) : createCommentVNode('', true)
    ]),
    _: 1
  }, 8, [ 'id', 'modelValue', 'placeholder', 'options', 'onTag', 'onInput', 'onSelect', 'onClose', 'onRemove' ]);
}
const AllFiltersSelect = /* @__PURE__ */ _export_sfc(_sfc_main$6, [ [ 'render', _sfc_render$6 ], [ '__scopeId', 'data-v-d061874e' ] ]);

function removeFilter(key){
  const url = new URL(window.location);
  const filter = url.searchParams;

  if (filter.getAll(key).length)
    filter.delete(key);
  
  window.history.pushState({}, '', url);
}
const FilterNav_vue_vue_type_style_index_0_scoped_true_lang = '';
const _sfc_main$5 = {
  name      : 'SearchFilterNav',
  components: { AllFiltersSelect },
  methods   : {
    getList,
    initialize,
    addTextSearch,
    updateSearchQuery,
    onChange,
    readSearchParams,
    addFilter,
    injectTextAsOption,
    addParam,
    resetSearchParams
  },
  data         : data$1,
  created      : created$1,
  errorCaptured: errorCaptured$1,
  i18n,
  mounted      : mounted$1
};

async function created$1(){
  await this.initialize();
}
function mounted$1(){
  this.readSearchParams();
  setTimeout(() => {
    this.readSearchParams();
    this.$emit('$scbdFilterChange');
  }, 1e3);
}
function data$1(){
  return {
    inputText            : '',
    filters              : [],
    options              : [],
    textFilterOptionGroup: {
      filter: '',
      data  : []
    },
    countsMap: void 0
  };
}
function onChange(){
  setTimeout(this.updateSearchQuery, 100);
  setTimeout(() => this.$emit('$scbdFilterChange'), 600);
  setTimeout(() => this.initialize(), 800);
}
async function initialize(){
  const [ counts2, allOptionGroups ] = await Promise.all([ getList(), getData('all') ]);
  const allFiltersUsed = new Set(Object.keys(counts2.filterCounts));
  const onlyOptionsUsed = [];

  for (const { filter, data: data2 } of [ ...allOptionGroups ]){
    const cloneGroup = { filter };

    cloneGroup.filter = filter.en;
    cloneGroup.data = data2.filter(({ identifier }) => allFiltersUsed.has(identifier));
    onlyOptionsUsed.push(cloneGroup);
  }
  this.textFilterOptionGroup.filter = this.$t('Free Text Searches');
  this.options = [ ...onlyOptionsUsed, this.textFilterOptionGroup ];
  this.countsMap = counts2.filterCounts;
}
function updateSearchQuery(){
  resetSearchParams();
  this.filters.forEach(({ identifier }) => addParam(identifier));
}
const isPlainObject = (o) => {
  let _a;

  return Object.prototype.toString.call(o) === '[object Object]' && ((_a = o == null ? void 0 : o.constructor) == null ? void 0 : _a.name) === 'Object';
};
const jsonParse = (item) => {
  try {
    return JSON.parse(item);
  }
  catch (e){
    return item;
  }
};
const unique = (array) => Array.from(new Set(array.map((el) => {
  if (isPlainObject(el))
    return JSON.stringify(el);
  return el;
}))).map(jsonParse);

async function addFilter(identifier){
  const foundFilter = await lookUp('all', identifier, true);

  if (foundFilter && !Array.isArray(foundFilter))
    this.filters.push(foundFilter);
  if (identifier.includes('FREETEXT-'))
    this.injectTextAsOption(identifier.replace('FREETEXT-', ''));
  this.filters = unique(this.filters);
}
function readSearchParams(){
  const params = new URL(document.location).searchParams;
  const filters = params.getAll('filter');

  filters.forEach((identifier) => this.addFilter(identifier));
}
function resetSearchParams(){
  removeFilter('filter');
}
function addParam(value){
  const { origin, search, pathname } = new URL(window.location);
  const newSearchParam = `filter=${encodeURIComponent(value)}`;
  const newSearch = !search ? `?${newSearchParam}` : `${search}&${newSearchParam}`;
  const newUrl = `${origin}${pathname}${newSearch}`;

  window.history.pushState({ path: newUrl }, '', newUrl);
}
function injectTextAsOption(text){
  const textFilter = createTextFilterObject(text);

  this.textFilterOptionGroup.data.push(textFilter);
  this.filters.push(textFilter);
}
function addTextSearch(text){
  this.injectTextAsOption(text);
  setTimeout(() => this.updateSearchQuery(), 100);
  setTimeout(() => this.$emit('$scbdFilterChange'), 600);
}
function createTextFilterObject(name2){
  return { identifier: `FREETEXT-${name2}`, name: name2 };
}
function errorCaptured$1(err){
  console.error('SearchFilterNav error:', err);
  console.error(err);
}
const _hoisted_1$4 = { class: 'filter-nav' };
const _hoisted_2$4 = { class: 'position-relative navbar navbar-light bg-light px-0 px-sm-2' };
const _hoisted_3$2 = { class: 'col-12' };

function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options){
  const _component_AllFiltersSelect = resolveComponent('AllFiltersSelect');

  return openBlock(), createElementBlock('section', _hoisted_1$4, [
    createElementVNode('nav', _hoisted_2$4, [
      createElementVNode('div', _hoisted_3$2, [
        createVNode(_component_AllFiltersSelect, {
          id                   : 'filter-all',
          modelValue           : _ctx.filters,
          'onUpdate:modelValue': _cache[0] || (_cache[0] = ($event) => _ctx.filters = $event),
          placeholder          : 'Search or Filter'.split(' '),
          options              : _ctx.options,
          'add-text-search'    : $options.addTextSearch,
          'on-change'          : $options.onChange,
          countsMap            : _ctx.countsMap,
          ref                  : 'allFiltersSelect'
        }, null, 8, [ 'modelValue', 'placeholder', 'options', 'add-text-search', 'on-change', 'countsMap' ])
      ])
    ])
  ]);
}
const FilterNav = /* @__PURE__ */ _export_sfc(_sfc_main$5, [ [ 'render', _sfc_render$5 ], [ '__scopeId', 'data-v-01ce0e72' ] ]);
const Spinner_vue_vue_type_style_index_0_scoped_true_lang = '';
const _sfc_main$4 = {
  name : 'Spinner',
  props: [ 'size', 'color' ]
};
const _hoisted_1$3 = { class: 'cont' };
const _hoisted_2$3 = { class: 'slot-hold' };

function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options){
  return openBlock(), createElementBlock('div', _hoisted_1$3, [
    createElementVNode('div', {
      class: 'lds-ring',
      style: normalizeStyle({ width: `${Number($props.size) + 5}px`, height: `${Number($props.size) + 5}px` })
    }, [
      createElementVNode('div', {
        style: normalizeStyle({ 'border-width': `${$props.size / 100 * 3}px`, 'border-top-color': $props.color })
      }, null, 4),
      createElementVNode('div', {
        style: normalizeStyle({ 'border-width': `${$props.size / 100 * 3}px`, 'border-top-color': $props.color })
      }, null, 4),
      createElementVNode('div', {
        style: normalizeStyle({ 'border-width': `${$props.size / 100 * 3}px`, 'border-top-color': $props.color })
      }, null, 4),
      createElementVNode('div', {
        style: normalizeStyle({ 'border-width': `${$props.size / 100 * 3}px`, 'border-top-color': $props.color })
      }, null, 4)
    ], 4),
    createElementVNode('div', _hoisted_2$3, [
      renderSlot(_ctx.$slots, 'default', {}, void 0, true)
    ])
  ]);
}
const Spinner = /* @__PURE__ */ _export_sfc(_sfc_main$4, [ [ 'render', _sfc_render$4 ], [ '__scopeId', 'data-v-782f6af6' ] ]);
const Loading_vue_vue_type_style_index_0_scoped_true_lang = '';
const _sfc_main$3 = {
  name      : 'Loading',
  components: { Spinner },
  props     : [ 'percent' ]
};
const _withScopeId$1 = (n) => (pushScopeId('data-v-3bdfccbd'), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: 'loading' };
const _hoisted_2$2 = { class: 'cont mx-auto' };
const _hoisted_3$1 = { class: 'ring' };
const _hoisted_4$1 = { class: 'text-cont' };
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode('img', {
  class: 'leaf',
  src  : 'https://attachments.cbd.int/cbd-leaf-green.svg'
}, null, -1));
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode('br', null, null, -1));
const _hoisted_7$1 = {
  key  : 0,
  class: 'percent'
};

function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options){
  const _component_Spinner = resolveComponent('Spinner');

  return openBlock(), createElementBlock('div', _hoisted_1$2, [
    createElementVNode('div', _hoisted_2$2, [
      createElementVNode('div', _hoisted_3$1, [
        createVNode(_component_Spinner, {
          size : 40,
          color: '#009b48'
        }, {
          default: withCtx(() => [
            createElementVNode('div', _hoisted_4$1, [
              _hoisted_5$1,
              _hoisted_6$1,
              $props.percent ? (openBlock(), createElementBlock('span', _hoisted_7$1, toDisplayString($props.percent) + '%', 1)) : createCommentVNode('', true)
            ])
          ]),
          _: 1
        })
      ])
    ])
  ]);
}
const Loading = /* @__PURE__ */ _export_sfc(_sfc_main$3, [ [ 'render', _sfc_render$3 ], [ '__scopeId', 'data-v-3bdfccbd' ] ]);
const Feedback_vue_vue_type_style_index_0_scoped_true_lang = '';
const _sfc_main$2 = {
  name      : 'Feedback',
  components: { Loading },
  props     : {
    total     : { type: Number, required: false },
    page      : { type: Number, required: false },
    totalPages: { type: Number, required: false },
    loading   : { type: Boolean, required: false }
  },
  data(){
    return {
      isAscending   : false,
      isSortingApply: false,
      sortType      : 'updated',
      selectSortBy  : 'updated',
      sortOrder     : 'desc'
    };
  },
  methods: {
    sort,
    removeSort
  },
  watch: {
    selectSortBy(value){
      this.sort(value);
    },
    sortOrder(value){
      this.isAscending = value === 'asc';
      this.sort(null);
    }
  },
  mounted,
  i18n
};

function mounted(){
  const url = new URL(window.location).searchParams;
  const sortParam = url.get('sort');

  this.isSortingApply = !!sortParam;
  if (sortParam){
    if (sortParam.includes('updatedDate'))
      this.selectSortBy = 'updated';
    if (sortParam.includes('createdDate'))
      this.selectSortBy = 'created';
    if (sortParam.includes('title'))
      this.selectSortBy = 'name';
    if (sortParam.includes('asc'))
      this.sortOrder = 'asc';
    if (sortParam.includes('desc'))
      this.sortOrder = 'desc';
  }
}
function sort(key){
  this.isSortingApply = true;
  this.sortType = key || this.sortType;
  const url = new URL(window.location);
  let sortBY = 'updatedDate_dt';

  if (this.sortType === 'name')
    sortBY = 'title_t';
  if (this.sortType === 'created')
    sortBY = 'createdDate_dt';
  const sortParam = this.isAscending ? `${sortBY} asc` : `${sortBY} desc`;

  url.searchParams.set('sort', sortParam);
  window.history.pushState({}, '', url);
  setTimeout(() => this.$emit('$scbdFilterChange'), 600);
}
function removeSort(){
  this.isSortingApply = false;
  removeFilter('sort');
  setTimeout(() => this.$emit('$scbdFilterChange'), 600);
}
const _withScopeId = (n) => (pushScopeId('data-v-7078f4df'), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: 'feedback mb-3' };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode('hr', { class: 'my-0' }, null, -1));
const _hoisted_3 = {
  class: 'row px-3 px-sm-4',
  style: { 'min-height': '3em' }
};
const _hoisted_4 = { class: 'col-4 my-auto' };
const _hoisted_5 = { class: 'col-4' };
const _hoisted_6 = { class: 'col-4 my-auto text-right' };
const _hoisted_7 = { class: 'row' };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode('div', {
  class: 'col-2 my-auto pr-0',
  style: { 'font-size': '12px' }
}, [
  /* @__PURE__ */ createElementVNode('span', null, ' Sort by: ')
], -1));
const _hoisted_9 = { class: 'col-6 my-auto text-left pr-0' };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode('option', { value: 'updated' }, 'Updated Date', -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode('option', { value: 'created' }, 'Created Date', -1));
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode('option', { value: 'name' }, 'Name', -1));
const _hoisted_13 = [
  _hoisted_10,
  _hoisted_11,
  _hoisted_12
];
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode('option', { value: 'asc' }, 'asc', -1));
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode('option', { value: 'desc' }, 'desc', -1));
const _hoisted_16 = [
  _hoisted_14,
  _hoisted_15
];
const _hoisted_17 = { class: 'col-4 my-auto text-right' };
const _hoisted_18 = {
  key  : 0,
  class: 'text-nowrap'
};
const _hoisted_19 = { class: 'd-none d-sm-inline' };
const _hoisted_20 = { key: 0 };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode('hr', { class: 'my-0' }, null, -1));

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options){
  const _component_Loading = resolveComponent('Loading');

  return openBlock(), createElementBlock('section', _hoisted_1$1, [
    _hoisted_2$1,
    createElementVNode('div', _hoisted_3, [
      createElementVNode('div', _hoisted_4, toDisplayString($props.total) + ' results', 1),
      createElementVNode('div', _hoisted_5, [
        withDirectives(createVNode(_component_Loading, null, null, 512), [
          [ vShow, $props.loading ]
        ])
      ]),
      createElementVNode('div', _hoisted_6, [
        createElementVNode('div', _hoisted_7, [
          _hoisted_8,
          createElementVNode('div', _hoisted_9, [
            withDirectives(createElementVNode('select', {
              'onUpdate:modelValue': _cache[0] || (_cache[0] = ($event) => $data.selectSortBy = $event),
              class                : 'custom-select mr-2 custom-select-sm',
              style                : { width: '60%' }
            }, _hoisted_13, 512), [
              [ vModelSelect, $data.selectSortBy ]
            ]),
            withDirectives(createElementVNode('select', {
              'onUpdate:modelValue': _cache[1] || (_cache[1] = ($event) => $data.sortOrder = $event),
              class                : 'custom-select custom-select-sm',
              style                : { width: '35%' }
            }, _hoisted_16, 512), [
              [ vModelSelect, $data.sortOrder ]
            ])
          ]),
          createElementVNode('div', _hoisted_17, [
            $props.totalPages && $props.totalPages > 1 ? (openBlock(), createElementBlock('span', _hoisted_18, [
              createElementVNode('span', _hoisted_19, toDisplayString(_ctx.$t('page')) + ': ', 1),
              $props.page > 1 ? (openBlock(), createElementBlock('span', _hoisted_20, '1 -')) : createCommentVNode('', true),
              createTextVNode(' ' + toDisplayString($props.page) + ' of ' + toDisplayString($props.totalPages), 1)
            ])) : createCommentVNode('', true)
          ])
        ])
      ])
    ]),
    _hoisted_21
  ]);
}
const Feedback = /* @__PURE__ */ _export_sfc(_sfc_main$2, [ [ 'render', _sfc_render$2 ], [ '__scopeId', 'data-v-7078f4df' ] ]);
const Search_vue_vue_type_style_index_0_lang = '';
const _sfc_main$1 = {
  name      : 'PortalAppSearch',
  components: {
    FilterNav,
    Feedback,
    List,
    Icons
  },
  props: {
    options : { type: Object, required: false },
    forceEnv: { type: String, required: false, default: 'production' }
  },
  methods: {
    onScbdFilterChange,
    setRowsAndTotal,
    onScroll,
    onNextPageLoaded,
    preLoadFilter
  },
  computed: { opts, totalPages, top },
  created,
  data,
  errorCaptured,
  i18n
};

async function created(){
  initializeApi();
  if (this.opts.preLoadFilter)
    this.preLoadFilter(this.opts.preLoadFilter);
  await this.setRowsAndTotal();
  window.document.addEventListener('$me', async () => {
    if (!this.me || !this.me.isAuthenticated)
      return;
    await this.setRowsAndTotal();
  });
  if (this.opts.listenExternally)
    window.document.addEventListener('$scbdFilterChange', this.onScbdFilterChange);
}
function data(){
  return {
    rows      : [],
    total     : 0,
    page      : 1,
    loading   : false,
    notResized: true
  };
}
function opts(){
  return __spreadValues(__spreadValues({}, getDefaultOptions({}, this.forceEnv)), this.options);
}
function onScroll($el){
  const self = this;

  updateOptions({ $el });
  return async () => {
    if (process.server)
      return;
    const { pageYOffset } = window;
    const {
      scrollHeight,
      scrollTop: scrollTopDocEl,
      offsetHeight
    } = window.document.documentElement;
    const { scrollTop: scrollTopBody } = window.document.body;
    const scrollTop = scrollTopBody || scrollTopDocEl;
    const currentScrollPosition = Math.abs(offsetHeight + (pageYOffset || scrollTop));
    const isLessThanHalfScrolled = currentScrollPosition <= scrollHeight / 2;
    const isListComplete = self.page === self.totalPages;

    if (isListComplete || isLessThanHalfScrolled || self.loading)
      return;
    self.loading = true;
    window.addEventListener('$nextPageLoaded', self.onNextPageLoaded);
    const nextPageRows = await getList(true);
    const rows = nextPageRows.rows.filter((el) => el.name !== void 0 && el.description !== void 0);

    self.rows.push(...rows);
  };
}
function onNextPageLoaded($event){
  if (!this.server){
    const {
      $page: { start }
    } = $event;

    this.page = start / 10 + 1;
    window.removeEventListener('$nextPageLoaded', this.onNextPageLoaded);
    setTimeout(() => {
      this.loading = false;
    }, 100);
  }
}
function totalPages(){
  return Math.ceil(this.total / 10);
}
async function onScbdFilterChange(){
  this.page = 1;
  this.total = 0;
  await this.setRowsAndTotal();
}
async function setRowsAndTotal(){
  this.loading = true;
  const { total, rows } = await getList();

  this.total = total;
  this.rows = rows.filter((el) => el.name !== void 0 && el.description !== void 0);
  this.loading = false;
}
function preLoadFilter(filter){
  if (!filter)
    return;
  addSearchParam(filter);
}
function addSearchParam(value){
  const { origin, search, pathname } = new URL(window.location);
  const newSearchParam = `filter=${encodeURIComponent(value)}`;
  const hasFilterAlready = search.includes(value);
  const newSearch = !search ? `?${newSearchParam}` : `${search}&${newSearchParam}`;
  const newUrl = `${origin}${pathname}${hasFilterAlready ? search : newSearch}`;

  window.history.pushState({ path: newUrl }, '', newUrl);
}
function top(){
  const size = getSize();

  return this.opts[`${size}Top`] || 0;
}
function getSize(){
  const viewPort = getWidth();

  if (viewPort <= 480)
    return 'sm';
  if (viewPort > 480 && viewPort <= 768)
    return 'md';
  if (viewPort > 768)
    return 'lg';
  return 'sm';
}
function getWidth(){
  if (typeof window === 'undefined')
    return 0;
  return Math.max(window.document.documentElement.clientWidth || 0, window.innerWidth || 0);
}
function errorCaptured(err){
  console.error('Search error:', err);
  console.error(err);
}
const _hoisted_1 = { id: 'app' };
const _hoisted_2 = { class: 'stick' };

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options){
  const _component_Icons = resolveComponent('Icons');
  const _component_FilterNav = resolveComponent('FilterNav');
  const _component_Feedback = resolveComponent('Feedback');
  const _component_List = resolveComponent('List');

  return openBlock(), createElementBlock('div', _hoisted_1, [
    _cache[0] || (setBlockTracking(-1), _cache[0] = createVNode(_component_Icons), setBlockTracking(1), _cache[0]),
    createElementVNode('div', _hoisted_2, [
      $options.opts.show ? (openBlock(), createBlock(_component_FilterNav, {
        key                : 0,
        on$scbdFilterChange: $options.onScbdFilterChange,
        ref                : 'navFilter'
      }, null, 8, [ 'on$scbdFilterChange' ])) : createCommentVNode('', true),
      createVNode(_component_Feedback, mergeProps({ total: _ctx.total, page: _ctx.page, totalPages: $options.totalPages, loading: _ctx.loading }, { on$scbdFilterChange: $options.onScbdFilterChange }), null, 16, [ 'on$scbdFilterChange' ])
    ]),
    _ctx.total && _ctx.rows.length ? (openBlock(), createBlock(_component_List, {
      key        : 0,
      rows       : _ctx.rows,
      options    : $options.opts,
      'on-scroll': $options.onScroll
    }, null, 8, [ 'rows', 'options', 'on-scroll' ])) : createCommentVNode('', true)
  ]);
}
const ChmComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [ [ 'render', _sfc_render$1 ] ]);
const App_vue_vue_type_style_index_0_lang = '';
const _sfc_main = {
  name      : 'App',
  components: {
    ChmComponent
  }
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options){
  const _component_ChmComponent = resolveComponent('ChmComponent');

  return openBlock(), createBlock(_component_ChmComponent, { id: 'chm-search' });
}
const component = /* @__PURE__ */ _export_sfc(_sfc_main, [ [ 'render', _sfc_render ] ]);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function(){
  __assign = Object.assign || function __assign2(t){
    for (var s, i = 1, n = arguments.length; i < n; i++){
      s = arguments[i];
      for (const p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};

function lowerCase(str){
  return str.toLowerCase();
}
const DEFAULT_SPLIT_REGEXP = [ /([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g ];
const DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;

function noCase(input, options){
  if (options === void 0)
    options = {};
  
  const _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? ' ' : _d;
  const result = replace(replace(input, splitRegexp, '$1\0$2'), stripRegexp, '\0');
  let start = 0;
  let end = result.length;

  while (result.charAt(start) === '\0')
    start++;
  while (result.charAt(end - 1) === '\0')
    end--;
  return result.slice(start, end).split('\0').map(transform).join(delimiter);
}
function replace(input, re, value){
  if (re instanceof RegExp)
    return input.replace(re, value);
  return re.reduce((input2, re2) => input2.replace(re2, value), input);
}
function pascalCaseTransform(input, index){
  const firstChar = input.charAt(0);
  const lowerChars = input.substr(1).toLowerCase();

  if (index > 0 && firstChar >= '0' && firstChar <= '9')
    return '_' + firstChar + lowerChars;
  
  return '' + firstChar.toUpperCase() + lowerChars;
}
function pascalCase(input, options){
  if (options === void 0)
    options = {};
  
  return noCase(input, __assign({ delimiter: '', transform: pascalCaseTransform }, options));
}
const name = '@chm/search';
const NAME = pascalCase(name.replace('@chm/', 'CHM-'));

function install(Vue){
  if (install.installed)
    return;
  install.installed = true;
  Vue.component(NAME, component);
}
const plugin = { install, NAME };

export { component as default, install, plugin };
