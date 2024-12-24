import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserProfileDto } from 'src/app/core/dtos/user/user-profile.dto';
import { UserFavoritesDto } from 'src/app/core/dtos/user/user-favorites.dto';
import { UserNotificationsDto } from 'src/app/core/dtos/user/user-notifications.dto';
import { UserPaymentsDto } from 'src/app/core/dtos/user/user-payments.dto';
import { UserPrivateInfoDto } from 'src/app/core/dtos/user/user-private-info.dto';
import { UserProfileInfoDto } from 'src/app/core/dtos/user/user-profile-info.dto';
import { UserPublicInfoDto } from 'src/app/core/dtos/user/user-public-info.dto';
import { UserService } from 'src/app/services/user/user.service';
import { CurrentUserService } from 'src/app/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  
  userProfile: UserProfileDto

  userDetailsProfile: FormGroup;
  userDetailsPayments: FormGroup;
  userDetailsFavorites: FormGroup;
  userDetailsNotifications: FormGroup;

  isSubmitted: boolean = false
  isLoading: boolean = true

  constructor(private userService: UserService, private currentUserService: CurrentUserService) {}

  ngOnInit(): void {
    // this.userProfile = new UserProfileDto()

    // const publicInfo: UserPublicInfoDto = {
    //   firstName: "Mohamed",
    //   lastName: "Mohsen",
    //   bio: "Bio Bio Bio Bio Bio",
    //   profileImg: "assets/images/agent.jpg"
    // }
    // const privateInfo: UserPrivateInfoDto = {
    //   email: "test@gmail.com",
    //   phoneNumber: "0123456789",
    //   dateOfBirth: new Date("2021-01-21")
    // }
    // const userProfileInfo: UserProfileInfoDto = {
    //   privateInformation: privateInfo,
    //   publicInformation: publicInfo
    // }
    // const userPayments: UserPaymentsDto = {
    //   isCreditCardSubscriber: true,
    //   cardHolder: "Mohamed Mohsen",
    //   cardNumber: "123456789",
    //   expirationDate: new Date("2021-01-21"),
    //   cvc: "1234"
    // }
    // const userNotifications: UserNotificationsDto = {
    //   isSendSMS: false,
    //   isEmailNotification: true,
    //   isPushNotification: true
    // }
    // const userFavorites: UserFavoritesDto = {

    // }
    // const _userProfileDto: UserProfileDto = {
    //   profileInformation: userProfileInfo,
    //   paymentInformation: userPayments,
    //   userFavorites: userFavorites,
    //   notificationSettings: userNotifications
    // }

    // this.userProfile = _userProfileDto

    this.userService.getUserProfile(this.currentUserService.user.userIdentifier).subscribe(response => {
      if(response.isSucceeded){
        this.userProfile = response.result
      }
      this.isLoading = false
    })
  }

  isValidToUpdate(): boolean{
    return (this.userDetailsProfile.valid && 
            this.userDetailsPayments.valid &&
            this.userDetailsNotifications.valid &&
            this.userDetailsFavorites.valid)// &&
            // this.userProfile.isAllWizardModelsExist())
  }

  update(){

    if(!this.isValidToUpdate())
    {
      console.error()
      return
    }

    this.isLoading = true
    this.userService.updateUserProfile(this.userProfile).subscribe(response => {
      if(response.isSucceeded){
        //Show alert
      }else{
        console.log(response.result)
      }
      this.isLoading = false
    })

  }

}
