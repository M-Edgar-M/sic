import create from 'zustand'
import { persist } from 'zustand/middleware'
import {UserSettingsModel} from '../models/StoreModels'
export const useUserSetingsStore = create<UserSettingsModel>()(
  persist(
    (set, get) => ({
      dark: false,
      toggleDark: () => {
        set((state) =>  ({dark: !state.dark}))
      },
    }),
    {
      name: 'user-settings',
    }
  )
)
