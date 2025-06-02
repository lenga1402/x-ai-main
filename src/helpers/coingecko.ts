import axios from "axios"

export interface ICoingeckoCurrency {
  image: string
  symbol: string
  total_supply: number
  total_volume: number
  name: string
  last_updated: string
  id: string
  atl_date: number
  ath_date: number
  ath: number
  ath_change_percentage: number
  atl: number
  atl_change_percentage: number
  circulating_supply: number
  current_price: number
  fully_diluted_valuation: number
  high_24h: number
  low_24h: number
  market_cap: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  market_cap_rank: number
  max_supply: number | null
  price_change_24h: number
  price_change_percentage_24h: number
  roi: number | null
}

export const getAllCurrencies = async (
  ids = "bitcoin,ethereum,binancecoin,binance-usd,tether"
) => {
  const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`

  const res = await axios.get<ICoingeckoCurrency[]>(api)

  return res.data
}
