export class UserPaymentsDto{
    isCreditCardSubscriber: boolean
    cardNumber: string
    cardHolder: string
    expirationDate: Date
    cvc: string
}