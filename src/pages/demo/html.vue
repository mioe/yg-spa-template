<script setup lang="ts">
const tags = [
  'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside',
  'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink',
  'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite',
  'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator',
  'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em',
  'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame',
  'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup',
  'hr', 'html', 'i', 'iframe', 'image', 'img', 'input', 'ins', 'isindex', 'kbd',
  'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark',
  'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'nobr', 'noframes',
  'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param',
  'picture', 'plaintext', 'pre', 'progress', 'q', 'rp', 'rt', 'rtc', 'ruby',
  's', 'samp', 'script', 'section', 'select', 'shadow', 'slot', 'small', 'source',
  'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table',
  'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title',
  'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp',
];

function getHtmlExample(tag: string) {
  return `<${tag}>${tag}</${tag}>`;
}
</script>

<template>
  <section class="flex flex-col gap-4">
    <!-- eslint-disable vue/no-v-html -->
    <div
      v-for="tag in tags"
      :key="tag"
      v-html="getHtmlExample(tag)"
    >
    </div>
    <!-- eslint-enable vue/no-v-html -->
  </section>
</template>
