
<template >
  <svg  id="chm-icons" ref="chm-icons" aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <symbol id="chm-icon-search" viewBox="0 0 250 270" preserveAspectRatio="xMidYMid meet">
        <title>{{$t("search")}}</title>
        <path d="M16 254 c-20 -20 -20 -22 5 -63 14 -24 19 -44 15 -63 -7 -37 15 -90 45 -112 13 -9 43 -16 67 -16 62 0 102 40 102 104 0 64 -40 109 -100 112 -31 1 -49 9 -67 28 -27 30 -45 33 -67 10z m164 -104 c36 -36 14 -100 -34 -100 -60 1 -81 79 -29 109 26 15 41 13 63 -9z"/>
      </symbol>
      <symbol id="chm-icon-filter" viewBox="0 0 14 18">
        <title>{{$t("filter")}}</title>
        <path d="M14.093 2.963c0.1 0.241 0.050 0.522-0.141 0.703l-4.952 4.952v7.453c0 0.261-0.161 0.492-0.392 0.593-0.080 0.030-0.171 0.050-0.251 0.050-0.171 0-0.331-0.060-0.452-0.191l-2.571-2.571c-0.121-0.121-0.191-0.281-0.191-0.452v-4.882l-4.952-4.952c-0.191-0.181-0.241-0.462-0.141-0.703 0.1-0.231 0.331-0.392 0.593-0.392h12.857c0.261 0 0.492 0.161 0.593 0.392z"></path>
      </symbol>
    </defs>
  </svg>
</template>


<script>
import i18n from '../locales/index.js'

export default {
  name: 'AAIcons', i18n
}

</script>
<style>
.chm-icon-search { width: 1em; }
.chm-icon-menu { width: 1.6em; }
.chm-icon-close { font-size: 1.1em; }
</style>