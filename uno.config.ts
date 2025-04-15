import {
  defineConfig,
  presetWind3,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'rounded bg-blue-700 px-4 py-1 text-white'],
    ['d-link', 'color-blue-400 cursor-pointer hover:color-blue-200'],
  ],
  rules: [
    ['scrolling-touch', { '-webkit-overflow-scrolling': 'touch' }],
  ],
  presets: [
    presetWind3(),
  ],
})
