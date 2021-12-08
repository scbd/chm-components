<template>
  <div>
    <h3
      :class="colorClass[rows.type]"
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
      {{ capitalizeFirstLetter(rows.type) }} Records
    </h3>
    <div v-if="!showRecords" class="well" aria-hidden="false" style="">
      <card-buttons></card-buttons>
      <div class="clearfix"></div>
      <template v-for="(subType, index) in subTypes" :key="index">
        <card-header>{{ subTypesNames[subType.header] }}</card-header>
        <inner-row
          v-for="(row, Idx) in subType.data"
          :key="Idx"
          :details="row"
          :bottom-border="Idx < subType.data.length - 1"
        ></inner-row>
      </template>
    </div>
  </div>
</template>

<script>
import CardButtons from "./CardButtons.vue";
import CardHeader from "./CardHeader.vue";
import InnerRow from "./InnerRow.vue";

export default {
  name: "Records",
  components: {
    CardButtons,
    CardHeader,
    InnerRow,
  },
  props: {
    rows: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: "",
    },
  },
  computed: {
    subTypes() {
      return this.rows.subType;
    },
  },
  setup() {
    const colorClass = {
      national: "color-blue",
      reference: "color-orange",
      SCBD: "color-black",
    };
    const subTypesNames = {
      strategiesAndReports: "National Strategies and Reports",
      accessAndBenefitSharing: "Access and Benefit-Sharing (Nagoya Protocol)",
      biosafetyClearingHouse: "Biosafety Clearing-House (BCH)",
      capacityBuildingRecords: "Capacity-Building Records",
      bioBridgeInitiativeRecords: "Bio-Bridge Initiative Records",
      events: "Events",
      organizations: "Organizations",
      UNDBRecords: "UNDB Records",
      virtualLibraryRecords: "Virtual Library Records",
      SCBDRecords: "SCBD records",
      lifeWeb: "LifeWeb",
    };
    return {
      colorClass,
      subTypesNames,
    };
  },
  data() {
    return {
      showRecords: false,
    };
  },
  methods: {
    capitalizeFirstLetter,
  },
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
</script>

<style></style>
