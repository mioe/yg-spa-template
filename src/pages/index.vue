<script setup lang="ts">
import HelloWorld from '~/components/HelloWorld.vue';
</script>

<template>
  <section class="flex flex-col gap-2 p-8">
    <h1>{{ $t('pages.home') }}</h1>
    <HelloWorld
      world="world"
    />
    <button>Hello, World!</button>
    <div class="i-yg:deno h-[48px] w-[48px]" />
    <div class="i-yg:fastify h-[48px] w-[48px] c-red-600" />
  </section>
</template>
