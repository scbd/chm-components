<template>
  <div v-if="this.sitekey">
    <vue-recaptcha 
    @verify="onVerify"
    @expired="onExpired"
    @render="onRender"
    @error="onError"
    :recaptchaScriptId="`recaptcha-${this.id}`"
    :language="locale"
    recaptchaHost="www.recaptcha.net"
    :sitekey="this.sitekey" 
    />
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useI18n         } from 'vue-i18n'
import { VueRecaptcha    } from 'vue-recaptcha'
import { useAuthStore    } from '../../composables/stores/auth'
import { useOptionsStore } from '../../composables/stores/options'

export default {
  name      : 'Captcha',
  components: { VueRecaptcha },
  methods   : {  onVerify, onExpired, onRender, onError },
  computed: { ...mapState(useOptionsStore, ['sitekey', 'id']) },
  setup
}

function onVerify(token){
  this.authStore.$patch({ xCaptchaV2Token: token })
}

function onExpired(){
  this.authStore.$patch({ xCaptchaV2Token: '' })
}

function onRender(){
  this.authStore.$patch({ xCaptchaV2Loaded: true })
}

function onError(resp){
  console.error('xCaptchaV2 onError', resp)
}

function setup(){
  const { t, locale }  = useI18n({ useScope: 'global' })
  const   authStore    = useAuthStore()

  return { t, locale, authStore }
}
</script>
