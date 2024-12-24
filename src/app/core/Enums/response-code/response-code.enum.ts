// NOTE: this enum of response codes uses only in the failure cases
// We always waiting for a valid response from the APIs,
// If not, so we can create an internal [FRONT_END] failure,
// just for uniforming our reponses.

// ALL RESPONSES HAS TO BE WITHIN 9000 ~ 10000
export enum ResponseCodeEnum{
    requestInterceptorException = 9000,
    responseInterceptorException = 9001,
}