import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { 
  UnsucceedResponseHandlerService,
  AppGlobalRouterService } from 'src/app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Area, Depth, PoolWizardSpecifications } from 'src/app/core/models';
import { FormControlErrorsEnum, YesNoChoicesEnum } from 'src/app/core/enums';

@Component({
  selector: 'app-pool-specifications',
  templateUrl: './pool-specifications.component.html',
  styleUrls: ['./pool-specifications.component.scss']
})
export class PoolSpecificationsComponent implements OnInit {

  formGroup: FormGroup;
  submitted: boolean = false;
  errorType = FormControlErrorsEnum
  @Output() formEmitter = new EventEmitter<FormGroup>();
  @Output() modelEmitter = new EventEmitter<PoolWizardSpecifications>();

  constructor(
    private unsucceedResponseHandlerService: UnsucceedResponseHandlerService,
    private appGlobalRouterService: AppGlobalRouterService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formInit()
    this.setupEmitter()
  }

  get form(){ return this.formGroup.controls; }

  formInit(){
    this.formGroup = this.formBuilder.group({
        areaLength:                     ['', Validators.required],
        areaWidth:                      ['', Validators.required],
        depthShallowestPoint:           ['', Validators.required],
        depthDeepestPoint:              ['', Validators.required],
        pricePerHour:                   ['', Validators.required],
        maxCapacity:                    ['', Validators.required],
        isAllowChildren:                [YesNoChoicesEnum.no, null],
        isAllowInfants:                 [YesNoChoicesEnum.no, null],
        isChargableForAdditionalGuests: [YesNoChoicesEnum.no, null],
    });
  }

  // https://next.angular.io/guide/deprecations#deprecated-features
  get poolWizardSpecifications(): PoolWizardSpecifications{

    const _area: Area = {
      length: +this.formGroup.get('areaLength').value,
      width:  +this.formGroup.get('areaWidth').value,
    }
    const _depth: Depth = {
      shallowestPoint: +this.formGroup.get('depthShallowestPoint').value,
      deepestPoint:    +this.formGroup.get('depthDeepestPoint').value,
    }

    return {
      area: _area,
      depth: _depth,
      pricePerHour:   +this.formGroup.get('pricePerHour').value,
      maxCapacity:    +this.formGroup.get('maxCapacity').value,
      isAllowChildren: this.formGroup.get('isAllowChildren').value,
      isAllowInfants:  this.formGroup.get('isAllowInfants').value,
      isChargableForAdditionalGuests: this.formGroup.get('isChargableForAdditionalGuests').value,
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
    this.modelEmitter.emit(this.poolWizardSpecifications)
  }

}
