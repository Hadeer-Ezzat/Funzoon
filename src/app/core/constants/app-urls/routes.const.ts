import { PagesNameConstants } from "./pages-name.const"

export class RoutesConstants{    

    // Auth routes
    static login = `/${PagesNameConstants.auth}/${PagesNameConstants.login}`
    static register = `/${PagesNameConstants.auth}/${PagesNameConstants.register}`
    
    // Home
    static home = `/${PagesNameConstants.home}`
    
    // Pools
    static myPools = `/${PagesNameConstants.pools}/${PagesNameConstants.myPools}`
    static addPool = `/${PagesNameConstants.pools}/${PagesNameConstants.myPools}/${PagesNameConstants.addPool}`
    static myPoolsMoreDetails = `/${PagesNameConstants.pools}/${PagesNameConstants.myPools}/${PagesNameConstants.myPoolsMoreDetails}`
    static findPool = `/${PagesNameConstants.pools}/${PagesNameConstants.findPool}`
    static findPoolMoreDetails = `/${PagesNameConstants.pools}/${PagesNameConstants.findPool}/${PagesNameConstants.findPoolMoreDetails}`

    // User
    static currentUserProfile = `/${PagesNameConstants.user}/${PagesNameConstants.profile}`

    static notfound = `/${PagesNameConstants.page404}`
    static unauthorized = `/${PagesNameConstants.page401}`
    static default = '/'
}