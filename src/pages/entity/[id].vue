<script setup lang="ts">
const route = useRoute();
const id = computed(() => route?.params?.id);
</script>

<template>
  <section class="flex flex-col gap-2 p-8">
    <h1>{{ $t('pages.dynamic-page') }}</h1>
    <p>/{{ id }}</p>
  </section>
</template>
