import { USER } from "./User.model";

export interface DONE {
    (err: Error | null, user: USER | boolean | any): void;
}

export interface PASSPORTFIELDS {
    usernameField: string;
    passwordField: string;
}