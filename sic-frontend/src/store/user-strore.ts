import create from 'zustand'
import { UserModel } from '../models/StoreModels'
import { axiosInstance } from '../utilities/axios'

export const useUserStore = create<UserModel>()(
  (set, get) =>
  ({
    userId: undefined,
    login: async (values): Promise<any> => {
      const response = await axiosInstance.post('/auth/login', values)
      set(() => ({userId: response.data}))
    },
    register: (values) => {
      console.log(values)
    },
  })

)
