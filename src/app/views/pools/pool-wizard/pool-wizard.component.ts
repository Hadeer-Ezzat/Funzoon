import { Component, OnInit, ViewChild } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { PoolWizard } from 'src/app/core/models'
import { AppGlobalRouterService, PoolsService } from 'src/app/services'

@Component({
  selector: 'app-pool-wizard',
  templateUrl: './pool-wizard.component.html',
  styleUrls: ['./pool-wizard.component.scss']
})
export class PoolWizardComponent implements OnInit {

  poolWizard: PoolWizard

  poolDetailsFormGroup: FormGroup;
  poolSpecificationsFormGroup: FormGroup;
  poolPrivacyFormGroup: FormGroup;
  poolAttachmentsFormGroup: FormGroup;
  poolCalendarFormGroup: FormGroup;
  poolPaymentFormGroup: FormGroup;

  isSubmitted: boolean = false
  isLoading: boolean = false

  constructor(private appGlobalRouterService: AppGlobalRouterService,
    private poolsService: PoolsService) { }

  ngOnInit(): void {
    this.poolWizard = new PoolWizard()
  }

  isValidToSubmit(): boolean{
    return (this.poolDetailsFormGroup.valid && 
            this.poolSpecificationsFormGroup.valid &&
            this.poolPrivacyFormGroup.valid &&
            this.poolAttachmentsFormGroup.valid &&
            this.poolCalendarFormGroup.valid &&
            this.poolPaymentFormGroup.valid &&
            this.poolWizard.isAllWizardModelsExist())
  }

  submit(){

    if(!this.isValidToSubmit()){
      return
    }

    const poolDto = this.poolWizard.getAsPoolDto()
    this.isLoading = true
    this.poolsService.createPool(poolDto).subscribe(response => {
      if(response.isSucceeded){
        this.poolWizard.uploadAdditionalAttachments(response.result.id)
        this.poolsService.uploadCoverImage(this.poolWizard.getCoverImageFormData(response.result.id)).subscribe(coverImageResponse => {
          this.isLoading = false
          this.redirectToMyPools()
        })
      }
    })

  }

  redirectToMyPools(){
    this.appGlobalRouterService.navigateToFindPoolPage()
  }

}
