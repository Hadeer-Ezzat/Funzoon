import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  UnsucceedResponseHandlerService,
  AppGlobalRouterService,
  LookupsService} from 'src/app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoolWizardPrivacy } from 'src/app/core/models';
import { FormControlErrorsEnum } from 'src/app/core/enums';
import { RuleLookupDto } from 'src/app/core/dtos/lookups/rule.lookup.dto';
import { PrivacyLookupDto } from 'src/app/core/dtos';
import { CancelationPolicyLookupDto } from 'src/app/core/dtos/lookups/cancelation-policy.lookup.dto';

@Component({
  selector: 'app-pool-privacy',
  templateUrl: './pool-privacy.component.html',
  styleUrls: ['./pool-privacy.component.scss']
})
export class PoolPrivacyComponent implements OnInit {

  formGroup: FormGroup;
  submitted: boolean = false;
  errorType = FormControlErrorsEnum
  @Output() formEmitter = new EventEmitter<FormGroup>();
  @Output() modelEmitter = new EventEmitter<PoolWizardPrivacy>();

  poolRules: RuleLookupDto[]
  poolPrivacyLevels: PrivacyLookupDto[]
  poolCancelationPolicies: CancelationPolicyLookupDto[]

  // poolRules: RuleLookupDto[] = [
  //   {
  //     id: 1,
  //     name: 'No Parties'
  //   },
  //   {
  //     id: 2,
  //     name: 'No Loud Music'
  //   },
  //   {
  //     id: 3,
  //     name: 'No Smoking'
  //   },
  //   {
  //     id: 4,
  //     name: 'No Food'
  //   },
  //   {
  //     id: 5,
  //     name: 'No Alcohol'
  //   },
  //   {
  //     id: 6,
  //     name: 'No Pets'
  //   },
  //   {
  //     id: 7,
  //     name: 'No Glass'
  //   },
  //   {
  //     id: 8,
  //     name: 'TEST TEST'
  //   },
  // ]

  // poolPrivacyLevels: PrivacyLookupDto[] = [
  //   {
  //     id: 1,
  //     name: 'Not Too Private',
  //     description: 'The pool area is visible from home and neighbors.'
  //   },
  //   {
  //     id: 2,
  //     name: 'Pretty Private',
  //     description: 'The pool area is visible from home but not to neighbors and shades will be closed.'
  //   },
  //   {
  //     id: 3,
  //     name: 'Super Private',
  //     description: "The pool area not visible from home or to neighbors or host isn't home."
  //   },
  // ]

  // poolCancelationPolicies: CancelationPolicyLookupDto[] = [
  //   {
  //     id: 1,
  //     name: 'Really Chilled Out',
  //     description: 'Full refund up to 24 hour before reservation start time.'
  //   },
  //   {
  //     id: 2,
  //     name: 'Chilled Out',
  //     description: 'Full refund up to 72 hour before reservation start time.'
  //   },
  //   {
  //     id: 3,
  //     name: 'Not Chilled',
  //     description: "Full refund up to 7 days (168 hours) before reservation start time."
  //   },
  //   {
  //     id: 4,
  //     name: 'Test',
  //     description: 'Test Test Test Test Test '
  //   },

  // ]

  constructor(
    private unsucceedResponseHandlerService: UnsucceedResponseHandlerService,
    private appGlobalRouterService: AppGlobalRouterService,
    private lookupsService: LookupsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.lookupsService.getRulesLookup().subscribe(data => {
      this.poolRules = data.result
      this.addRulesToForm()
    })

    this.lookupsService.getPrivaciesLookup().subscribe(data => {
      this.poolPrivacyLevels = data.result
      this.InitializeModelIfFormInitializationCompleted()
    })

    this.lookupsService.getCancelationPoliciesLookup().subscribe(data => {
      this.poolCancelationPolicies = data.result
      this.InitializeModelIfFormInitializationCompleted()
    })

    this.formInit()
  }

  get form(){ return this.formGroup.controls; }

  formInit(){
    this.formGroup = this.formBuilder.group({
      privacyLevel:      ['' , [Validators.required]],
      // rules:             this.formBuilder.array(new Array(this.poolRules.length).fill(false)),
      additionalRules:   ['', null],
      cancelationPolicy: ['', [Validators.required]],
    });
  }

  addRulesToForm(){
    this.formGroup.addControl('rules', this.formBuilder.array(new Array(this.poolRules.length).fill(false)))
    this.InitializeModelIfFormInitializationCompleted()
  }

  // https://next.angular.io/guide/deprecations#deprecated-features
  get poolWizardPrivacy(): PoolWizardPrivacy{
    return {
      privacyLevel:      +this.formGroup.get('privacyLevel').value,
      rules:              this.getSelectedRules(),
      additionalRules:    this.formGroup.get('additionalRules').value,
      cancelationPolicy: +this.formGroup.get('cancelationPolicy').value,
    }
  }

  getSelectedRules(){
    try {

      var selectedRulesIDs: number[] = []
      var rules = this.formGroup.get('rules').value
      for (let index = 0; index < rules.length; index++) {
        const isSelectedRule = rules[index]
        if(isSelectedRule){
          selectedRulesIDs.push(this.poolRules[index].id)
        }
      }

      return selectedRulesIDs

    } catch (error) {
      console.error(error);
      return []
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
    this.modelEmitter.emit(this.poolWizardPrivacy)
  }

  InitializeModelIfFormInitializationCompleted(){
    if(this.poolRules && this.poolPrivacyLevels && this.poolCancelationPolicies){
      this.setupEmitter()
    }
  }

}
