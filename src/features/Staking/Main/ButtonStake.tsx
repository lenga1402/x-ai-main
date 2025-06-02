/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useMemo, useState } from "react"
import { contracts } from "@/constants/contracts"
import { useToken } from "@/contexts/tokenContext"
import { env } from "@/env.mjs"
import { api } from "@/utils"
import { Button } from "@mantine/core"
import {
  cleanNotifications,
  notifications,
  showNotification,
} from "@mantine/notifications"
import { useWeb3Modal } from "@web3modal/react"
import { BigNumber } from "ethers"
import { useAccount, useNetwork } from "wagmi"

import { parseEther } from "@/libs/ethers"

import { useInputAmount } from "../hooks/useInputAmount"
import { useSelectOption } from "../hooks/useSelectOption"
import { useStaking } from "../hooks/useStaking"

export const ButtonStake = () => {
  const { isConnected } = useAccount()
  const { chain } = useNetwork()
  const { open } = useWeb3Modal()
  const { balance, getAllowance, approve, getBalance } = useToken()
  const { stake } = useStaking()
  const { value: stakeAmount, setValue: setStakeAmount } = useInputAmount()
  const { value: stakeOptionId } = useSelectOption()
  const [isStaking, setIsStaking] = useState(false)
  const { refetch: refetchTotalStakedAmount } =
    api.staking.getTotalStakedAmount.useQuery(undefined, { enabled: false })

  const isCorrectChain = useMemo(
    () => chain?.id === Number(env.NEXT_PUBLIC_CHAIN_ID),
    [chain?.id]
  )

  const buttonText = useMemo(() => {
    if (!isConnected) return "Connect Wallet"

    if (!isCorrectChain) return `Switch to ${env.NEXT_PUBLIC_NETWORK_NAME}`

    return "Approve"
  }, [isConnected, isCorrectChain])

  const handleClick = async () => {
    if (!isConnected || !isCorrectChain) return open()

    try {
      if (!stakeOptionId) {
        throw "Please select stake option"
      }

      if (!stakeAmount) {
        throw "Please enter stake amount"
      }

      if (stakeAmount > balance) {
        throw "Stake amount must be smaller than balance!"
      }

      cleanNotifications()

      setIsStaking(true)

      const amountEther = parseEther(stakeAmount.toString())

      if (getAllowance) {
        const allowance = await getAllowance(contracts.staking)

        console.log("allowance checked", allowance)

        if (allowance.lt(BigNumber.from(amountEther)) && approve) {
          const result = await approve(contracts.staking)

          await result.wait()

          console.log("approve checked", result)
        }

        const result = await stake(Number(stakeOptionId), amountEther)

        await result.wait()

        console.log("stake checked", result)

        setStakeAmount(undefined)

        await getBalance()

        await refetchTotalStakedAmount()

        showNotification({
          color: "green",
          message: "Stake successfully!",
        })
      }
    } catch (error) {
      console.log(error)

      let message = "Stake failed!"

      if (typeof error === "string") {
        message = error
      }

      notifications.show({
        color: "red",
        message,
      })
    } finally {
      setIsStaking(false)
    }
  }

  if (!isConnected) return <></>

  return (
    <Button
      size="lg"
      radius="md"
      color="violet"
      onClick={() => void handleClick()}
      loading={isStaking}
      tt="uppercase"
    >
      {buttonText}
    </Button>
  )
}
