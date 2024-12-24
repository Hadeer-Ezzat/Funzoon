import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserNotificationsDto } from 'src/app/core/dtos'
import { FormControlErrorsEnum } from 'src/app/core/enums'

@Component({
  selector: 'app-user-details-notifications',
  templateUrl: './user-details-notifications.component.html',
  styleUrls: ['./user-details-notifications.component.scss']
})
export class UserDetailsNotificationsComponent implements OnInit {


  formGroup: FormGroup
  submitted: boolean = false
  errorType = FormControlErrorsEnum
  @Output() formEmitter = new EventEmitter<FormGroup>()
  @Output() modelEmitter = new EventEmitter<UserNotificationsDto>()
  @Input() userNotifications: UserNotificationsDto
  
  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formInit()
    this.setupEmitter()
  }

  get form(){ return this.formGroup.controls }

  formInit(){
    this.formGroup = this.formBuilder.group({
      isSendSMS:           [false, null],
      isEmailNotification: [false, null],
      isPushNotification:  [false, null]
    })

    this.formGroup.get('isSendSMS').setValue(this.userNotifications.isSendSMS)
    this.formGroup.get('isEmailNotification').setValue(this.userNotifications.isEmailNotification)
    this.formGroup.get('isPushNotification').setValue(this.userNotifications.isPushNotification)
  }

  get userNotificationsDto(): UserNotificationsDto{
    return {
      isSendSMS: this.formGroup.get('isSendSMS').value,
      isEmailNotification: this.formGroup.get('isEmailNotification').value,
      isPushNotification: this.formGroup.get('isPushNotification').value,
    }
  }

  setupEmitter(){
    this.emitAll()
    this.formGroup.valueChanges.subscribe(x => {
      this.submitted = true
      this.emitAll()
    })
  }

  emitAll(){
    this.formEmitter.emit(this.formGroup)
    this.modelEmitter.emit(this.userNotificationsDto)
  }
}
