<script setup lang="ts">
import {
  PButton,
  IconBurgerSm,
} from '@profeat/ui-kit';
import Sidebar from '~/components/App/Sidebar.vue';

const sidebarRef = shallowRef<InstanceType<typeof Sidebar> | null>(null);

function handleOpenSidebar() {
  sidebarRef.value?.open();
}

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
          @click="handleOpenSidebar"
        >
          <IconBurgerSm />
        </PButton>
      </nav>
    </header>

    <main class="relative h-full flex flex-1">
      <Sidebar ref="sidebarRef" />
      <div class="flex-1 bg-gray-100">
        <RouterView />
      </div>
    </main>
  </div>
</template>
