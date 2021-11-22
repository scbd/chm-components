<template >
  <section class="feedback mb-3">
    <hr class="my-0" />
    <div class="row px-3 px-sm-4" style="min-height: 3em">
      <div class="col-4 my-auto">{{ total }} results</div>
      <div class="col-4">
        <Loading v-show="loading" />
      </div>
      <div class="col-4 my-auto text-right">
        <div class="row">
          <div class="col-2 my-auto pr-0" style="font-size: 12px">
            <span> Sort by: </span>
          </div>
          <div class="col-6 my-auto text-left pr-0">
            <select
              v-model="selectSortBy"
              class="custom-select mr-2 custom-select-sm"
              style="width: 60%"
            >
              <option value="updated">Updated Date</option>
              <option value="created">Created Date</option>
              <option value="name">Name</option>
            </select>
            <select
              v-model="sortOrder"
              class="custom-select custom-select-sm"
              style="width: 35%"
            >
              <option value="asc">asc</option>
              <option value="desc">desc</option>
            </select>

          </div>
          <div class="col-4 my-auto text-right">
            <span v-if="totalPages && totalPages > 1" class="text-nowrap">
              <span class="d-none d-sm-inline">{{ $t("page") }}: </span>
              <span v-if="page > 1">1 -</span>
              {{ page }} of {{ totalPages }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-0" />
  </section>
</template>
<script>
import Loading from './Loading.vue';
import i18n from '../locales';
import { removeFilter } from '../utils/utils';

export default {
  name      : 'Feedback',
  components: { Loading },
  props     : {
    total     : { type: Number, required: false },
    page      : { type: Number, required: false },
    totalPages: { type: Number, required: false },
    loading   : { type: Boolean, required: false },
  },
  data() {
    return {
      isAscending   : false,
      isSortingApply: false,
      sortType      : 'updated',
      selectSortBy  : 'updated',
      sortOrder     : 'desc',
    };
  },
  methods: {
    sort,
    removeSort,
  },
  watch: {
    selectSortBy(value) {
      this.sort(value);
    },
    sortOrder(value) {
      this.isAscending = value === 'asc';
      this.sort(null);
    },
  },
  mounted,
  i18n,
};

function mounted() {
  const url           = new URL(window.location).searchParams;
  const sortParam     = url.get('sort');
  this.isSortingApply = !!sortParam;

  if (sortParam) {
    if (sortParam.includes('updatedDate')) {
      this.selectSortBy = 'updated';
    }
    if (sortParam.includes('createdDate')) {
      this.selectSortBy = 'created';
    }
    if (sortParam.includes('title')) {
      this.selectSortBy = 'name';
    }

    if (sortParam.includes('asc')) {
      this.sortOrder = 'asc';
    }
    if (sortParam.includes('desc')) {
      this.sortOrder = 'desc';
    }
  }
}

function sort(key) {
  this.isSortingApply = true;
  this.sortType       = key || this.sortType;
  const url           = new URL(window.location);
  let sortBY          = 'updatedDate_dt';
  if (key === 'name') {
    sortBY = 'title_t';
  }
  if (key === 'created') {
    sortBY = 'createdDate_dt';
  }

  const sortParam = this.isAscending ? `${sortBY} asc` : `${sortBY} desc`;
  url.searchParams.set('sort', sortParam);
  window.history.pushState({}, '', url);

  setTimeout(() => this.$emit('$scbdFilterChange'), 600);
}

function removeSort() {
  this.isSortingApply = false;
  removeFilter('sort');
  setTimeout(() => this.$emit('$scbdFilterChange'), 600);
}
</script>
<style scoped>
.feedback-text {
  padding: 1em 2em 1em 2em;
}
.feedback {
  background-color: whitesmoke;
}
</style>
