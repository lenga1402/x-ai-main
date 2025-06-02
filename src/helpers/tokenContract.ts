import { contracts } from "@/constants/contracts"
import { XAIBOT__factory } from "@/typechain-non-owned"

import { getSigner } from "@/libs/ethers"

export const getTokenContract = () => {
  const signer = getSigner()

  return XAIBOT__factory.connect(contracts.token, signer)
}
