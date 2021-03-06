import { BalanceState } from '@/store/balances/types';

export const defaultState = (): BalanceState => ({
  eth: {},
  btc: {
    standalone: {},
    xpubs: []
  },
  totals: {},
  usdToFiatExchangeRates: {},
  connectedExchanges: [],
  exchangeBalances: {},
  ethAccounts: {},
  btcAccounts: {},
  supportedAssets: [],
  manualBalances: [],
  manualBalanceByLocation: {}
});

export const state: BalanceState = defaultState();
