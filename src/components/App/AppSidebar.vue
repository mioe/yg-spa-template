<script setup lang="ts">
import {
  PSideBar,
  IconInfoSm,
  IconImageMd,
  IconWeekMd,
  IconCoffeeMd,
  IconBoxMd,
} from '@profeat/ui-kit';

const { t: $t } = useI18n();
const route = useRoute();

const sidebarIsOpen = ref(false);
const sidebarSelected = computed(() => {
  switch (route.name) {
    case 'index':
      return 'home';
    case 'entity-id':
      return 'id';
    case 'demo':
      return 'demo';
    case 'demo-html':
      return 'demo';
    default:
      return 'not-found';
  }
});

function open() {
  sidebarIsOpen.value = true;
}

defineExpose({
  open,
});
</script>

<template>
  <aside class="sticky left-0 top-0 z-1 flex-shrink-0 max-h-svh">
    <PSideBar
      v-model:opened="sidebarIsOpen"
      v-model:selected="sidebarSelected"
      title="YG Started Template"
      production="sendbot"
      :items="{
        menu: [
          {
            value: 'home',
            icon: IconCoffeeMd,
            text: $t('pages.home'),
            disabled: false,
            to: '/',
          },
          {
            value: 'id',
            icon: IconWeekMd,
            text: $t('pages.dynamic-page'),
            disabled: false,
            to: '/entity/cc55170d-83c3-41a5-a90d-e69cc9a21b2b',
          },
          {
            value: 'demo',
            icon: IconBoxMd,
            text: $t('pages.demo.title'),
            disabled: false,
            to: '/demo/html',
          },
          {
            value: 'not-found',
            icon: IconInfoSm,
            text: $t('pages.p404'),
            disabled: false,
            to: '/dflpslpdf/sdflpsldpf/dfspdflp',
          },
        ],

        bottom: [
          {
            value: 'nil',
            icon: IconImageMd,
            href: 'https://dev-ui.yourgood.app/',
            text: $t('pages.ui'),
            target: '_blank',
          },
        ],
      }"
    />
  </aside>
</template>
