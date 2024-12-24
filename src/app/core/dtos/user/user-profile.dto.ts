import { UserFavoritesDto } from "./user-favorites.dto";
import { UserNotificationsDto } from "./user-notifications.dto";
import { UserPaymentsDto } from "./user-payments.dto";
import { UserProfileInfoDto } from "./user-profile-info.dto";

export class UserProfileDto{
    profileInformation: UserProfileInfoDto
    paymentInformation: UserPaymentsDto
    notificationSettings: UserNotificationsDto
    userFavorites: UserFavoritesDto

    // isAllWizardModelsExist(): boolean{
    //     if (this.userProfile && 
    //         this.userPayments &&
    //         this.userNotifications &&
    //         this.userFavorites){
    //         return true
    //     }
    //     return false
    // }
}