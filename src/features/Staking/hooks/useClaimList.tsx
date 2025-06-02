import { create } from "zustand"

import { type IUserStake } from "./useStaking"

type State = {
  value: IUserStake[]
}

type Action = {
  setValue: (value: State["value"]) => void
}

export const useClaimList = create<State & Action>((set) => ({
  value: [],
  setValue: (value) => set(() => ({ value })),
}))
