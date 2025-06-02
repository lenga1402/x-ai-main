import { useCallback } from "react"
import { env } from "@/env.mjs"
import { getStakingContract } from "@/helpers/stakingContract"
import { type BigNumber, type BytesLike } from "ethers"
import { useAccount, useNetwork } from "wagmi"

import { calcGasLimit, formatBigNumber } from "@/libs/ethers"

import { useClaimList } from "./useClaimList"
import { useUnstakeList } from "./useUnstakeList"

export interface IUserStake {
  id: string
  amount: number
  claimed: boolean
  start: number
  claimTime: number
  optionId: string
}

export const useStaking = () => {
  const { address } = useAccount()
  const { chain } = useNetwork()
  const { setValue: setClaimList } = useClaimList()
  const { setValue: setUnstakeList } = useUnstakeList()

  const getContract = useCallback(() => {
    if (chain?.id !== Number(env.NEXT_PUBLIC_CHAIN_ID)) throw "Incorrect chain"

    return getStakingContract()
  }, [chain?.id])

  const decodeInputStakeFunc = useCallback(
    (value: BytesLike) => {
      try {
        const contract = getContract()

        const data = contract.interface.decodeFunctionData(
          "stake(uint256,uint256)",
          value
        ) as BigNumber[]

        if (data[1]) {
          return formatBigNumber(data[1])
        }

        return 0
      } catch (error) {
        console.log(error)

        return 0
      }
    },
    [getContract]
  )

  const stake = async (stakeId = 0, amountEther: BigNumber) => {
    if (address) {
      const contract = getContract()

      const estimateGas = await contract.estimateGas.stake(stakeId, amountEther)

      return await contract.stake(stakeId, amountEther, {
        gasLimit: calcGasLimit(estimateGas),
      })
    }

    throw "[Stake] No contract or address found"
  }

  const getUserStakeList = useCallback(async () => {
    try {
      if (!address) throw "No addresses found"

      const contract = getContract()

      const result = await contract.getUserStakeIdList(address)

      const claimList: IUserStake[] = []
      const unstakeList: IUserStake[] = []

      for (let i = 0; i < result.length; i++) {
        const idBigNumber = result[i]

        if (idBigNumber) {
          const id = formatBigNumber(idBigNumber)

          const userStake = await contract.userStakes(id)

          const amount = formatBigNumber(userStake.amount, true)

          const start = parseInt(userStake.start.toString())

          const claimTime = parseInt(userStake.claimTime.toString())

          const data = {
            id: `${id}`,
            amount,
            claimed: userStake.claimed,
            start,
            claimTime,
            optionId: formatBigNumber(userStake.stakeId).toString(),
          }

          if (!data.claimed) {
            if (!data.claimTime) {
              claimList.push(data)
            } else {
              unstakeList.push(data)
            }
          }
        }
      }

      setClaimList(claimList)
      setUnstakeList(unstakeList)
    } catch (error) {
      console.log(error)
    }
  }, [address, getContract, setClaimList, setUnstakeList])

  const claim = async (id: string) => {
    if (address) {
      const contract = getContract()

      const estimateGas = await contract.estimateGas.claim(id)

      return await contract.claim(id, { gasLimit: calcGasLimit(estimateGas) })
    }

    throw "[Claim] No contract or address found"
  }

  return {
    stake,
    claim,
    decodeInputStakeFunc,
    getUserStakeList,
  }
}
