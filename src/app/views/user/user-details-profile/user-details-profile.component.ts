import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserPrivateInfoDto, UserProfileInfoDto, UserPublicInfoDto } from 'src/app/core/dtos';
import { FormControlErrorsEnum } from 'src/app/core/enums';
import { FormValidator, IsStrongPassword } from '../../_helpers';

@Component({
  selector: 'app-user-details-profile',
  templateUrl: './user-details-profile.component.html',
  styleUrls: ['./user-details-profile.component.scss']
})
export class UserDetailsProfileComponent implements OnInit {

  formGroup: FormGroup;
  errorType = FormControlErrorsEnum
  formValidator: FormValidator

  @Output() formEmitter = new EventEmitter<FormGroup>();
  @Output() modelEmitter = new EventEmitter<UserProfileInfoDto>();
  @Input() userProfileInfo: UserProfileInfoDto
  
  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formInit()
    this.setupEmitter()
    this.formValidator = new FormValidator(this.formGroup)
    this.formValidator.isSubmitted = true

    this.formGroup.get('currentPassword').valueChanges
    .subscribe(currentPassword => {
      if (currentPassword && currentPassword != "") {
        this.formGroup.get('newPassword').setValidators([Validators.required, IsStrongPassword]);
      }
      else{
        this.formGroup.get('newPassword').clearValidators();
      }
        this.formGroup.get('newPassword').updateValueAndValidity();
        this.updateFormValidator()
    });

  }

  private updateFormValidator(){
    this.formValidator = new FormValidator(this.formGroup)
    this.formValidator.isSubmitted = true
  }

  isCurrentPasswordHasValue(): boolean{
    return this.formGroup.get('currentPassword').value && this.formGroup.get('currentPassword').value != ""
  }

  get form(){ return this.formGroup.controls; }

  formInit(){
    this.formGroup = this.formBuilder.group({
      firstName:       ['', [Validators.required]],
      lastName:        ['', [Validators.required]],
      bio:             ['', [Validators.required]],
      email:           ['', [Validators.required, Validators.email]],
      phoneNumber:     ['', [Validators.required]],
      dateOfBirth:     ['', [Validators.required]],
      currentPassword: ['', null],
      newPassword:     ['', null],
    });

    this.formGroup.get('firstName').setValue(this.userProfileInfo.publicInformation.firstName)
    this.formGroup.get('lastName').setValue(this.userProfileInfo.publicInformation.lastName)
    this.formGroup.get('bio').setValue(this.userProfileInfo.publicInformation.bio)
    
    this.formGroup.get('email').setValue(this.userProfileInfo.privateInformation.email)
    this.formGroup.get('phoneNumber').setValue(this.userProfileInfo.privateInformation.phoneNumber)
    this.formGroup.get('dateOfBirth').setValue(formatDate(this.userProfileInfo.privateInformation.dateOfBirth,'yyyy-MM-dd','en'))
    this.formGroup.get('currentPassword').setValue('')
    this.formGroup.get('newPassword').setValue('')

  }

  get userProfileInfoDto(): UserProfileInfoDto{

    const publicInfo: UserPublicInfoDto = {
      firstName: this.formGroup.get('firstName').value,
      lastName:  this.formGroup.get('lastName').value,
      bio:       this.formGroup.get('bio').value,
      profileImg: this.userProfileInfo.publicInformation.profileImg
    }
    const privateInfo: UserPrivateInfoDto = {
      email:       this.formGroup.get('email').value,
      phoneNumber: this.formGroup.get('phoneNumber').value,
      dateOfBirth: this.formGroup.get('dateOfBirth').value,
      currentPassword: this.formGroup.get('currentPassword').value,
      newPassword: this.formGroup.get('newPassword').value,
    }

    return {
      privateInformation: privateInfo,
      publicInformation: publicInfo
    }
  }

  setupEmitter(){
    this.emitAll()
    this.formGroup.valueChanges.subscribe(x => {
      this.emitAll()
    })
  }

  emitAll(){
    this.formEmitter.emit(this.formGroup)
    this.modelEmitter.emit(this.userProfileInfoDto)
  }

}
