import { contracts } from "@/constants/contracts"
import { Staking__factory } from "@/typechain-owned"

import { getSigner } from "@/libs/ethers"

export const getStakingContract = () => {
  const signer = getSigner()

  return Staking__factory.connect(contracts.staking, signer)
}
