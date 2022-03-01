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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

  @import 'src/assets/css/vue-multiselect.css';

/* @import url("https://cdn.cbd.int/@action-agenda/icons/dist/esm/index.min.css"); */

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
