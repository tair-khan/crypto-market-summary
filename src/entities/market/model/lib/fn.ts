import type { MarketItem, NumberString, PriceChange } from '@/shared/api'

export const getItem = (value: MarketItem) => ({
  code: value.pair.primary,
  secondaryCode: value.pair.secondary,

  price: value.price.last,
  priceBid: value.price.bestBid,
  priceOffer: value.price.bestOffer,

  priceChange: value.price.change,
  volume: value.volume,
  priceHistory: value.priceHistory,
})

export const isDirectionUp = (change: PriceChange) => change.direction === 'Up'

export const formatToPrimaryPrice = (price: NumberString, code: string) => `${price} ${code.toUpperCase()}`
export const formatToSecondaryPrice = (price: NumberString, symbol: string) => `${symbol}${price}`
