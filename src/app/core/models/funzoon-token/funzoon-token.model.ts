import { User } from '..'
import { RoleEnum } from 'src/app/core/enums'

// Why this class not just called "Token", because there is an angular "Token" reserved class which may leads to conflicts.
export class FunzoonToken{
    userName: string
    email: string
    role: string
    exp: number
    iss: string
    aud: string
    userIdentifier: string

    getUserInfo(): User{
        const user: User = {
            userName: this.userName,
            email: this.email,
            role: <RoleEnum>this.role,
            userIdentifier: this.userIdentifier
        }
        return user
    }
}