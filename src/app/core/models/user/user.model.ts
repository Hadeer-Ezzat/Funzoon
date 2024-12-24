import { RoleEnum } from 'src/app/core/enums';

export interface User{
    userName: string
    email: string
    role: RoleEnum
    userIdentifier: string
}