import create from 'zustand'
import { LoginInitValues, RegisterInitValues } from '../models/FromikTypes'
import { NavigateFunction } from '../models/ReactRouterDomModels'
import { SnackbarModel } from '../models/SnackbarModel'
import { UserModel } from '../models/StoreModels'
import { axiosInstance } from '../utilities/axios'

export const useUserStore = create<UserModel>()(
  (set, get) =>
  ({
    userId: undefined,
    login: async (values: LoginInitValues, navigate: NavigateFunction, enqueueSnackbar: SnackbarModel): Promise<any> => {
      try {
        const response = await axiosInstance.post('/auth/login', values)
        set(() => ({userId: response.data}))
        if (response.status === 200) {
          navigate("/");
        }
      } catch (error) {
        if(error instanceof Error) {
          enqueueSnackbar(JSON.stringify(error.message), {
             variant: "error",
             autoHideDuration: 3000,
           });
        } else {
          enqueueSnackbar("Unexpected error", {
            variant: "error",
            autoHideDuration: 3000,
          });
        }
        
      }
    },
    register: async (values: RegisterInitValues, navigate: NavigateFunction, enqueueSnackbar: SnackbarModel): Promise<any> => {
      try {
        const response = await axiosInstance.post('user/register', values);
        if(response.status === 200) {
          navigate('/login')
        }
      } catch (error) {
        if(error instanceof Error) {
          enqueueSnackbar(JSON.stringify(error.message), {
            variant: "error",
            autoHideDuration: 3000,
          });
        } else {
          enqueueSnackbar('Unexpected error', {
            variant: "error",
            autoHideDuration: 3000,
          });
        }
      }
    },
  })

)
