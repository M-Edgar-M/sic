import { LoginInitValues, RegisterInitValues } from "./FromikTypes";
import { NavigateFunction } from "./ReactRouterDomModels";
import { SnackbarModel } from "./SnackbarModel";

export interface UserSettingsModel {
  dark: boolean;
  toggleDark: () => void;
}

export interface UserModel {
  userId: number | string | undefined;
  login: (values: LoginInitValues, navigate: NavigateFunction, enqueueSnackbar: SnackbarModel) => void;
  register: (values: RegisterInitValues, navigate: NavigateFunction, enqueueSnackbar: SnackbarModel) => void;
}

