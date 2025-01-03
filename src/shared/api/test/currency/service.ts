import type { CurrencyItem } from '@/shared/api'
import { testInstance, USERNAME } from '@/shared/config'

export const getList = (): Promise<CurrencyItem[]> =>
  testInstance.get('/currency', { params: { username: USERNAME } })
    .then(response => response.data)
