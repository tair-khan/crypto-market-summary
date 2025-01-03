import type { CurrencyItem, CurrencyItemLite, Undefinable } from '@/shared/api'

const getSymbol = (code: string) => {

  const transformedCode = code.toUpperCase()
  let symbol = ''

  switch (transformedCode) {
    case 'USD':
    case 'AUD':
    case 'NZD':
      symbol = '$'
      break

    case 'SGD':
      symbol = 'S$'
      break

    default:
      break
  }

  return symbol
}

export const getItem: (value: Undefinable<CurrencyItem>) => CurrencyItemLite = value => {
  const code = value?.code ?? ''
  const ticker = value?.ticker ?? ''

  return {
    code,
    ticker,
    decimals_places: value?.decimals_places ?? 0,
    icon: value?.icon ?? '',
    currencySymbol: (value?.type === 'Primary' ? ticker.toUpperCase() : getSymbol(code)) ?? '',
  }
}
