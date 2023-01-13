import create from 'zustand'
import { LoginInitValues, RegisterInitValues } from '../models/FromikTypes'
import { NavigateFunction } from '../models/ReactRouterDomModels'
import { UserModel } from '../models/StoreModels'
import { axiosInstance } from '../utilities/axios'

export const useUserStore = create<UserModel>()(
  (set, get) =>
  ({
    userId: undefined,
    login: async (values: LoginInitValues): Promise<any> => {
      // TODO: bring navigate
      const response = await axiosInstance.post('/auth/login', values)
      set(() => ({userId: response.data}))
    },
    register: async (values: RegisterInitValues, navigate: NavigateFunction): Promise<any> => {
      await axiosInstance.post('user/register', values);
      navigate('/login')
    },
  })

)
