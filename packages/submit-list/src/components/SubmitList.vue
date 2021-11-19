<template>
  <div class="container">
    <div v-for="(row, index) of types" :key="index">
      <records  :type="row" :rows="rowData"></records>
    </div>
  </div>
</template>

<script>
import data from './data';
import Records from './Records.vue';

export default {
  components: {
    Records,
  },
  name: 'SubmitList',
  setup() {
    const types   = [ 'national', 'reference', 'SCBD' ];
    const rowData = new Map(data);
    return {
      types,
      rowData,
    };
  },
};

</script>

<style>
</style>
