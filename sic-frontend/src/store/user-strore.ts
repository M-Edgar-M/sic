import create from 'zustand'
import { LoginInitValues, RegisterInitValues } from '../models/FromikTypes'
import { UserModel } from '../models/StoreModels'
import { axiosInstance } from '../utilities/axios'

export const useUserStore = create<UserModel>()(
  (set, get) =>
  ({
    userId: undefined,
    login: async (values: LoginInitValues): Promise<any> => {
      const response = await axiosInstance.post('/auth/login', values)
      set(() => ({userId: response.data}))
    },
    register: async (values: RegisterInitValues): Promise<any> => {
      const response = await axiosInstance.post('user/register', values);
      console.log('🚀 ~ file: user-strore.ts:16 ~ register: ~ response', response)
      // set(() => ({}))
    },
  })

)
