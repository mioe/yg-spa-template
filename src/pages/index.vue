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
const { locale } = useI18n()
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

    <article>
      <h2>test composables:</h2>

      <div>
        <p>{{ useBeautifulPhoneNumber('+79998887766') }}</p>
        <p>{{ useBeautifulPhoneNumber('+389998887766') }}</p>
      </div>
    </article>

    <article>
      <h2>test import custom icon:</h2>

      <div class="i-yg:vue h-[20px] w-[20px]" />
    </article>

    <article>
      <h2>test vue-i18n:</h2>

      <button
        class="btn"
        @click="locale = 'en'"
      >
        en
      </button>

      <button
        class="btn"
        @click="locale = 'ru'"
      >
        ru
      </button>

      <p>{{ $t('Привет') }}</p>
      <p>{{ $t('Используем подход как у apple') }}</p>
      <p>{{ $t('Ключом является дефолтная локаль') }}</p>
    </article>
  </div>
</template>
