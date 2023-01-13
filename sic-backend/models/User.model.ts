export type USER_RESPONSE = {
    first_name: string,
    surname: string,
    email: string,
    created_on: string,
    last_login?: string,
    public_id: string
}

export type USER = {
    id: number,
    first_name: string,
    surname: string,
    password: string,
    email: string,
    created_on: string,
    last_login: string,
    public_id: string
}