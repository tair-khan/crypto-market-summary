<script setup lang="ts">
import { marketModel } from '@/entities/market'
import { BaseTableHeaderSort, BaseTableHeader } from '@/shared/ui'

const store = marketModel.useStore()

</script>

<template>
  <BaseTableHeader>
    <BaseTableHeaderSort
      :value="store.params.sortByName"
      @click="value => store.updateParams({ searchByName: store.params.searchByName, sortByName: value })"
    >
      <input
        v-model="store.params.searchByName"
        placeholder="Search by name"
        @click.stop
      />
    </BaseTableHeaderSort>
  </BaseTableHeader>

  <BaseTableHeader>
    <BaseTableHeaderSort
      :value="store.params.sortByPrice"
      @click="value => store.updateParams({ searchByName: store.params.searchByName, sortByPrice: value })"
    >Price</BaseTableHeaderSort>
  </BaseTableHeader>

  <BaseTableHeader>
    <BaseTableHeaderSort
      :value="store.params.sortByBid"
      @click="value => store.updateParams({ searchByName: store.params.searchByName, sortByBid: value })"
    >Best bid</BaseTableHeaderSort>
  </BaseTableHeader>

  <BaseTableHeader>
    <BaseTableHeaderSort
      :value="store.params.sortByOffer"
      @click="value => store.updateParams({ searchByName: store.params.searchByName, sortByOffer: value })"
    >Best offer</BaseTableHeaderSort>
  </BaseTableHeader>

  <BaseTableHeader>
    <BaseTableHeaderSort
      :value="store.params.sortByChange"
      @click="value => store.updateParams({ searchByName: store.params.searchByName, sortByChange: value })"
    >Change</BaseTableHeaderSort>
  </BaseTableHeader>

  <BaseTableHeader>
    <BaseTableHeaderSort
      :value="store.params.sortByVolume"
      @click="value => store.updateParams({ searchByName: store.params.searchByName, sortByVolume: value })"
    >Volume</BaseTableHeaderSort>
  </BaseTableHeader>

  <BaseTableHeader>Price history</BaseTableHeader>
</template>

<style scoped>

</style>
