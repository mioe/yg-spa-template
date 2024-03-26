<script setup lang="ts">
import {
  PSideBar,
  IconInfoSm,
  IconImageMd,
  IconWeekMd,
  IconCoffeeMd,
} from '@profeat/ui-kit';
const { t: $t } = useI18n();

const route = useRoute();

const sidebar = reactive({
  selected: 'home',
  isOpened: false,
});

const sidebarSelected = computed(() => {
  switch (route.name) {
    case 'index':
      return 'home';
    case 'entity-id':
      return 'id';

    default:
      return 'not-found';
  }
});

const sidebarItems = computed(() => ({
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
      value: 'not-found',
      icon: IconInfoSm,
      text: $t('pages.p404'),
      disabled: false,
      to: '/dflpslpdf/sdflpsldpf/dfspdflp',
    },
  ],

  bottom: [
    {
      icon: IconImageMd,
      href: 'https://dev-ui.profeat.team/',
      text: $t('pages.ui'),
      target: '_blank',
    },
  ],
}));

useHead({
  title: 'My awesome site',
});
</script>

<template>
  <main class="relative flex min-h-svh">
    <aside class="static left-0 top-0 z-1 flex-shrink-0">
      <PSideBar
        v-model:opened="sidebar.isOpened"
        v-model:selected="sidebarSelected"
        mode="static"
        title="YG"
        production="sendbot"
        :items="sidebarItems"
      />
    </aside>
    <div class="flex-1 bg-gray-100">
      <RouterView />
    </div>
  </main>
</template>
