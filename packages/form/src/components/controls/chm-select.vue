<template>
  <div class="form-group SelectInput" :class="{ 'has-error': !!(errorMessage && meta.touched && !isOpen), success: meta.valid }" >

    <label :for="name">{{ t(name) }}</label>

    <multiselect
        :id="name"
        v-model="inputValue"
        :placeholder="t(`${name}.placeholder`)"
        track-by="identifier"
        label="name"
        :options="optionsList"
        :multiple="options.multiple"
        :taggable="true"
        :group-select="true"
        @input="handleChange"
        @blur="handleBlur"
        @open="toggleOpen"
        @close="toggleOpen"
        :searchable="true"
        :hide-selected="true"
        ref="multiSelect"
        :class="{ 'has-error': !!(errorMessage && meta.touched && !isOpen), success: meta.valid }"
      />

    <div class="help" v-show="(errorMessage && meta.touched && !isOpen) || meta.valid">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import           Multiselect                      from 'vue-multiselect'
import {         toRef          , ref , computed} from 'vue'
import {         useField       }                 from 'vee-validate'
import {         getData, lookUp        }                 from '@scbd-chm/cached-apis'
import {         useI18n        }                 from 'vue-i18n'
import           isFunction                       from 'lodash.isfunction'
import           isPlainObject                    from 'lodash.isplainobject'
import {         readFieldRules, getMsgFunc }     from '../../composables/schema-validation'
import { object, array          }                 from 'yup'

export default {
  name       : 'ChmSelectInputControl',
  components : { Multiselect },
  props      : {
                  name          : { type: String, required: true },
                  formCtx       : { type: Object, required: true },
                  value         : { type: [ Object, Array ] },
                  label         : { type: String, default: '' },
                  placeholder   : { type: String, default: '' },
                  options       : { type: Object, default: defaultOptions, validator }
                },
  methods: { toggleOpen },
  setup, data, mounted
}

function setup(props) {
  const { t }       = useI18n({ useScope: 'global' })
  const optionsList = ref([])

  getData(props.options.type).then((data) =>  optionsList.value = data ) 

  const name = toRef(props, 'name');

  const   label         = toRef(props, 'label')
  const   computedLabel = computed(() => label.value || t(name.value))

  const getMsg = getMsgFunc(t, computedLabel)
  const rule   = props.options.multiple? array().nullable() : object().nullable()
  const rules  = props.options?.rules?.required? rule.required(getMsg('required')) : undefined

  const { value: inputValue, errorMessage, handleBlur, handleChange, meta, } = useField(name, rules);

  lookUpValues(inputValue).then((lookUpReturn)=>inputValue.value=lookUpReturn)

  return { t, handleChange, handleBlur, errorMessage, inputValue, meta, optionsList }
}

function data (){ return { isOpen: false } }

function toggleOpen(){
  if(this.isOpen) setTimeout(() => this.isOpen = !this.isOpen, 250 )
  else this.isOpen = !this.isOpen
}

function mounted(){
  //chrome anoying with muliselect
  this.$refs.multiSelect.$refs.search.setAttribute('autocomplete', 'none')
}

async function lookUpValues(valueRef){
  const value      = valueRef.value

  if(!value) return undefined

  const ids        = Array.isArray(value)? value.map(({ identifier })=> identifier ) : value.identifier
  const isSingle   = !Array.isArray(value)

  const foundValue = await lookUp('all', ids, isSingle)

  return foundValue
}

function defaultOptions (rawProps) {
  return ({ 
    type          : 'countries',
    multiple      : false
  }) 
}

const types = [ 'all', 'aichis', 'subjects', 'countries', 'orgTypes', 'govTypes', 'regions', 'geoLocations', 'sdgs', 'actionCategories', 'documentStates', 'schemas']


function validator (value) {
  const { type, multiple, rules } = value || {}

  return isTypeValid(type) && isRulesValid(rules)
}

function isTypeValid(type){
  if(!type || !(typeof type === 'string' || type instanceof String)) return false

  return types.includes(type)
}

function isRulesValid(value){

  return typeof value === 'undefined' || isFunction(value) || isPlainObject(value)
}
</script>


<style scoped>
/* @import url("https://cdn.cbd.int/vue-multiselect@next/dist/dist/vue-multiselect.css"); */

.help {
  padding-left: 5px;
  margin    : 0;
  font-size : 14px;
  color     : red;
}
.multiselect.has-error >>> div{ background-color: var(--vv--error-bg-color); }
.multiselect{ padding-top: .25em;}
</style>