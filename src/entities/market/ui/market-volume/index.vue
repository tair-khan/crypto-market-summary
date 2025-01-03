<script setup lang="ts">
import { computed } from 'vue'
import { CurrencyIcon, currencyModel } from '@/entities/currency'
import { marketModel } from '@/entities/market'

const props = defineProps<{
  item: ReturnType<typeof marketModel.getItem>;
}>()

const currencyStore = currencyModel.useStore()
const primaryCurrency = computed(() => currencyStore.getCurrency(props.item.code))
const secondaryCurrency = computed(() => currencyStore.getCurrency(props.item.secondaryCode))

const secondaryVolume = computed(() => {
  const value = props.item.volume.secondary
  const dotIndex = value.indexOf('.')
  if (dotIndex === -1) return value
  if (!secondaryCurrency.value.decimals_places) return value

  return value.slice(0, dotIndex + (secondaryCurrency.value.decimals_places + 1))
})

</script>

<template>

  <CurrencyIcon :item="secondaryCurrency">
    {{ marketModel.formatToSecondaryPrice(secondaryVolume, secondaryCurrency.currencySymbol) }}
  </CurrencyIcon>

  <div class="text-right text-xs">
    {{ marketModel.formatToPrimaryPrice(item.volume.primary, primaryCurrency.currencySymbol) }}
  </div>

</template>

<style scoped>

</style>
