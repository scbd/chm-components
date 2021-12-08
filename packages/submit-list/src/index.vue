<template>
  <submit-list></submit-list>
</template>

<script>
import SubmitList from "./components/SubmitList.vue";

export default {
  name: "App",
  components: {
    SubmitList,
  },
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
</style>
