export interface UserRegisterResultDto{
    succeeded: boolean,
    errors: UserRegisterError[]
}

export interface UserRegisterError{
    code: string,
    description: string
}