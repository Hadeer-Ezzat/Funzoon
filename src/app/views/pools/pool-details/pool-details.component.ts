import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  UnsucceedResponseHandlerService,
  AppGlobalRouterService,
  LookupsService } from 'src/app/services';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PoolWizardDetails } from 'src/app/core/models';
import { FormControlErrorsEnum } from 'src/app/core/enums';
import { AmenityLookupDto } from 'src/app/core/dtos';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-pool-details',
  templateUrl: './pool-details.component.html',
  styleUrls: ['./pool-details.component.scss']
})
export class PoolDetailsComponent implements OnInit {

  formGroup: FormGroup;
  submitted: boolean = false;
  errorType = FormControlErrorsEnum
  amenitiesDropdownSettings: IDropdownSettings = {};
  selectedAmenities: AmenityLookupDto[] = []

  @Output() formEmitter = new EventEmitter<FormGroup>();
  @Output() modelEmitter = new EventEmitter<PoolWizardDetails>();
  @Input() isSubmitted: boolean = false

  // amenities: AmenityLookupDto[]

  amenities: AmenityLookupDto[] = [{
    id: 1,
    name: 'first'
  },
  {
    id: 2,
    name: 'second'
  },
  {
    id: 3,
    name: 'third'
  },
  {
    id: 4,
    name: 'third'
  },
  {
    id: 5,
    name: 'third'
  },
  {
    id: 6,
    name: 'third'
  }]


  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(
    private unsucceedResponseHandlerService: UnsucceedResponseHandlerService,
    private appGlobalRouterService: AppGlobalRouterService,
    private lookupsService: LookupsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.lookupsService.getAmentitesLookup().subscribe(data => this.amenities = data.result)
    this.setupAmenitiesMultiSelectDropDown()
    this.formInit()
    this.setupEmitter()
  }

  get form(){ return this.formGroup.controls; }

  formInit(){
    this.formGroup = this.formBuilder.group({
        name:                       ['', Validators.required],
        description:                ['', Validators.required],
        address:                    ['', Validators.required],
        specialAccessInstructions:  ['', null],
        amenities:                  new FormControl(this.selectedAmenities, Validators.required),
        additionalAmenities:        ['', null],
    });

  }

  // https://next.angular.io/guide/deprecations#deprecated-features
  get poolWizardDetails(): PoolWizardDetails{
    return {
      name:                       this.formGroup.get('name').value,
      description:                this.formGroup.get('description').value,
      address:                    this.formGroup.get('address').value,
      specialAccessInstructions:  this.formGroup.get('specialAccessInstructions').value,
      amenities:                  this.formGroup.get('amenities').value,
      additionalAmenities:        this.formGroup.get('additionalAmenities').value,
    }
  }

  setupEmitter(){
    this.emitAll()
    this.formGroup.valueChanges.subscribe(x => {
      this.submitted = true
      this.emitAll()
    })
  }

  setupAmenitiesMultiSelectDropDown(){

    this.amenitiesDropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // itemsShowLimit: 3,
      allowSearchFilter: true
    }
  }

  public onItemSelect(item: AmenityLookupDto) {
    this.selectedAmenities.push(item)
  }

  public onDeSelect(item: AmenityLookupDto) {
    const index: number = this.selectedAmenities.findIndex(a => a.id == item.id)
    if (index !== -1) {
        this.selectedAmenities.splice(index, 1)
    }
  }

  public onSelectAll(items: AmenityLookupDto[]) {
    this.selectedAmenities = items
  }

  public onDeSelectAll(items: AmenityLookupDto[]) {
    this.selectedAmenities = []
  }

  emitAll(){
    this.formEmitter.emit(this.formGroup)
    this.modelEmitter.emit(this.poolWizardDetails)
  }

}
