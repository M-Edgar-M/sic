import { LoginInitValues, RegisterInitValues } from "./FromikTypes";

export interface UserSettingsModel {
  dark: boolean;
  toggleDark: () => void;
}

export interface UserModel {
  userId: number | string | undefined;
  login: (values: LoginInitValues) => void;
  register: (values: RegisterInitValues) => void;
}

