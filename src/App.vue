<script setup lang="ts">
import {
  PSideBar,
  PButton,
  IconInfoSm,
  IconImageMd,
  IconWeekMd,
  IconCoffeeMd,
  IconBurgerSm,
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
  <div class="relative flex flex-col min-h-svh">
    <header class="sticky left-0 top-0 w-full flex justify-center p-2 lg:hidden">
      <nav class="inline-flex">
        <PButton
          size="x-small"
          @click="sidebarIsOpen = !sidebarIsOpen"
        >
          <IconBurgerSm />
        </PButton>
      </nav>
    </header>

    <main class="relative h-full flex flex-1">
      <aside class="sticky left-0 top-0 z-1 flex-shrink-0">
        <PSideBar
          v-model:opened="sidebarIsOpen"
          v-model:selected="sidebarSelected"
          title="YG Started Template"
          production="sendbot"
          :items="sidebarItems"
        />
      </aside>
      <div class="flex-1 bg-gray-100">
        <RouterView />
      </div>
    </main>
  </div>
</template>
