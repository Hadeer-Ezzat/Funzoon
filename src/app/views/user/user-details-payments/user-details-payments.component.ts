import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserPaymentsDto, UserPrivateInfoDto, UserPublicInfoDto } from 'src/app/core/dtos';
import { FormControlErrorsEnum } from 'src/app/core/enums';

@Component({
  selector: 'app-user-details-payments',
  templateUrl: './user-details-payments.component.html',
  styleUrls: ['./user-details-payments.component.scss']
})
export class UserDetailsPaymentsComponent implements OnInit {

  formGroup: FormGroup;
  submitted: boolean = false;
  errorType = FormControlErrorsEnum
  @Output() formEmitter = new EventEmitter<FormGroup>();
  @Output() modelEmitter = new EventEmitter<UserPaymentsDto>();
  @Input() userPayments: UserPaymentsDto
  
  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formInit()
    this.setupEmitter()
  }

  get form(){ return this.formGroup.controls; }

  formInit(){
    this.formGroup = this.formBuilder.group({
      isCreditCardSubscriber: [false, null],
      cardNumber:             ['', [Validators.required]],
      cardHolder:             ['', [Validators.required]],
      expirationDate:         ['', [Validators.required]],
      cvc:                    ['', [Validators.required]]
    });

    this.formGroup.get('isCreditCardSubscriber').setValue(this.userPayments.isCreditCardSubscriber)
    this.formGroup.get('cardNumber').setValue(this.userPayments.cardNumber)
    this.formGroup.get('cardHolder').setValue(this.userPayments.cardHolder)
    this.formGroup.get('expirationDate').setValue(formatDate(this.userPayments.expirationDate,'yyyy-MM-dd','en'))
    this.formGroup.get('cvc').setValue(this.userPayments.cvc)
  }

  get userPaymentsDto(): UserPaymentsDto{
    return {
      isCreditCardSubscriber: this.formGroup.get('isCreditCardSubscriber').value,
      cardNumber: this.formGroup.get('cardNumber').value,
      cardHolder: this.formGroup.get('cardHolder').value,
      expirationDate: this.formGroup.get('expirationDate').value,
      cvc: this.formGroup.get('cvc').value,
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
    this.modelEmitter.emit(this.userPaymentsDto)
  }

}
