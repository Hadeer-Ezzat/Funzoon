import { PagesNameConstants } from "./pages-name.const"

export class UrlTreesConstants{    
    static login = `${PagesNameConstants.auth}/${PagesNameConstants.login}`
    static home = `/${PagesNameConstants.home}`
    static notfound = `/${PagesNameConstants.page404}`
    static unauthorized = `/${PagesNameConstants.page401}`
    static default = '/'
}