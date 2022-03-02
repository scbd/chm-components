<template>
  <ChmComponent id="chm-search"></ChmComponent>
</template>

<script>
import ChmComponent from './components/Search.vue';

export default {
  name      : 'App',
  components: {
    ChmComponent
  }
};
</script>

<style>
@import url("https://cdn.cbd.int/vue-multiselect@next/dist/dist/vue-multiselect.css"); 

#scbd-search {
  position: relative;
  width: 100%;
}
.loading {
  position: absolute;
  bottom: 0;
  left: 50%;
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
