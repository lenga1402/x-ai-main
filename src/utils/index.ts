export * from "./api"
export * from "./textSplit"

export const shortenWalletAddress = (address: string) => {
  if (address.length < 9) return address

  const firstPart = address.slice(0, 5)
  const lastPart = address.slice(-4)

  return `${firstPart}...${lastPart}`
}

export const formatPrice = (price: number | string) => {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 5 }).format(
    Number(price)
  )
}

export const convertSecondsToDateLabel = (seconds: number) => {
  const minutes = seconds / 60

  if (minutes < 1) return `${seconds} seconds`

  const hours = minutes / 60

  if (hours < 1) return `${minutes} minutes`

  const days = hours / 24

  if (days < 1) return `${hours} hours`

  const months = days / 30

  if (months < 1) return `${days} days`

  const years = months / 12

  if (years < 1) return `${months} months`

  return `${years} years`
}
