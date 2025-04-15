import { ProfeatUI, ColorsThemes } from '@profeat/ui-kit'
import { createApp } from 'vue'
import App from './App.vue'

/**
 * Styles
 */
import '@unocss/reset/tailwind.css'
import '@profeat/ui-kit/style.css'
import './styles/fonts.css'
import './styles/main.css'
import 'uno.css'

/**
 * Modules
 */
import { i18n } from './modules/vue-i18n'
import { pinia } from './modules/pinia'
import { router } from './modules/vue-router'

/**
 * init app
 */
createApp(App)
  .use(i18n)
  .use(pinia)
  .use(router)
  // @ts-expect-error
  .use(ProfeatUI, {
    fonts: false,
    theme: ColorsThemes.pink,
  })
  .mount('#app')
