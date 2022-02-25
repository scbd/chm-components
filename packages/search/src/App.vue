<template>
  <div id="app">
    <Icons v-once/>
    <div class="stick">
      <FilterNav
        v-if="opts.show"
        @$scbdFilterChange="onScbdFilterChange"
        ref="navFilter"
      />
      <Feedback v-bind="{ total, page, totalPages, loading }"   @$scbdFilterChange="onScbdFilterChange" />
    </div>
    <List
      v-if="total && rows.length"
      :rows="rows"
      :options="opts"
      :on-scroll="onScroll"
    />
  </div>
</template>

<script>

import Icons from '@action-agenda/icons';
import i18n from './locales/index';

import { getList, initializeApi, updateOptions } from './api/index';

import List from './components/List/index.vue';
import getDefaultOptions from './default-options';
import FilterNav from './components/FilterNav.vue';
import Feedback from './components/Feedback.vue';

export default {
  name      : 'PortalAppSearch',
  components: {
    FilterNav, Feedback, List, Icons,
  },
  props: {
    options : { type: Object, required: false },
    forceEnv: { type: String, required: false, default: 'production' },
  },
  methods: {
    onScbdFilterChange,
    setRowsAndTotal,
    onScroll,
    onNextPageLoaded,
    preLoadFilter,
  },
  computed: { opts, totalPages, top },
  created,
  data,
  errorCaptured,
  i18n,

};

async function created() {
  initializeApi();

  if (this.opts.preLoadFilter) this.preLoadFilter(this.opts.preLoadFilter);
  await this.setRowsAndTotal();
  window.document.addEventListener('$me', async () => {
    if (!this.me || !this.me.isAuthenticated) return;
    await this.setRowsAndTotal();
  });

  if (this.opts.listenExternally) {
    window.document.addEventListener(
      '$scbdFilterChange',
      this.onScbdFilterChange,
    );
  }
}

function data() {
  return {
    rows      : [],
    total     : 0,
    page      : 1,
    loading   : false,
    notResized: true,
  };
}
function opts() {
  return { ...getDefaultOptions({}, this.forceEnv), ...this.options };
}

function onScroll($el) {
  const self = this;

  updateOptions({ $el });

  return async () => {
    if (process.server) return;

    const { pageYOffset }              = window;
    const {
      scrollHeight,
      scrollTop: scrollTopDocEl,
      offsetHeight,
    } = window.document.documentElement;
    const { scrollTop: scrollTopBody } = window.document.body;
    const scrollTop                    = scrollTopBody || scrollTopDocEl;

    const currentScrollPosition  = Math.abs(
      offsetHeight + (pageYOffset || scrollTop),
    );
    const isLessThanHalfScrolled = currentScrollPosition <= scrollHeight / 2;
    const isListComplete         = self.page === self.totalPages;

    if (isListComplete || isLessThanHalfScrolled || self.loading) return; // do nothing

    self.loading = true;
    window.addEventListener('$nextPageLoaded', self.onNextPageLoaded);
    const nextPageRows = await getList(true);

    const rows = nextPageRows.rows.filter((el) =>   el.name !== undefined && el.description !== undefined);

    self.rows.push(...rows);
  };
}

function onNextPageLoaded($event) {
  if (!this.server) {
    const {
      $page: { start },
    } = $event;

    this.page = start / 10 + 1;
    window.removeEventListener('$nextPageLoaded', this.onNextPageLoaded);
    setTimeout(() => {
      this.loading = false;
    }, 100);
  }
}

function totalPages() {
  return Math.ceil(this.total / 10);
}

async function onScbdFilterChange() {
  this.page  = 1;
  this.total = 0;

  await this.setRowsAndTotal();
}

async function setRowsAndTotal() {
  this.loading = true;

  const { total, rows } = await getList();

  this.total   = total;
  this.rows    = rows.filter((el) =>   el.name !== undefined && el.description !== undefined);
  this.loading = false;
}

function preLoadFilter(filter) {
  if (!filter) return;

  addSearchParam(filter);
}

function addSearchParam(value) {
  const { origin, search, pathname } = new URL(window.location);
  const newSearchParam               = `filter=${encodeURIComponent(value)}`;
  const hasFilterAlready             = search.includes(value);
  const newSearch                    = !search
    ? `?${newSearchParam}`
    : `${search}&${newSearchParam}`;
  const newUrl                       = `${origin}${pathname}${hasFilterAlready ? search : newSearch}`;

  window.history.pushState({ path: newUrl }, '', newUrl);
}

function top() {
  const size = getSize();

  return this.opts[`${size}Top`] || 0;
}

function getSize() {
  const viewPort = getWidth();

  if (viewPort <= 480) return 'sm';
  if (viewPort > 480 && viewPort <= 768) return 'md';
  if (viewPort > 768) return 'lg';
  return 'sm';
}

function getWidth() {
  if (typeof window === 'undefined') return 0;

  return Math.max(
    window.document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
  );
}

function errorCaptured(err) {
  console.error('Search error:', err);
  console.error(err);
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
@import url("https://cdn.cbd.int/@action-agenda/icons/dist/esm/index.min.css");

#scbd-search {
  position: relative;
  width: 100%;
}
.loading {
  position: absolute;
  bottom: 0;
  left: 50%;
  /* background-color: burlywood; */
}
.stick {
  position: sticky;
  z-index: 5;
  top: 0;
}

.navbar {
  padding: 0.5rem 1rem;
}
</style>
