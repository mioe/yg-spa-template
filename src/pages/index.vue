<script setup lang="ts">
import {
  IconInfoSm,
  IconImageMd,
  IconWeekMd,
  IconCoffeeMd,
  IconBoxMd,
  PButtonFloating,
} from '@profeat/ui-kit'

const appStore = useAppStore()
const { decrement, increment } = appStore
</script>

<template>
  <div class="flex flex-col gap-[8px]">
    <article>
      <h2>test pinia:</h2>

      <div class="flex items-center gap-[8px]">
        <button
          class="btn"
          @click="decrement"
        >
          -
        </button>
        <p>{{ appStore.count }}</p>
        <button
          class="btn"
          @click="increment"
        >
          +
        </button>
      </div>
    </article>

    <article>
      <h2>test uikit:</h2>

      <div class="flex gap-[4px]">
        <IconInfoSm />
        <IconImageMd />
        <IconWeekMd />
        <IconCoffeeMd />
        <IconBoxMd />
      </div>

      <PButtonFloating>
        PButtonFloating TEST
      </PButtonFloating>
    </article>
  </div>
</template>
