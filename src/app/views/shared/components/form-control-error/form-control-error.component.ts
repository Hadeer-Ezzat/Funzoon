import { Component, Input, OnInit } from '@angular/core';
import { FormControlErrorsEnum } from 'src/app/core/enums';

@Component({
  selector: 'app-form-control-error',
  templateUrl: './form-control-error.component.html',
  styleUrls: ['./form-control-error.component.scss']
})
export class FormControlErrorComponent implements OnInit {

  @Input() showError: boolean = true
  @Input() errorMessage: string
  @Input() errorType: FormControlErrorsEnum
  constructor() { }

  ngOnInit(): void {
    if(!this.errorMessage && this.errorType){
      this.errorMessage = this.errorType
    }
  }

}
