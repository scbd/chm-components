<template >
  <section class="feedback mb-3">
    <hr class="my-0"/>
    <div class="row px-3 px-sm-4" style="min-height: 3em;">
      <div class="col-4 my-auto">
        {{total}} results
      </div>
      <div class="col-4">
        <Loading v-show="loading"/>
      </div>
      <div class="col-4 my-auto text-right ">
         <button v-if="isSortingApply" type="button" class="btn btn-danger btn-sm mr-2" @click="removeSort">Remove Sorting</button>
         <button type="button" class="btn btn-dark btn-sm mr-2" @click="sort">{{ !isAscending ? "Ascending" : "Descending" }}</button>
        <span v-if="totalPages && totalPages>1"
          class="text-nowrap">
          <span class="d-none d-sm-inline">{{$t('page')}}: </span>
          <span v-if="page>1">1 -</span>
          {{page}} of {{totalPages}}
          </span>
      </div>
    </div>
    <hr class="my-0"/>
  </section>
</template>
<script>
import Loading from './Loading.vue';
import i18n from '../locales';
import {  removeFilter } from '../utils/utils';

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
    };
  },
  methods: {
    sort,
    removeSort,
  },
  mounted,
  i18n,
};

function mounted() {
  const url           = new URL(window.location).searchParams;
  this.isSortingApply = !!url.get('sort');
}

function sort() {
  this.isSortingApply = true;
  this.isAscending    = !this.isAscending;

  const url       = new URL(window.location);
  const sortParam = this.isAscending ? 'updatedDate_dt asc' :  'updatedDate_dt desc';
  url.searchParams.set('sort', sortParam);
  window.history.pushState({ }, '', url);

  setTimeout(() => this.$emit('$scbdFilterChange'), 600);
}

function removeSort() {
  this.isSortingApply = false;
  removeFilter('sort');
  setTimeout(() => this.$emit('$scbdFilterChange'), 600);
}
</script>
<style scoped>
  .feedback-text{
    padding: 1em 2em 1em 2em;
  }
  .feedback{ background-color: whitesmoke;}
</style>
