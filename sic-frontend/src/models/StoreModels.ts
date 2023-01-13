import { LoginInitValues, RegisterInitValues } from "./FromikTypes";
import { NavigateFunction } from "./ReactRouterDomModels";

export interface UserSettingsModel {
  dark: boolean;
  toggleDark: () => void;
}

export interface UserModel {
  userId: number | string | undefined;
  login: (values: LoginInitValues) => void;
  register: (values: RegisterInitValues, navigate: NavigateFunction) => void;
}

