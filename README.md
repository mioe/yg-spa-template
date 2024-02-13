# yg-spa-template

### Форматирования переменных
- константы и env-ы всегда именуем в стиле `CONSTANT_CASE`, например: `DEFAULT_PAGINATION_LIMIT`, `VITE_ADMIN_TOKEN`
- классы, интерфейсы, типы и название компонентов в `PascalCase`, например: `interface TgStepState`, `<RouterLink />`
- экземпляры классов, переменные, название функций в `camelCase`, например: `const tgStepState = new TgStepState()`, `const isLoading = ref(false)`, `useAuthStore()`
- название i18n ключей, классы стилей и название страниц в `kebab-case`, например: `create-chatbot: Создать чатбота`, `class="yg-button yg-primary yg-rounded-xl"` (если хотите выразить вложения используйте бэм: `yg-button--right-icon`, `yg-card--header--main-title`), `pages/auth/user-info.vue`
