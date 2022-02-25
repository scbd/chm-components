<template>
  <section class="filter-nav">
      <nav class="position-relative navbar navbar-light bg-light px-0 px-sm-2">
          <div class="col-12">
            <AllFiltersSelect

                  id="filter-all"
                  v-model="filters"
                  :placeholder="'Search or Filter'.split(' ')"
                  :options="options"
                  :add-text-search="addTextSearch"
                  :on-change="onChange"
                  :countsMap="countsMap"
                  ref="allFiltersSelect"
              />

          </div>
      </nav>
  </section>
</template>

<script>
import { getData, lookUp } from '@chm/cached-apis';
import { getList          }          from '../api/index';
import   AllFiltersSelect            from './AllFiltersSelect.vue';
import   i18n                        from '../locales';
import {  removeFilter } from '../utils/utils';

export default {
  name      : 'SearchFilterNav',
  components: { AllFiltersSelect },
  methods   : {
    getList, initialize, addTextSearch, updateSearchQuery, onChange, readSearchParams, addFilter, injectTextAsOption, addParam, resetSearchParams
  },
  data,
  created,
  errorCaptured,
  i18n,
  mounted
};

async function created(){
  await this.initialize();
}

function mounted(){
  this.readSearchParams();
  setTimeout(() => { this.readSearchParams(); this.$emit('$scbdFilterChange'); }, 1000);
}
function  data(){
  return {
    inputText            : '',
    filters              : [],
    options              : [],
    textFilterOptionGroup: {
      filter: '',
      data  : []
    },
    countsMap: undefined
  };
}

function onChange(){
  setTimeout(this.updateSearchQuery, 100);
  setTimeout(() => this.$emit('$scbdFilterChange'), 600);
  setTimeout(() => this.initialize(), 800);
}

async function initialize(){
  const [ counts, allOptionGroups ] = await Promise.all([ getList(), getData('all') ]);
  const allFiltersUsed              = new Set(Object.keys(counts.filterCounts));
  const onlyOptionsUsed             = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const { filter, data } of [ ...allOptionGroups ]){ // eslint-disable-line no-shadow
    const cloneGroup = { filter };

    cloneGroup.filter = filter.en;
    cloneGroup.data   = data.filter(({ identifier }) => allFiltersUsed.has(identifier));

    onlyOptionsUsed.push(cloneGroup);
  }

  this.textFilterOptionGroup.filter = this.$t('Free Text Searches');
  this.options                      = [ ...onlyOptionsUsed, this.textFilterOptionGroup ];

  this.countsMap = counts.filterCounts;
}

function updateSearchQuery(){
  resetSearchParams();
  this.filters.forEach(({ identifier }) => addParam(identifier));
}

const  isPlainObject = (o) => Object.prototype.toString.call(o) === '[object Object]' && o?.constructor?.name === 'Object';

const jsonParse = (item) => {
  try {
    return JSON.parse(item);
  }
  catch (e){
    return item;
  }
};
const unique    = (array) => Array.from(new Set(array.map((el) => { if (isPlainObject(el)) return JSON.stringify(el); return el; }))).map(jsonParse);

async function addFilter(identifier){
  const foundFilter = await lookUp('all', identifier, true);

  if (foundFilter && !Array.isArray(foundFilter)) this.filters.push(foundFilter);

  if (identifier.includes('FREETEXT-')) this.injectTextAsOption(identifier.replace('FREETEXT-', ''));

  this.filters = unique(this.filters);
}

function readSearchParams(){
  const params  = (new URL(document.location)).searchParams;
  const filters = params.getAll('filter');

  filters.forEach((identifier) => this.addFilter(identifier));
}

function resetSearchParams(){
  removeFilter('filter');
}

function addParam(value){
  const { origin, search, pathname } = new URL(window.location);
  const newSearchParam               = `filter=${encodeURIComponent(value)}`;
  const newSearch                    = !search ? `?${newSearchParam}` : `${search}&${newSearchParam}`;
  const newUrl                       = `${origin}${pathname}${newSearch}`;

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

function createTextFilterObject(name){ return { identifier: `FREETEXT-${name}`, name }; }

function errorCaptured(err){
  console.error('SearchFilterNav error:', err);
  console.error(err);
}

</script>

<style scoped>
    .pointer{ cursor: pointer; }
    .filter-nav{ background-color: #f8f9fa;}
</style>
