<template>
  <StyleWrapper>
    <ChmComponent></ChmComponent>
  </StyleWrapper>
</template>

<script>
import StyleWrapper from './components/IdScopedStyle/index.vue';
import ChmComponent from './components/SubmitList.vue';

export default {
  name: "App",
  components: {
    ChmComponent,  StyleWrapper
  },
};
</script>


