import { ProfeatUI, ColorsThemes } from '@profeat/ui-kit'
import { createApp } from 'vue'
import App from './App.vue'

/**
 * Styles
 */
import '@unocss/reset/tailwind.css'
import '@profeat/ui-kit/style.css'
import './style.css'
import 'uno.css'

/**
 * Modules
 */
import { pinia } from './modules/pinia'
import { router } from './modules/vue-router'

/**
 * init app
 */
createApp(App)
  .use(pinia)
  .use(router)
  // @ts-expect-error
  .use(ProfeatUI, {
    fonts: false,
    theme: ColorsThemes.pink,
  })
  .mount('#app')
