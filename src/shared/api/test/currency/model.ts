import type { Base64 } from '@/shared/api'

type CurrencyType = 'Primary' | 'Secondary';

export type CurrencyItem = {
  code: string;
  sort_order: number;
  ticker: string;
  type: CurrencyType;
  decimals_places: number;
  icon: Base64;
}

export type CurrencyItemLite = Pick<CurrencyItem,
  | 'code'
  | 'ticker'
  | 'decimals_places'
  | 'icon'
> & { currencySymbol: string; }
