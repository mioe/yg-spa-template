<script setup lang="ts">
import DemoTopBar from '~/components/Demo/DemoTopBar.vue';
</script>

<template>
  <section class="flex flex-col gap-2 p-8">
    <h1>Demo</h1>
    <DemoTopBar />
    <RouterView />
  </section>
</template>
