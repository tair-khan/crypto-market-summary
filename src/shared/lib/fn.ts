import type { OrderValue } from '@/shared/api'
import type { Mime } from '@/shared/config'

export const toDataURL = (mime: Mime, base64: string) => `data:${mime};base64,${base64}`

export const searchStrBy = (searchStr: string, keyword: string) => {
  return searchStr.toLowerCase().includes(keyword.toLowerCase())
}

export const compareLocale = (order: OrderValue, a: string, b: string) => {
  const first = a.toLowerCase()
  const second = b.toLowerCase()

  if (order === 'desc') return second.localeCompare(first)
  return first.localeCompare(second)
}

export const compareNumber = (order: OrderValue, a: number, b: number) => {
  if (order === 'asc') return a - b
  if (order === 'desc') return b - a

  return 0
}
