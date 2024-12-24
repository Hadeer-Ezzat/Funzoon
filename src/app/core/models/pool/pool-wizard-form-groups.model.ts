import { FormGroup } from "@angular/forms";

export class PoolWizardFormGroups{
    details: WizardFormGroup;
    specifications: WizardFormGroup;
    privacy: WizardFormGroup;
    attachments: WizardFormGroup;
    calendar: WizardFormGroup;
    payment: WizardFormGroup;

    constructor() {
        this.details = new WizardFormGroup()
        this.specifications = new WizardFormGroup()
        this.privacy = new WizardFormGroup()
        this.attachments = new WizardFormGroup()
        this.payment = new WizardFormGroup()
    }
}

export class WizardFormGroup{
    formGroup: FormGroup
    isSubmitted: boolean

    constructor(){
        this.isSubmitted = false
    }
}