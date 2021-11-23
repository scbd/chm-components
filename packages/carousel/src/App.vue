<template>
  <div id="app">
    <div class="container">
      <carousel />
    </div>
  </div>
</template>

<script>
import Carousel from "./components/Carousel";

export default {
  components: { Carousel },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
