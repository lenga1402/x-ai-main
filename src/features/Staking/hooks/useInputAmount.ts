import { create } from "zustand"

type State = {
  value?: number
}

type Action = {
  setValue: (value: State["value"]) => void
}

export const useInputAmount = create<State & Action>((set) => ({
  setValue: (value) => set(() => ({ value })),
}))
