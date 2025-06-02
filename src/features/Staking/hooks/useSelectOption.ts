import { create } from "zustand"

type State = {
  value?: string
}

type Action = {
  setValue: (value: State["value"]) => void
}

export const useSelectOption = create<State & Action>((set) => ({
  setValue: (value) => set(() => ({ value })),
}))
