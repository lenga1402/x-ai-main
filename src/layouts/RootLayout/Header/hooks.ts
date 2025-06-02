import { create } from "zustand"

type OpenMenuState = {
  value: boolean
}

type OpenMenuAction = {
  setValue: (value: OpenMenuState["value"]) => void
}

export const useOpenMenu = create<OpenMenuState & OpenMenuAction>((set) => ({
  value: false,
  setValue: (value) => set(() => ({ value })),
}))
