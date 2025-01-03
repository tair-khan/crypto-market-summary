<script setup lang="ts">
import { computed } from 'vue'
import { marketModel } from '@/entities/market'
import type { PriceChange } from '@/shared/api'
import {
  IconSort,
  IconSortUp,
  IconSortDown,
} from '@/shared/ui'

const props = defineProps<{
  priceChange: PriceChange;
  secondaryCurrencySymbol: string;
}>()

const isPercentZero = computed(() => props.priceChange.percent === '0')
const isDirectionUp = computed(() => marketModel.isDirectionUp(props.priceChange))
const priceChangeInPercentage = computed(() => `${props.priceChange.percent}%`)

const color = computed(() => isPercentZero.value ? '' : (isDirectionUp.value ? 'darkgreen' : 'darkred'))

</script>

<template>
  <div :style="{ color }">
    <div class="flex items-center">
      <span class="mr-2">
        <IconSort v-if="isPercentZero" />

        <template v-else>
          <IconSortUp v-if="isDirectionUp"  />
          <IconSortDown v-else />
        </template>
      </span>

      {{ priceChangeInPercentage }}
    </div>

    <div v-if="!isPercentZero" class="text-right text-xs">{{ marketModel.formatToSecondaryPrice(priceChange.amount, secondaryCurrencySymbol) }}</div>
  </div>
</template>

<style scoped>

</style>
