<template>
  <div class="container-fluid" >
    <div class="row no-gutters">
      <div class="col-sm-12" >
        <div class="card-body">
          <h5 class="card-title">{{name}}</h5>
          <p class="card-text desc description"> {{description}} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name : 'CardBody',
  props: {
    name       : { type: String, required: true },
    description: { type: String },
  },
};

</script>

<style scoped>
  .action-img{ max-height: 250px; }
  .desc{ white-space: pre-wrap;  }
  .action-icon{max-width: 2em; margin-bottom: .5em;}
  .description{
    overflow:hidden;
    max-height: 6rem;
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    overflow: hidden !important;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
  }
</style>
