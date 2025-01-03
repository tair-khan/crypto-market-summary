import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { testApi, type CurrencyItem } from '@/shared/api'
import { ID } from '@/shared/config'
import { getItem } from './lib'

type CurrencyRecord = Partial<Record<string, CurrencyItem>>

export const useStore = defineStore(ID.Currency, () => {

  const loading = ref(false)
  const data = ref<CurrencyItem[]>([])

  const CURRENCY = computed<CurrencyRecord>(() => {
    return data.value.reduce((previousValue, currentValue) => {
      previousValue[currentValue.code] = currentValue

      return previousValue
    }, {} as CurrencyRecord)
  })

  const getCurrency = (code: string) => getItem(CURRENCY.value[code])

  async function fetchData() {
    loading.value = true

    try {
      const list = await testApi.currencyService.getList()
      data.value = list
    } catch (error) {
      data.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    data,
    getCurrency,
    fetchData,
  }
})
