<template>
  <h3
    :class="colorClass[type]"
    role="button"
    @click="showRecords = !showRecords"
  >
    <i
      :class="{
        'fa fa-chevron-circle-down': showRecords,
        'fa fa-chevron-circle-up': !showRecords,
      }"
      style=""
    >
    </i>
    {{ capitalizeFirstLetter(type) }} Records
  </h3>
  <div v-if="!showRecords" class="well" aria-hidden="false" style="">
    <card-buttons></card-buttons>
    <div class="clearfix"></div>
    <template v-for="(header, index) in headers" :key="index">
      <card-header>{{ header }}</card-header>
      <inner-row v-for="(details, index) in getRecords(header)" :key="details.id" :details="details"
      :bottom-border="index < getRecords(header).length-1"></inner-row>
    </template>
  </div>
</template>

<script>
import uniq from 'lodash/uniq';
import CardButtons from './CardButtons.vue';
import CardHeader from './CardHeader.vue';
import InnerRow from './InnerRow.vue';

export default {
  name      : 'Records',
  components: {
    CardButtons,
    CardHeader,
    InnerRow,
  },
  props: {
    rows: {
      type   : Map,
      default: () => [],
    },
    type: {
      type   : String,
      default: '',
    },
  },
  computed: {
    currentRecord() {
      return this.rows.get(this.type);
    },
    headers() {
      return uniq(this.currentRecord.map(({ header }) => header));
    },
  },
  setup() {
    const colorClass = {
      national : 'color-blue',
      reference: 'color-orange',
      SCBD     : 'color-black',
    };
    return {
      colorClass,
    };
  },
  data() {
    return {
      showRecords: false,
    };
  },
  methods: {
    capitalizeFirstLetter,
    getRecords,
  },
};

function getRecords(header) {
  return this.currentRecord.filter((record) => record.header === header);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

</script>

<style>
</style>
