import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserFavoritesDto, UserNotificationsDto } from 'src/app/core/dtos';
import { FormControlErrorsEnum } from 'src/app/core/enums';

@Component({
  selector: 'app-user-details-favorites',
  templateUrl: './user-details-favorites.component.html',
  styleUrls: ['./user-details-favorites.component.scss']
})
export class UserDetailsFavoritesComponent implements OnInit {

  formGroup: FormGroup
  submitted: boolean = false
  errorType = FormControlErrorsEnum

  @Output() formEmitter = new EventEmitter<FormGroup>()
  @Output() modelEmitter = new EventEmitter<UserFavoritesDto>()
  @Input() userNotifications: UserFavoritesDto
  
  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formInit()
    this.setupEmitter()
  }

  get form(){ return this.formGroup.controls }

  formInit(){
    this.formGroup = this.formBuilder.group({
      
    })
  }

  get userFavoritesDto(): UserFavoritesDto{
    return new UserFavoritesDto()
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
    this.modelEmitter.emit(this.userFavoritesDto)
  }

}
