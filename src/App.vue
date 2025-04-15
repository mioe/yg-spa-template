<script setup lang="ts">
const hello = import.meta.env.VITE_APP_HELLO
console.log('🦕 hello', hello)
</script>

<template>
  <header class="mx-auto my-[8px] max-w-[1024px] w-full flex flex-wrap gap-[24px] border border-gray-200 rounded-3xl p-[16px] text-blue underline underline-blue underline-dashed">
    <RouterLink to="/">
      Home
    </RouterLink>
    <RouterLink to="/vue-vite-example">
      VueViteExample
    </RouterLink>
    <RouterLink to="/dkgoskosdkg">
      ErrorPage
    </RouterLink>
  </header>

  <div class="mx-auto max-w-[1024px] flex-1 p-[16px]">
    <RouterView />
  </div>
</template>
