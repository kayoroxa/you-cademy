import { ReactNode } from 'react'
import { create } from 'zustand'

interface Data {
  renderNode: ReactNode | null
  onSubmit: (data: unknown) => void
}

interface MyState {
  data: Data
  setData: (node: ReactNode, onSubmit?: (data: unknown) => void) => void
}

const useAlertDialogStore = create<MyState>()((set, get) => ({
  data: {
    renderNode: null,
    onSubmit: () => {},
  },
  setData: (node, onSubmit) => {
    set({ data: { renderNode: node, onSubmit: onSubmit || (() => {}) } })
  },
}))

export default useAlertDialogStore
