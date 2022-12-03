import { USER } from "./User.model";

export interface DONE {
    (err: Error | null, user: USER | boolean): void;
}

export interface PASSPORTFIELDS {
    usernameField: string;
    passwordField: string;
}