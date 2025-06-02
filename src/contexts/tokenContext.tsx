import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { env } from "@/env.mjs"
import { getTokenContract } from "@/helpers/tokenContract"
import type { BigNumber, ContractTransaction } from "ethers"
import { useAccount, useNetwork } from "wagmi"

import {
  calcGasLimit,
  formatBigNumber,
  getChecksumAddress,
  MAX_UINT256,
} from "@/libs/ethers"

interface ITokenContext {
  balance: number
  getAllowance?: (spender: string) => Promise<BigNumber>
  approve?: (spender: string) => Promise<ContractTransaction>
  getBalance: () => Promise<void>
}

export const TokenContext = createContext<ITokenContext>({
  balance: 0,
  getBalance: () => Promise.resolve(),
})

export const useToken = () => useContext(TokenContext)

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  const { address } = useAccount()
  const { chain } = useNetwork()
  const [balance, setBalance] = useState(0)

  const getContract = useCallback(() => {
    if (chain?.id !== Number(env.NEXT_PUBLIC_CHAIN_ID)) throw "Incorrect chain"

    return getTokenContract()
  }, [chain?.id])

  const getBalance = useCallback(async () => {
    if (!address) throw "No addresses found!"

    try {
      const contract = getContract()

      const balanceOfCoin = await contract.balanceOf(address)

      const formattedBalance = formatBigNumber(balanceOfCoin, true)
      setBalance(formattedBalance)
    } catch (error) {
      console.log(error)
    }
  }, [address, getContract])

  const approve = useCallback(
    async (spender: string) => {
      const contract = getContract()

      const estimateGas = await contract.estimateGas.approve(
        spender,
        MAX_UINT256
      )

      return await contract.approve(spender, MAX_UINT256, {
        gasLimit: calcGasLimit(estimateGas),
      })
    },
    [getContract]
  )

  const onTransfer = useCallback(() => {
    try {
      const contract = getContract()

      console.log(`Listening to event "Transfer"...`)

      contract.on("Transfer", (from: string, to: string, amount: BigNumber) => {
        from = getChecksumAddress(from)
        to = getChecksumAddress(to)

        const formattedAmount = formatBigNumber(amount)

        if (from === address || to === address) {
          console.log(
            `Receive transfer ${formattedAmount} JYC from ${from} to ${to}`
          )

          void getBalance()
        }
      })
    } catch (error) {
      console.log(error)
    }
  }, [address, getBalance, getContract])

  const getAllowance = useCallback(
    async (spender: string) => {
      if (!address) throw "No addresses found"

      const contract = getContract()

      const estimateGas = await contract.estimateGas.allowance(address, spender)

      return await contract.allowance(address, spender, {
        gasLimit: calcGasLimit(estimateGas),
      })
    },
    [address, getContract]
  )

  useEffect(() => {
    void getBalance()
  }, [getBalance])

  useEffect(() => {
    void onTransfer()
  }, [onTransfer])

  const value = useMemo(
    () => ({
      balance,
      getAllowance,
      approve,
      getBalance,
    }),
    [approve, balance, getAllowance, getBalance]
  )

  return <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
}
