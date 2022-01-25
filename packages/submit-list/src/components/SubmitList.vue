<template>
  <div  class="container">
    <div v-for="(row, index) of filterData" :key="index">
      <records :rows="row"></records>
    </div>
  </div>
</template>

<script>
import data from "./data";
import Records from "./Records.vue";

export default {
  components: {
    Records,
  },
  name: "SubmitList",
  data() {
    return {
      records: [],
    };
  },
  setup() {
    const types = ["national", "reference", "SCBD"];
    const rowData = new Map(data);
    return {
      types,
      rowData,
    };
  },
  computed: {
    filterData() {
      return this.records;
    },
  },
  mounted,
};

function mounted() {
  const types = ["national", "reference", "SCBD"];
  const subTypes = [
    "strategiesAndReports",
    "accessAndBenefitSharing",
    "biosafetyClearingHouse",
    "capacityBuildingRecords",
    "bioBridgeInitiativeRecords",
    "events",
    "organizations",
    "UNDBRecords",
    "virtualLibraryRecords",
    "SCBDRecords",
    "lifeWeb",
  ];

  for (const groupName of types) {
    // eslint-disable-line no-restricted-syntax
    const item = { type: groupName, subType: [] };
    data.forEach((element) => {
      if (element.types.includes(groupName)) {
        const subType = { header: undefined, data: [] };
        for (const subName of subTypes) {
          // eslint-disable-line no-restricted-syntax
          if (element.types.includes(subName)) {
            const findItem = item.subType.find((s) => s.header === subName);
            if (findItem) {
              findItem.data.push(element);
            } else {
              subType.header = subName;
              subType.data.push(element);
            }
          }
        }

        if (subType.header && subType.data.length) {
          item.subType.push(subType);
        }
      }
    });
    this.records.push(item);
  }
}
</script>

<style></style>
