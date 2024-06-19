# yg-spa-template
> 🥑 Начальный шаблон для разработки SPA-приложений

### Договоренности по написанию кода
https://www.notion.so/wip-Developer-style-guide-de3cb47243234fc9a736fd0f226bf96b

### Интеграция eslint-а с IDE
Чтобы `eslint` работал как условный форматор аля `prettier`, нужно чтобы IDE после сохранения файла запускала команду для форматирования на основе установленных правил
> Объяснение почему нам не нужен prettier: https://antfu.me/posts/why-not-prettier

#### VSCode
В настройках редактора добавляем такие строки:
```js
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
}
```

### Zed
В настройках редактора добавляем такие строки:
```js
{
  "tab_size": 2,
  "show_whitespaces": "all",
  "formatter": {
    "code_actions": {
      "source.fixAll.eslint": true
    }
  }
}
```

#### WebStorm
В WebStorm необходимо перейти в соответствующий раздел настроек и, используя графический интерфейс, указать настройки: `Preferences → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint`.

![screenshot](https://habrastorage.org/r/w1560/getpro/habr/upload_files/76e/919/f0f/76e919f0f3d4abbd3d87c6dadd88141c.png)

### Рекомендации по расширениям для VSCode
Обязательный:
| Название | Описание |
| --- | --- |
| [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) | Актуальный помощник в работе с Vue3 |
| [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) | Локальное форматирование файлов по нужную кодировку |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | Помощник в написании кода в едином стиле |
| [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) | Подсказки при написании классов |

Опциональные:
| Название | Описание |
| --- | --- |
| [i18y Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) | Для работы с мультиязычностью, показывает вместо переменных сразу значение и собирает все упущенные ключи из коллекций словаря |
| [change-case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case) | Очень простое расширения для быстрого форматирование выделенного текста |
| [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) + [Russian Pack](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-russian) | Грамматика в IDE |
