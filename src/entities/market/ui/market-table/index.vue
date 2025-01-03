<script setup lang="ts">
import type { MarketItem } from '@/shared/api'
import { BaseTable } from '@/shared/ui'
import { MarketTableBody, MarketTableHead } from './ui'

defineProps<{
  data: MarketItem[];
}>()

</script>

<template>
  <BaseTable :data="data">
    <template #head>
      <MarketTableHead />
    </template>

    <template #body="item">
      <MarketTableBody :item="item" />
    </template>
  </BaseTable>
</template>

<style scoped>

</style>
