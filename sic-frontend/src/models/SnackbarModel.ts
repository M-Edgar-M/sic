import { OptionsObject, SnackbarKey, SnackbarMessage } from "notistack";

export interface SnackbarModel {
    (message: SnackbarMessage, options?: OptionsObject): SnackbarKey;
}