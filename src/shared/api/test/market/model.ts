import type { NumberString, OrderValue } from '@/shared/api'

export type PriceChange = {
  direction: 'Up' | 'Down';
  percent: NumberString;
  amount: NumberString;
}

export type MarketItem = {
  pair: {
    primary: string;
    secondary: string;
  };
  price: {
    last: NumberString;
    bestBid: NumberString;
    bestOffer: NumberString;
    change: PriceChange;
  }
  volume: {
    primary: NumberString;
    secondary: NumberString;
  };
  priceHistory: NumberString[];
}

export type MarketListParams = Partial<{
  searchByName: string;
  sortByName: OrderValue;
  sortByPrice: OrderValue;
  sortByBid: OrderValue;
  sortByOffer: OrderValue;
  sortByVolume: OrderValue;
  sortByChange: OrderValue;
}>
