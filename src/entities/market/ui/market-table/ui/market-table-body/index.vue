<script setup lang="ts">
import { computed } from 'vue'
import { CurrencyIcon, currencyModel } from '@/entities/currency'
import { marketModel, MarketPriceChange, MarketVolume } from '@/entities/market'
import type { MarketItem } from '@/shared/api'
import { BaseGraph, BaseTableColumn } from '@/shared/ui'

const props = defineProps<{
  item: MarketItem;
}>()

const currencyStore = currencyModel.useStore()
const item = computed(() => marketModel.getItem(props.item))

const primaryCurrency = computed(() => currencyStore.getCurrency(item.value.code))
const secondaryCurrency = computed(() => currencyStore.getCurrency(item.value.secondaryCode))

</script>

<template>
  <BaseTableColumn>
    <CurrencyIcon :item="primaryCurrency">
      <span>{{ item.code }}</span> <span class="text-gray-500">{{ primaryCurrency.currencySymbol }}</span>
    </CurrencyIcon>
  </BaseTableColumn>

  <BaseTableColumn>
    {{ marketModel.formatToSecondaryPrice(item.price, secondaryCurrency.currencySymbol) }}
  </BaseTableColumn>

  <BaseTableColumn>
    {{ marketModel.formatToSecondaryPrice(item.priceBid, secondaryCurrency.currencySymbol) }}
  </BaseTableColumn>

  <BaseTableColumn>
    {{ marketModel.formatToSecondaryPrice(item.priceOffer, secondaryCurrency.currencySymbol) }}
  </BaseTableColumn>

  <BaseTableColumn>
    <MarketPriceChange :price-change="item.priceChange" :secondary-currency-symbol="secondaryCurrency.currencySymbol" />
  </BaseTableColumn>

  <BaseTableColumn>
    <MarketVolume :item="item" />
  </BaseTableColumn>

  <BaseTableColumn>
    <BaseGraph
      :color="marketModel.isDirectionUp(item.priceChange) ? 'darkgreen' : 'darkred'"
      :data="item.priceHistory"
    />
  </BaseTableColumn>
</template>

<style scoped>

</style>
