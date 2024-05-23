import { User } from '@prisma/client'
import { create } from 'zustand'

interface MyState {
  user: {
    email: User['email']
    id: User['id']
    name: User['name']
  } | null

  setUser: (user: MyState['user']) => void
}

export const useUserLoginStore = create<MyState>()((set, get) => ({
  user: null,
  setUser: user => set({ user }),
  resetUser: () => set({ user: null }),
}))
