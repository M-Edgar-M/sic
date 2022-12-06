import create from 'zustand'
import {UserModel} from '../models/StoreModels'
import { axiosInstance } from '../utilities/axios'
export const useUserStore = create<UserModel>()(
    (set, get) => ({
      userId: undefined,
      login: async (values) => {
        const response = await axiosInstance.post('/auth/login', {
          params: values
        })
        // TODO: Error response
        console.log('🚀 ~ file: user-strore.ts:11 ~ login: ~ response', response)
        // set({ fishies: await response.json() })
      },
      register: (values) => {
        console.log(values)
      },
    })
)
