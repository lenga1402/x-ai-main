import { contracts } from "@/constants/contracts"
import { env } from "@/env.mjs"
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"
import { Staking__factory } from "@/typechain-owned"
import { convertSecondsToDateLabel } from "@/utils"
import { providers } from "ethers"
import moment from "moment"

import { formatBigNumber } from "@/libs/ethers"

const getContract = () => {
  if (env.NEXT_PUBLIC_NEW_RPC_URL) {
    const provider = new providers.JsonRpcProvider(env.NEXT_PUBLIC_NEW_RPC_URL)

    return Staking__factory.connect(contracts.staking, provider)
  }

  throw "RPC_URL not found!"
}

export const stakingRouter = createTRPCRouter({
  getTotalStakedAmount: publicProcedure.query(async () => {
    const contract = getContract()

    const totalStakedAmountBigNumber = await contract.totalStakedAmount()

    const totalStakedAmount = formatBigNumber(totalStakedAmountBigNumber, true)

    return totalStakedAmount
  }),

  getOptions: publicProcedure.query(async () => {
    const contract = getContract()

    const totalOptionsBigNumber = await contract.totalStake()

    const totalOptions = formatBigNumber(totalOptionsBigNumber)

    const options: {
      id: string
      label: string
      duration: number
      apy: number
    }[] = []

    for (let i = 0; i < totalOptions; i++) {
      const option = await contract.stakes(i)

      const id = i.toString()
      const duration = formatBigNumber(option.duration)
      const apy = formatBigNumber(option.apy)
      const label = convertSecondsToDateLabel(duration)

      options.push({ id, label, duration, apy })
    }

    return options
  }),

  getUnstakeFee: publicProcedure.query(async () => {
    const contract = getContract()

    const unstakeFeeBigNumber = await contract.unstakeFee()

    const unstakeFee = formatBigNumber(unstakeFeeBigNumber)

    return unstakeFee
  }),

  getHistory: publicProcedure.query(async () => {
    const contract = getContract()

    const historyList = await contract.getAllUserStakeHistory()

    return historyList.map((item) => ({
      address: item.user,
      amount: formatBigNumber(item.amount),
      createdAt: parseInt(item.created_at.toString()),
      type: item.history_type,
    }))
  }),

  getTotalStakedChart: publicProcedure.query(async () => {
    const contract = getContract()

    const totalUserStake = parseInt(
      (await contract.totalUserStake()).toString()
    )

    const result: NodeJS.Dict<number> = {}

    // console.log(totalUserStake);

    for (let i = 0; i < totalUserStake; i++) {
      const item = await contract.userStakes(i)

      const time = moment
        .unix(parseInt(item.start.toString()))
        .format("MMMM D, YYYY")

      const amount = formatBigNumber(item.amount)

      result[time] = (result[time] || 0) + amount
    }

    return Object.entries(result).map(([key, value = 0]) => ({
      date: key,
      total: value,
    }))
  }),
})
