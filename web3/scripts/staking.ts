import contracts from "../../src/constants/contracts.json"
import { deploy } from "./deploy"

;(function () {
  const tokenAddress = contracts.token

  void deploy("Staking", tokenAddress)
})()
