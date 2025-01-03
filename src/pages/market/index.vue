<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue'
import { currencyModel } from '@/entities/currency'
import { marketModel, MarketTable } from '@/entities/market'
import { Calendar } from '@/shared/config'
import { IconCircleNotch } from '@/shared/ui'

const currencyStore = currencyModel.useStore()
const marketStore = marketModel.useStore()
const interval = ref(0)

onBeforeMount(() => {
  currencyStore.fetchData()
  marketStore.fetchData()
})

onMounted(() => {
  interval.value = setInterval(() => marketStore.fetchData(), Calendar.SECOND * 5)
})

onBeforeUnmount(() => {
  if (interval.value) {
    clearInterval(interval.value)
  }
})

</script>

<template>
  <IconCircleNotch
    v-if="currencyStore.loading || marketStore.loading"
    class="fixed top-2 right-4 animate-spin"
  />

  <MarketTable :data="marketStore.filteredData" />
</template>

<style scoped>

</style>
