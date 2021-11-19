<template>
  <div class="row" :class="{ 'row-bottom-border': bottomBorder }">
    <div class="col-3">
      <h5 style="padding-top: 0; margin-top: 0">
        {{ details.name }}
      </h5>
    </div>
    <div class="col-6">
      <p style="font-size: 12px">
        {{ details.description }}
      </p>
    </div>
    <div class="col-2">
      <div class="status-badge">
        <span class="badge bg-published ng-binding mr-2">0</span>
        <span class="badge bg-draft ng-binding mr-2">0</span>
        <span class="badge bg-request ng-binding">0</span>
      </div>
    </div>
    <div class="col-1">
      <div
        class="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div class="btn-group pull-right">
          <a
            translation-url=""
            class="btn btn-info btn-sm mr-2"
            href="/submit/nationalReport?type=nbsap"
            data-toggle="tooltip"
            title=""
            data-original-title="Record List"
            ><i class="fa fa-list"></i
          ></a>
          <a
            translation-url=""
            class="btn btn-primary btn-sm"
            href="/submit/nationalReport/new?type=nbsap"
            data-toggle="tooltip"
            title=""
            data-original-title="Add New Record"
            ><i class="fa fa-plus-square"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'InnerRow',
  props: {
    details: {
      type   : Object,
      default: () => {},
    },
    bottomBorder: {
      type: Boolean,
    },
  },
};
</script>

<style>
</style>
