import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserProfileInfoDto } from 'src/app/core/dtos/user/user-profile-info.dto';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details-navigation',
  templateUrl: './user-details-navigation.component.html',
  styleUrls: ['./user-details-navigation.component.scss']
})
export class UserDetailsNavigationComponent implements OnInit {

  @Input() userProfileInfo: UserProfileInfoDto
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  url: any;
  onSelectFile(event) {
    
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }

      const formData = new FormData()
      formData.append('attachment', event.target.files[0])

      this.userService.updateUserProfileImage(formData).subscribe(response => {
        if(response.isSucceeded){

        }else{
          console.error('Failed to update profile image.')
        }
      })

    }
  }

}
