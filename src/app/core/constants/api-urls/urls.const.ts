import { environment } from 'src/environments/environment';

export class UrlsConstants{
    private static _baseURL = environment.baseURL

    static home = UrlsConstants._baseURL + '/'

    static signIn = UrlsConstants._baseURL + '/auth/login'
    static signOut = UrlsConstants._baseURL + '/auth/logout'
    static register = UrlsConstants._baseURL + '/auth/register'
    static isLoggedIn = UrlsConstants._baseURL + '/auth/is-logged-in'


    static fileUpload = UrlsConstants._baseURL + '/pools/fileupload'    

    // Lookups
    static amenitiesLookup = UrlsConstants._baseURL + '/lookups/amenities'    
    static rulesLookup = UrlsConstants._baseURL + '/lookups/rules'    
    static privaciesLookup = UrlsConstants._baseURL + '/lookups/privacies'    
    static cancelationPoliciesLookup = UrlsConstants._baseURL + '/lookups/cancellation-policies'    

    // Pools
    static createPool = UrlsConstants._baseURL + '/pools/create'
    static allPools = UrlsConstants._baseURL + '/pools/all'
    static poolDetailsInFindPools = UrlsConstants._baseURL + '/pools/find-pool-more-details'
    static myPools = UrlsConstants._baseURL + '/pools/my-pools'
    static myPoolsAtPage = UrlsConstants._baseURL + '/pools/my-pools-pages'
    static poolsAtPage = UrlsConstants._baseURL + '/pools/search'

    // User
    static userProfile = UrlsConstants._baseURL + '/user/profile'
    static updateUserProfile = UrlsConstants._baseURL + '/user/update-profile'
    static updateImageProfile = UrlsConstants._baseURL + '/user/update-image-profile'    

    // JUST FOR TESTING PURPOSE
    static userPool = UrlsConstants._baseURL + '/pools/secret'
    static hostPool = UrlsConstants._baseURL + '/pools/host'
    static adminPool = UrlsConstants._baseURL + '/pools/admin'    
}