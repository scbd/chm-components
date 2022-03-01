

import Icons, { Icon, iconNames } from '@scbd-chm/icons'


const template = ` <div id="app">
<Icons />

<div v-for="(name,index) in iconNames" v-bind:key="index">
  <h1 > {{$t(name)}} <Icon :name="name"/></h1>
  
  <div class="language-html extra-class">
    <pre class="language-html">
      <code>
        <span class="token punctuation">&lt;</span><span class="token tag">svg </span><span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span><span class="token punctuation">&lt;</span><span class="token tag">use </span><span class="token attr-name">:xlink:href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#icon-{{name}}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">&gt;</span><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span>
      </code>
    </pre>
  </div>
</div>


</div>`

export default {
  name      : 'App',
  components: { Icons, Icon },
  data,
  template
}

function data(){
  return { iconNames }
}
