import type { MarketItem } from '@/shared/api'
import { testInstance, USERNAME } from '@/shared/config'

export const getList = (): Promise<MarketItem[]> =>
  testInstance.get('/market', { params: { username: USERNAME } })
    .then(response => response.data)
