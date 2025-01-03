import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { testApi, type MarketItem, type MarketListParams } from '@/shared/api'
import { ID } from '@/shared/config'
import { $utils } from '@/shared/lib'
import { getItem, isDirectionUp } from './lib'

export const useStore = defineStore(ID.Market, () => {

  const loading = ref(false)
  const params = ref<MarketListParams>({})
  const data = ref<MarketItem[]>([])

  const updateParams = (newParams: MarketListParams) => params.value = newParams

  async function fetchData() {
    loading.value = true

    try {
      const list = await testApi.marketService.getList()
      data.value = list
    } catch (error) {
      data.value = []
    } finally {
      loading.value = false
    }
  }

  const filteredData = computed(() => {
    let result = [...data.value]

    const searchByName = (params.value.searchByName ?? '').trim()
    const sortByName = params.value.sortByName ?? ''
    const sortByPrice = params.value.sortByPrice ?? ''
    const sortByBid = params.value.sortByBid ?? ''
    const sortByOffer = params.value.sortByOffer ?? ''
    const sortByVolume = params.value.sortByVolume ?? ''
    const sortByChange = params.value.sortByChange ?? ''

    if (searchByName) {
      result = result
        .filter(value => $utils.searchStrBy(
          getItem(value).code,
          searchByName,
        ))
    }

    if (sortByName) {
      result = result
        .sort((a, b) => $utils.compareLocale(
          sortByName,
          getItem(a).code,
          getItem(b).code,
        ))
    }

    if (sortByPrice) {
      result = result
        .sort((a, b) => $utils.compareNumber(
          sortByPrice,
          Number.parseFloat(getItem(a).price),
          Number.parseFloat(getItem(b).price),
        ))
    }

    if (sortByBid) {
      result = result
        .sort((a, b) => $utils.compareNumber(
          sortByBid,
          Number.parseFloat(getItem(a).priceBid),
          Number.parseFloat(getItem(b).priceBid),
        ))
    }

    if (sortByOffer) {
      result = result
        .sort((a, b) => $utils.compareNumber(
          sortByOffer,
          Number.parseFloat(getItem(a).priceOffer),
          Number.parseFloat(getItem(b).priceOffer),
        ))
    }

    if (sortByVolume) {
      result = result
        .sort((a, b) => $utils.compareNumber(
          sortByVolume,
          Number.parseFloat(getItem(a).volume.secondary),
          Number.parseFloat(getItem(b).volume.secondary),
        ))
    }

    if (sortByChange) {
      result = result
        .sort((a, b) => {
          const itemPriceChangeFirst = getItem(a).priceChange
          const itemPriceChangeSecond = getItem(b).priceChange

          const first = Number.parseFloat((itemPriceChangeFirst.percent))
          const second = Number.parseFloat((itemPriceChangeSecond.percent))

          return $utils.compareNumber(
            sortByChange,
            isDirectionUp(itemPriceChangeFirst) ? +first : -first,
            isDirectionUp(itemPriceChangeSecond) ? +second : -second,
          )
        })
    }

    return result
  })

  return {
    loading,
    params,
    updateParams,
    fetchData,
    filteredData,
  }
})
