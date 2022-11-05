import create from 'zustand'
import { persist } from 'zustand/middleware'
import {UserSettingsModel} from './models/StoreModels'
export const useUserSetingsStore = create<UserSettingsModel>()(
  persist(
    (set, get) => ({
      dark: false,
      toggleDark: () => {
        set((state) =>  {
          // console.log(state)
          // console.log('get function: ', get().dark)
        return  {dark: !state.dark}
        })
      },
    }),
    {
      name: 'user-settings',
    }
  )
)
