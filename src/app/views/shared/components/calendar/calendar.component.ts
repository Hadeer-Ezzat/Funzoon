import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { 
  UnsucceedResponseHandlerService,
  AppGlobalRouterService,
  LookupsService } from 'src/app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoolWizardDetails } from 'src/app/core/models';
import { FormControlErrorsEnum } from 'src/app/core/enums';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  formGroup: FormGroup;
  submitted: boolean = false;
  errorType = FormControlErrorsEnum
  @Output() formEmitter = new EventEmitter<FormGroup>();
  @Output() modelEmitter = new EventEmitter<boolean>();

  constructor(
    private unsucceedResponseHandlerService: UnsucceedResponseHandlerService,
    private appGlobalRouterService: AppGlobalRouterService,
    private lookupsService: LookupsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.lookupsService.getAmentitesLookup().subscribe(data => this.amenities = data.result)
    this.formInit()
    this.setupEmitter()
  }

  get form(){ return this.formGroup.controls; }

  formInit(){
    this.formGroup = this.formBuilder.group({
        
    });
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
    this.modelEmitter.emit(true)
  }

}
