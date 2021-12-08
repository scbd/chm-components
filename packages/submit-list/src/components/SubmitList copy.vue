<template>
  <div class="container">
    <h3
      class="color-blue"
      role="button"
      @click="showNationalRecords = !showNationalRecords"
    >
      <i
        :class="{
          'fa fa-chevron-circle-down': showNationalRecords,
          'fa fa-chevron-circle-up': !showNationalRecords,
        }"
        style=""
      >
      </i>
      National Records
    </h3>
    <div
      class="well"
      v-show="!showNationalRecords"
      aria-hidden="false"
      style=""
    >
      <div class="float-right" style="margin: 0 0 10px 0">
        <span class="badge bg-published mr-2" style="width: 130px; padding: 5px"
          >PUBLISHED</span
        >
        <span class="badge bg-draft mr-2" style="width: 130px; padding: 5px"
          >DRAFTS</span
        >
        <span class="badge bg-request" style="width: 130px; padding: 5px"
          >REQUESTS</span
        >
      </div>
      <div class="clearfix"></div>
      <div class="row section-row bg-grey row-bottom-border">
        <div class="col-12">National Strategies and Reports</div>
      </div>
      <div class="row row-bottom-border">
        <div class="col-3">
          <h5 style="padding-top: 0; margin-top: 0">
            National Biodiversity Strategies and Action Plans (NBSAPS)
          </h5>
        </div>
        <div class="col-6">
          <p style="font-size: 12px">
            National Biodiversity Strategies and Action Plans (NBSAPs) are the
            principal instruments for implementing the Convention at the
            national level (Article 6). The Convention requires countries to
            prepare a national biodiversity strategy (or equivalent instrument)
            and to ensure that this strategy is mainstreamed into the planning
            and activities of all those sectors whose activities can have an
            impact (positive and negative) on biodiversity.
          </p>
        </div>
        <div class="col-2">
          <div class="status-badge text-center">
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
      <div class="row">
        <div class="col-3">
          <h5 style="padding-top: 0; margin-top: 0">
            Financial Reporting Framework
          </h5>
        </div>
        <div class="col-6">
          <p style="font-size: 12px">
            The financial reporting framework, adopted by decision XII/3, is
            intended for use by Parties for providing baseline information and
            reporting on their contribution to reach the global financial
            targets, under Aichi Biodiversity Target 20, as adopted by the
            Conference of the Parties to the Convention at its twelfth meeting,
            in accordance with Article 20. Reporting on progress towards 2020
            shall be undertaken in conjunction with the sixth national reports.
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
      <div class="row row-bottom-border">
        <div class="col-3"></div>
        <div class="col-6">
          <!-- <p class="bg-red" style="padding:5px;">Under Development</p> -->
          <p style="font-size: 12px">
            Reporting on baseline and progress towards 2015
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
                ><span class="fa fa-list"></span
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
      <div class="row">
        <div class="col-3">
          <h5 style="padding-top: 0; margin-top: 0">National Reports</h5>
        </div>
        <div class="col-6">
          <!-- <p class="bg-red" style="padding:5px;">Under Development</p> -->
          <p style="font-size: 12px">
            Parties are obliged under Article 26 of the Convention to submit
            their national reports to the Conference of the Parties on measures
            taken for the implementation of the Convention and their
            effectiveness in meeting the objectives of the Convention. National
            reports provide main sources of information for the Conference of
            the Parties and its subsidiary bodies to review the implementation
            of the Convention (Article 23).
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
      <div
        class="row section-row bg-grey row-bottom-border"
        style="margin-top: 20px"
      >
        <div class="col-12">
          <a translation-url="" href="http://absch.cbd.int"
            >Access and Benefit-Sharing (Nagoya Protocol)</a
          >
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <h5 style="padding-top: 0; margin-top: 0">National Reports</h5>
        </div>
        <div class="col-6"></div>
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
      <div
        class="row section-row bg-grey row-bottom-border"
        style="margin-top: 20px"
      >
        <div class="col-12">
          <a translation-url="" href="http://absch.cbd.int"
            >Access and Benefit-Sharing (Nagoya Protocol)</a
          >
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <h5 style="padding-top: 0; margin-top: 0">National Reports</h5>
        </div>
        <div class="col-6"></div>
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
    </div>
    <hr style="position: absolute; width: 100%; left: 0" />
    <h3
      class="color-orange"
      role="button"
      @click="showRefRecords = !showRefRecords"
    >
      <!-- ng-class="{'fa fa-chevron-circle-down': showNationalrecords, 'fa fa-chevron-circle-up':!showNationalrecords}" -->
      <i
        :class="{
          'fa fa-chevron-circle-down': showRefRecords,
          'fa fa-chevron-circle-up': !showRefRecords,
        }"
        style=""
      >
      </i>
      Reference Records
    </h3>
    <div class="well" v-show="!showRefRecords" aria-hidden="false" style="">
      <div class="float-right" style="margin: 0 0 10px 0">
        <span class="badge bg-published mr-2" style="width: 130px; padding: 5px"
          >PUBLISHED</span
        >
        <span class="badge bg-draft mr-2" style="width: 130px; padding: 5px"
          >DRAFTS</span
        >
        <span class="badge bg-request" style="width: 130px; padding: 5px"
          >REQUESTS</span
        >
      </div>
      <div class="clearfix"></div>
      <div class="row section-row bg-grey row-bottom-border">
        <div class="col-12">National Strategies and Reports</div>
      </div>
      <div class="row row-bottom-border">
        <div class="col-3">
          <h5 style="padding-top: 0; margin-top: 0">
            National Biodiversity Strategies and Action Plans (NBSAPS)
          </h5>
        </div>
        <div class="col-6">
          <!-- <p class="bg-red" style="padding:5px;">Under Development</p> -->
          <p style="font-size: 12px">
            National Biodiversity Strategies and Action Plans (NBSAPs) are the
            principal instruments for implementing the Convention at the
            national level (Article 6). The Convention requires countries to
            prepare a national biodiversity strategy (or equivalent instrument)
            and to ensure that this strategy is mainstreamed into the planning
            and activities of all those sectors whose activities can have an
            impact (positive and negative) on biodiversity.
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
      <div class="row">
        <div class="col-3">
          <h5 style="padding-top: 0; margin-top: 0">
            Financial Reporting Framework
          </h5>
        </div>
        <div class="col-6">
          <!-- <p class="bg-red" style="padding:5px;">Under Development</p> -->
          <p style="font-size: 12px">
            The financial reporting framework, adopted by decision XII/3, is
            intended for use by Parties for providing baseline information and
            reporting on their contribution to reach the global financial
            targets, under Aichi Biodiversity Target 20, as adopted by the
            Conference of the Parties to the Convention at its twelfth meeting,
            in accordance with Article 20. Reporting on progress towards 2020
            shall be undertaken in conjunction with the sixth national reports.
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
      <div class="row row-bottom-border">
        <div class="col-3"></div>
        <div class="col-6">
          <!-- <p class="bg-red" style="padding:5px;">Under Development</p> -->
          <p style="font-size: 12px">
            Reporting on baseline and progress towards 2015
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
                ><span class="fa fa-list"></span
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
      <div class="row">
        <div class="col-3">
          <h5 style="padding-top: 0; margin-top: 0">National Reports</h5>
        </div>
        <div class="col-6">
          <!-- <p class="bg-red" style="padding:5px;">Under Development</p> -->
          <p style="font-size: 12px">
            Parties are obliged under Article 26 of the Convention to submit
            their national reports to the Conference of the Parties on measures
            taken for the implementation of the Convention and their
            effectiveness in meeting the objectives of the Convention. National
            reports provide main sources of information for the Conference of
            the Parties and its subsidiary bodies to review the implementation
            of the Convention (Article 23).
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
      <div
        class="row section-row bg-grey row-bottom-border"
        style="margin-top: 20px"
      >
        <div class="col-12">
          <a translation-url="" href="http://absch.cbd.int"
            >Access and Benefit-Sharing (Nagoya Protocol)</a
          >
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <h5 style="padding-top: 0; margin-top: 0">National Reports</h5>
        </div>
        <div class="col-6"></div>
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
      <div
        class="row section-row bg-grey row-bottom-border"
        style="margin-top: 20px"
      >
        <div class="col-12">
          <a translation-url="" href="http://absch.cbd.int"
            >Access and Benefit-Sharing (Nagoya Protocol)</a
          >
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <h5 style="padding-top: 0; margin-top: 0">National Reports</h5>
        </div>
        <div class="col-6"></div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "SubmitList",
  data() {
    return {
      showNationalRecords: false,
      showRefRecords: false,
    };
  },
};
</script>

<style></style>
