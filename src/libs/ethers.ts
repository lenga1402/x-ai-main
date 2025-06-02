import { BigNumber, constants, providers, utils } from "ethers"

declare const window: {
  ethereum?: providers.ExternalProvider | providers.JsonRpcFetchFunc
}

export const MAX_UINT256 = constants.MaxUint256

const getProvider = () => {
  const ethereum = window.ethereum

  if (!ethereum) throw "Please install metamask extension!"

  const provider = new providers.Web3Provider(ethereum)

  if (!provider.provider.isMetaMask) throw "Please install metamask extension!"

  return provider
}

export const getSigner = () => {
  const provider = getProvider()

  return provider.getSigner()
}

export const getChain = async () => {
  const provider = getProvider()

  return await provider.getNetwork()
}

export const calcGasLimit = (estimateGas: BigNumber) => {
  return estimateGas.add(
    estimateGas.mul(BigNumber.from("15").div(BigNumber.from("100")))
  )
}

export const formatBigNumber = (bigNumberValue: BigNumber, special = false) => {
  const value = parseInt(bigNumberValue._hex)

  if (!special) return value

  return value / 10 ** 18
}

export const parseEther = (ether: string) => {
  return utils.parseEther(ether)
}

export const getChecksumAddress = (address: string) => {
  return utils.getAddress(address)
}
